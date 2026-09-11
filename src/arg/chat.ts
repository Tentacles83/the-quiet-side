/**
 * オーナーチャット ARG モジュール
 * プレイヤーが被害者全員の名前を入力した後に解放される。
 * オーナー・御影聡との対話で彼を説得するのが目標。
 *
 * エンディングは3種類:
 *   C（トゥルー）: 対話を最後まで進め、オーナーに点呼をやめるよう強く迫る
 *   B（ノーマル）: 対話を最後まで進めるが、オーナーを追い詰めず共感で終える
 *   A（バッド）　: 話が噛み合わないまま(無関係な返答が続き)対話が決裂する
 */

import { appendOwnerMessage, appendUserMessage } from "./booking.ts";

type ConvinceStage = 0 | 1 | 2 | 3 | 4 | "end";
type EndingType = "A" | "B" | "C";

// キーワードに基づく返答マトリクス
interface OwnerResponse {
  keywords: string[];
  reply: string;
  advanceStage?: boolean;
  // stage 4 でのみ使用。advanceStage 経由でエンディングに到達する際、
  // どのエンディングに向かうかを指定する（未指定時は C 扱い）
  endingType?: EndingType;
}

const STAGE_RESPONSES: Record<number, OwnerResponse[]> = {
  0: [
    {
      keywords: [
        "冴島",
        "前田",
        "佐藤",
        "高橋",
        "井岡",
        "仲間",
        "友達",
        "友人",
      ],
      reply: "……彼らの名前を、なぜあなたが知っているのですか。",
      advanceStage: true,
    },
    {
      keywords: ["こんにちは", "はじめまして", "こんばんは"],
      reply:
        "……こちらは公開されていないはずのページです。どのようにしてここへ？",
    },
    {
      keywords: [],
      reply: "…誰ですか。ここに来るべきではなかった。",
    },
  ],
  1: [
    {
      keywords: ["ミナカミ", "水神", "神", "呪い", "真実"],
      reply:
        "ミナカミ様のことを知っているのですか……あなたは、調べてきたのですね。",
      advanceStage: true,
    },
    {
      keywords: ["事故", "転覆", "湖", "水難", "溺れ"],
      reply:
        "あの夜のことは……思い出したくない。ですが、彼らのためなら、何度でも向き合います。",
    },
    {
      keywords: [],
      reply: "あなたが何を知っているのか、話してください。",
    },
  ],
  2: [
    {
      keywords: [
        "点呼",
        "儀式",
        "やめて",
        "止めろ",
        "止めてください",
        "止まれ",
      ],
      reply:
        "点呼を止めろと……しかし、彼らを解放するにはこれしか方法がないのです。ミナカミ様がそう言っていた。",
      advanceStage: true,
    },
    {
      keywords: ["利用", "騙された", "嘘", "約束"],
      reply:
        "ミナカミ様が嘘をついているとでも？……そんなはずはない。あの声は本物だった。",
    },
    {
      keywords: [],
      reply: "……あなたは私を止めに来たのですか。",
    },
  ],
  3: [
    {
      keywords: ["鏡", "写し", "反射", "自分", "欲", "願い", "増幅"],
      reply:
        "鏡……ミナカミ様は、鏡……？　私が聞いた「仲間を解放してやる」という声は、私自身の——",
      advanceStage: true,
    },
    {
      keywords: ["神じゃない", "神でない", "悪神", "邪神", "嘘"],
      reply: "ミナカミ様が本物の神でないとしたら……この7年間の、点呼は……",
    },
    {
      keywords: [],
      reply: "……もっと教えてください。ミナカミ様とは、何なのですか。",
    },
  ],
  4: [
    {
      keywords: [
        "止めろ",
        "止めてください",
        "終わらせろ",
        "終わり",
        "やめろ",
        "止まれ",
        "彼らのために",
        "仲間のために",
        "苦しみ",
        "解放",
        "謝罪",
        "謝って",
      ],
      reply: "……わかった。",
      advanceStage: true,
      endingType: "C",
    },
    {
      keywords: [
        "仕方ない",
        "仕方がない",
        "それでもいい",
        "一緒に背負う",
        "許す",
        "責めない",
        "分かってあげる",
        "分かってあげたい",
      ],
      reply: "……そうですか。少し、考えさせてください。",
      advanceStage: true,
      endingType: "B",
    },
    {
      keywords: [],
      reply: "私は……どうすればいい。彼らに、どう顔を合わせれば……",
    },
  ],
};

// トゥルーエンド（C）: 説得に成功し、オーナーが点呼をやめる
const ENDING_SEQUENCE_C = [
  "今夜、点呼を行わないことにします。",
  "……湖が、騒いでいる。",
  "冴島、前田、佐藤、高橋、井岡——",
  "すまなかった。本当に、すまなかった。",
  "……このチャットは、もう使えなくなります。",
  "ありがとう。あなたが来てくれなければ、ずっと気づかなかった。",
  "——さようなら。",
];

// ノーマルエンド（B）: 心は動かすが、完全な決断には至らない
const ENDING_SEQUENCE_B = [
  "……少し、時間をください。",
  "仲間たちに償う方法が、他にもあるのかもしれない。",
  "今すぐには、約束できません。",
  "ですが……今夜だけは、点呼をしないことにします。",
  "……ありがとう。話を聞いてくれて。",
  "——また、いつか。",
];

// バッドエンド（A）: 対話が噛み合わず決裂する
const ENDING_SEQUENCE_A = [
  "……もう、いいです。",
  "あなたには、関係のないことだ。",
  "今夜も、いつも通り点呼を行います。",
  "二度と、ここには来ないでください。",
];

