/**
 * UI モジュール: ナビゲーション (SPA ルーティング)
 */
export function initNav(): void {
  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!navbar) return;

  // スクロールでnavbarに背景を追加
  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 60);
    },
    { passive: true }
  );

  // モバイルメニュー開閉
  menuBtn?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });

  // SPA ページ切替: すべてのアンカーリンクをインターセプト
  document.addEventListener("click", (e) => {
    const anchor = (e.target as Element).closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const id = href.slice(1);
    if (!id) return;
    e.preventDefault();
    showPage(id);
    // モバイルメニューを閉じる
    mobileMenu?.classList.add("hidden");
  });

  // 初期ページ表示
  showPage("home");
}

/** 指定した id を持つ .spa-page を表示し、他を隠す */
export function showPage(id: string): void {
  // #hero クリックはホームページへ
  const rawId = id === "hero" ? "home" : id;

  // 対象要素を取得
  const rawEl = document.getElementById(rawId);

  // spa-page でない場合、親の spa-page を探してそちらを表示 → 後でスクロール
  let targetId = rawId;
  let scrollTarget: HTMLElement | null = null;
  if (rawEl && !rawEl.classList.contains("spa-page")) {
    const parentPage = rawEl.closest<HTMLElement>(".spa-page");
    if (parentPage?.id) {
      targetId = parentPage.id;
      scrollTarget = rawEl;
    }
  }

  document.querySelectorAll<HTMLElement>(".spa-page").forEach((el) => {
    el.classList.toggle("page-active", el.id === targetId);
  });

  if (scrollTarget) {
    requestAnimationFrame(() =>
      scrollTarget!.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  } else {
    window.scrollTo(0, 0);
  }

  // サブページ検出: data-subpage="true" がある場合 body にクラスを付与
  const targetEl = document.getElementById(targetId);
  const isSubpage = targetEl?.dataset.subpage === "true";
  document.body.classList.toggle("subpage-active", isSubpage);

  // ページ遷移アニメーション
  if (targetEl) {
    targetEl.classList.remove("page-enter");
    // リフローでクラスを再適用
    void targetEl.offsetWidth;
    targetEl.classList.add("page-enter");
    targetEl.addEventListener(
      "animationend",
      () => targetEl.classList.remove("page-enter"),
      { once: true }
    );

    // ページ内のカード类をリセットして再アニメーション
    const animTargets = targetEl.querySelectorAll<HTMLElement>(
      ".room-card, .facility-card, .activity-card, .amenity-item, .section-fade"
    );
    animTargets.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.5s ease ${
        i * 0.07
      }s, transform 0.5s ease ${i * 0.07}s`;
      // 次フレームでアニメーション開始
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      });
    });
  }
}
