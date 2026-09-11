/**
 * 予約フォーム ARG モジュール
 *
 * 各部屋は特定の被害者と紐付けられており、
 * その部屋に被害者の名前で予約するとlocalStorageに記録される。
 * 5部屋すべて揃ったときオーナーチャットが解放される。
 *
 * セキュリティ: 正解の名前はすべてSHA-256ハッシュで保持し、
 * 平文はソースコードに現れない。
 */

// SHA-256 ハッシュを計算するユーティリティ
async function sha256(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text.trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// 被害者ハッシュ（順番通り: 0=田中蛍 1=鈴木月 2=佐藤霧 3=高橋星 4=伊藤波）
let computedVictimHashes: string[] | null = null;

async function getVictimHashes(): Promise<string[]> {
  if (computedVictimHashes) return computedVictimHashes;
  const encoded = [
    "pdbypvrvYqrZzw==", // 冴島 蛍助 (蛍の間)
    "q8r2pN7qYqTeyg==", // 前田 梨月 (月影の間)
    "pv/SqtXmYqve5Q==", // 佐藤 紗霧 (水霧の間)
    "q+napOvJYqTa3Q==", // 高橋 星一 (星灯りの間)
    "pv7IqtXmYqTx4A==", // 井岡 美波 (波の間)
  ];
  const KEY = 0x42;
  const names: string[] = encoded.map((b64) => {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      bytes[i] = bin.charCodeAt(i) ^ KEY;
    }
    return new TextDecoder("utf-8").decode(bytes);
  });
  computedVictimHashes = await Promise.all(names.map(sha256));
  return computedVictimHashes;
}

// 部屋 → 被害者インデックスのマッピング
const ROOM_VICTIM_MAP: Record<string, number> = {
  hotaru: 0, // 蛍の間 → 冴島 蛍助
  tsukikage: 1, // 月影の間 → 前田 梨月
  mizukiri: 2, // 水霧の間 → 佐藤 紗霧
  hoshiakari: 3, // 星灯りの間 → 高橋 星一
  nami: 4, // 波の間 → 井岡 美波
};

const LS_KEY = "arg-reservations";