// 無関係な返答がこの回数続くとバッドエンド（A）に至る
const FAIL_THRESHOLD = 6;

let currentStage: ConvinceStage = 0;
let isTyping = false;
let endingStarted = false;
let failedAttempts = 0;

export function initChat(): void {
  const toggleBtn = document.getElementById(
    "chat-toggle"
  ) as HTMLButtonElement | null;
  const minBtn = document.getElementById(
    "chat-minimize"
  ) as HTMLButtonElement | null;
  const window_ = document.getElementById(
    "chat-window"
  ) as HTMLDivElement | null;
  const sendBtn = document.getElementById(
    "chat-send"
  ) as HTMLButtonElement | null;
  const chatInput = document.getElementById(
    "chat-input"
  ) as HTMLInputElement | null;

  if (!toggleBtn || !window_) return;

  toggleBtn.addEventListener("click", () => {
    window_.classList.toggle("hidden");
  });

  minBtn?.addEventListener("click", () => {
    window_.classList.add("hidden");
  });

  const send = () => {
    if (!chatInput || isTyping) return;
    const text = chatInput.value.trim();
    if (!text) return;

    appendUserMessage(text);
    chatInput.value = "";

    if (typeof currentStage === "number") {
      handleStageResponse(text, currentStage);
    }
  };

  sendBtn?.addEventListener("click", send);
  chatInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") send();
  });
}

function handleStageResponse(input: string, stage: number): void {
  if (endingStarted) return;

  const responses = STAGE_RESPONSES[stage] ?? [];
  const lower = input.toLowerCase();

  // キーワードマッチ（最初にマッチしたものを使用）
  let matched = responses.find(
    (r) => r.keywords.length > 0 && r.keywords.some((k) => lower.includes(k))
  );
  if (!matched) {
    matched = responses.find((r) => r.keywords.length === 0);
  }
  if (!matched) return;

  const isFallback = matched.keywords.length === 0;

  isTyping = true;
  const delay = 1200 + Math.random() * 800;

  setTimeout(() => {
    appendOwnerMessage(matched!.reply);

    if (isFallback) {
      failedAttempts += 1;
    }

    if (matched!.advanceStage) {
      const next = stage + 1;
      if (next >= 5) {
        currentStage = "end";
        startEndingSequence(matched!.endingType ?? "C");
        isTyping = false;
        return;
      }
      currentStage = next as ConvinceStage;
    } else if (failedAttempts >= FAIL_THRESHOLD) {
      currentStage = "end";
      startEndingSequence("A");
      isTyping = false;
      return;
    }

    isTyping = false;
  }, delay);
}

async function startEndingSequence(ending: EndingType): Promise<void> {
  endingStarted = true;
  const sequence =
    ending === "C"
      ? ENDING_SEQUENCE_C
      : ending === "B"
      ? ENDING_SEQUENCE_B
      : ENDING_SEQUENCE_A;

  let delay = 2000;
  for (const msg of sequence) {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        appendOwnerMessage(msg);
        resolve();
      }, delay);
    });
    delay = 3000 + Math.random() * 1000;
  }

  // 最後: チャット入力を無効化
  setTimeout(() => {
    const input = document.getElementById(
      "chat-input"
    ) as HTMLInputElement | null;
    const sendBtn = document.getElementById(
      "chat-send"
    ) as HTMLButtonElement | null;
    if (input) {
      input.disabled = true;
      input.placeholder = "——通信が切断されました";
    }
    if (sendBtn) sendBtn.disabled = true;

    // エンディング後処理
    onArgEnding(ending);
  }, delay + 2000);
}

/** ARG エンディング到達後の演出 */
function onArgEnding(ending: EndingType): void {
  // localStorageで状態保持（どのエンディングに到達したか）
  localStorage.setItem("arg-ending-reached", ending);
  applyEndingEffects(ending);
}

/** エンディング演出を DOM に適用 (既達成状態でのリロード時にも使用) */
export function applyEndingEffects(ending?: EndingType): void {
  const resolved: EndingType =
    ending ??
    ((localStorage.getItem("arg-ending-reached") as EndingType | null) ??
      "C");

  // チャットトグルボタンを表示 + 強調
  const chatToggle = document.getElementById("chat-toggle");
  if (chatToggle) {
    chatToggle.classList.remove("hidden");
    chatToggle.classList.add("ending-glow");
  }

  // owner-chat ウィジェット自体も表示しておく
  const ownerChat = document.getElementById("owner-chat");
  ownerChat?.classList.remove("hidden");

  const notice = document.getElementById("site-notice");
  const noticeText = document.getElementById("site-notice-text");
  if (!notice || !noticeText) return;

  if (resolved === "C") {
    // トゥルーエンド: オーナーは点呼をやめ、後日死亡が確認される
    noticeText.textContent =
      "【重要なお知らせ】オーナー御影聡が御鏡湖にて死亡確認されました。これに伴い、御鏡ヴィラRESORT & SPAは2024年10月31日をもって営業を終了いたしました。長年のご愛顧に深く感謝申し上げます。";
    notice.classList.add("visible", "ending");
  } else if (resolved === "B") {
    // ノーマルエンド: 結末は明かされないまま、営業が一時休止する
    noticeText.textContent =
      "【お知らせ】オーナーの都合により、本日以降の営業を一時休止させていただいております。再開時期は未定です。";
    notice.classList.add("visible", "ending");
  }
  // A（バッドエンド）の場合、表向きは何も変わらない。営業は通常通り続く。
}