function getSavedRooms(): Set<string> {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveRoom(room: string): void {
  const rooms = getSavedRooms();
  rooms.add(room);
  localStorage.setItem(LS_KEY, JSON.stringify([...rooms]));
}

function allRoomsUnlocked(): boolean {
  const rooms = getSavedRooms();
  return Object.keys(ROOM_VICTIM_MAP).every((r) => rooms.has(r));
}

export function initBooking(): void {
  const guestCountSel = document.getElementById(
    "guest-count"
  ) as HTMLSelectElement | null;
  const extraNames = document.getElementById(
    "extra-guest-names"
  ) as HTMLDivElement | null;
  const form = document.getElementById(
    "reservation-form"
  ) as HTMLFormElement | null;
  const modal = document.getElementById(
    "reserve-modal"
  ) as HTMLDivElement | null;
  const modalTitle = document.getElementById(
    "modal-title"
  ) as HTMLElement | null;
  const modalBody = document.getElementById("modal-body") as HTMLElement | null;
  const modalClose = document.getElementById(
    "modal-close"
  ) as HTMLButtonElement | null;
  const backdrop = document.getElementById(
    "modal-backdrop"
  ) as HTMLDivElement | null;

  if (!form) return;

  // 日付バリデーション: 過去日・当日を除外
  const checkinInput = document.getElementById(
    "checkin"
  ) as HTMLInputElement | null;
  const checkoutInput = document.getElementById(
    "checkout"
  ) as HTMLInputElement | null;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];
  if (checkinInput) {
    checkinInput.min = minDate;
    checkinInput.addEventListener("change", () => {
      if (checkoutInput) {
        checkoutInput.min = checkinInput.value;
        if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
          checkoutInput.value = "";
        }
      }
    });
  }
  if (checkoutInput) checkoutInput.min = minDate;

  // ページ読み込み時にlocalStorageを確認（すでに全室揃っていれば解放済み）
  // 注意: ここでは「オーナーとのチャットが開放されている」状態を復元するのみ。
  // オーナー死亡等のエンディング演出は arg/chat.ts の applyEndingEffects() が
  // arg-ending-reached を見て復元するため、ここでは行わない
  // （全室が埋まった時点＝会話が始まる前なので、時期尚早な演出を出さないこと）。
  if (allRoomsUnlocked()) {
    setTimeout(() => {
      // owner-chatウィジェットとchat-toggleボタンを両方表示
      document.getElementById("owner-chat")?.classList.remove("hidden");
      const chatToggle = document.getElementById("chat-toggle");
      if (chatToggle) {
        chatToggle.classList.remove("hidden");
        chatToggle.classList.add("ending-glow");
      }
    }, 500);
  }

  // 宿泊人数に応じて名前フィールドを追加
  guestCountSel?.addEventListener("change", () => {
    if (!extraNames) return;
    extraNames.innerHTML = "";
    const count = parseInt(guestCountSel.value) || 1;
    for (let i = 2; i <= count; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
        <label class="form-label">宿泊者様 ${i}名目のお名前</label>
        <input type="text" name="name_${i}" class="form-input guest-name-extra" placeholder="例：山田 花子" />
      `;
      extraNames.appendChild(div);
    }
  });

  // フォーム送信
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // 送信時に全フィールドを touched にし、バリデーションエラーを一斉表示
    form.querySelectorAll<HTMLElement>(".form-input").forEach((el) => {
      el.classList.add("touched");
    });
    if (!form.checkValidity()) {
      // 最初の無効フィールドにスクロール
      const firstInvalid = form.querySelector<HTMLElement>(
        ".form-input:invalid"
      );
      firstInvalid?.focus();
      return;
    }

    const roomSelect = form.elements.namedItem("room") as HTMLSelectElement;
    const roomValue = roomSelect?.value ?? "";
    const victimIndex = ROOM_VICTIM_MAP[roomValue] ?? -1;

    const allNameInputs = [
      document.getElementById("guest-name-1") as HTMLInputElement,
      ...(Array.from(
        document.querySelectorAll(".guest-name-extra")
      ) as HTMLInputElement[]),
    ];
    const names = allNameInputs.map((i) => i?.value?.trim()).filter(Boolean);

    if (victimIndex >= 0) {
      const victimHashes = await getVictimHashes();
      const expectedHash = victimHashes[victimIndex];
      const nameHashes = await Promise.all(names.map(sha256));
      if (nameHashes.includes(expectedHash)) {
        saveRoom(roomValue);
        if (allRoomsUnlocked()) {
          triggerOwnerChatUnlock(modal, modalTitle, modalBody);
          const closeHandler = () => modal?.classList.add("hidden");
          modalClose?.addEventListener("click", closeHandler, { once: true });
          backdrop?.addEventListener("click", closeHandler, { once: true });
          return;
        }
      }
    }

    showNormalConfirmation(modal, modalTitle, modalBody);
    const closeHandler = () => modal?.classList.add("hidden");
    modalClose?.addEventListener("click", closeHandler, { once: true });
    backdrop?.addEventListener("click", closeHandler, { once: true });
  });
}

function showNormalConfirmation(
  modal: HTMLElement | null,
  title: HTMLElement | null,
  body: HTMLElement | null
): void {
  if (!modal || !title || !body) return;
  title.textContent = "ご予約を受け付けました";
  body.innerHTML = `
    <p>ご予約内容を確認いたします。担当スタッフより2営業日以内にご連絡いたします。</p>
    <p>ご不明な点はお気軽にお問い合わせください。</p>
    <p class="text-xs text-neutral-600 mt-4">なお、夜間点呼へのご協力をお願い申し上げます。</p>
  `;
  modal.classList.remove("hidden");
}

function triggerOwnerChatUnlock(
  modal: HTMLElement | null,
  title: HTMLElement | null,
  body: HTMLElement | null
): void {
  if (!modal || !title || !body) return;
  title.innerHTML =
    '<span class="glitch flicker text-red-400">——誰かがいる</span>';
  body.innerHTML = `
    <p class="text-red-400">…….</p>
    <p>あなたは彼らの名前を知っている。</p>
    <p class="text-neutral-600 text-xs">右下に、見覚えのないものが現れたはずです。</p>
  `;
  modal.classList.remove("hidden");
  setTimeout(() => {
    const chat = document.getElementById("owner-chat");
    if (chat) {
      chat.classList.remove("hidden");
      appendOwnerMessage("……久々に、あの名前を聞きました。");
      setTimeout(() => appendOwnerMessage("あなたは何者ですか。"), 2000);
    }
  }, 1800);
}

export function appendOwnerMessage(text: string): void {
  const messages = document.getElementById("chat-messages");
  if (!messages) return;
  const div = document.createElement("div");
  div.className = "msg-owner";
  div.innerHTML = `
    <p class="msg-name">御影 聡</p>
    <span class="msg-bubble">${escHtml(text)}</span>
  `;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

export function appendUserMessage(text: string): void {
  const messages = document.getElementById("chat-messages");
  if (!messages) return;
  const div = document.createElement("div");
  div.className = "msg-user";
  div.innerHTML = `<span class="msg-bubble">${escHtml(text)}</span>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
