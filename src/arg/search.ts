/**
 * サイト内検索 ARG モジュール
 * 検索ワードに対応した隠し記事を表示する。
 */
import { searchArticles, getArticleById, type Article } from "./articles.ts";

export function initSearch(): void {
  const input = document.getElementById(
    "site-search"
  ) as HTMLInputElement | null;
  const btn = document.getElementById("search-btn") as HTMLButtonElement | null;
  const resultsEl = document.getElementById(
    "search-results"
  ) as HTMLDivElement | null;

  if (!input || !btn || !resultsEl) return;

  const doSearch = () => {
    const q = input.value.trim();
    if (!q) {
      resultsEl.classList.add("hidden");
      resultsEl.innerHTML = "";
      return;
    }

    const results = searchArticles(q);
    renderResults(results, q, resultsEl);
  };

  btn.addEventListener("click", doSearch);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
    if (e.key === "Escape") {
      resultsEl.classList.add("hidden");
      resultsEl.innerHTML = "";
      input.value = "";
    }
  });
}

function renderResults(
  results: Article[],
  query: string,
  container: HTMLElement
): void {
  container.innerHTML = "";
  container.classList.remove("hidden");

  if (results.length === 0) {
    container.innerHTML = `<p class="search-no-result">「${escHtml(
      query
    )}」に一致する情報は見つかりませんでした。</p>`;
    return;
  }

  const list = document.createElement("div");
  list.className = "space-y-2";

  for (const article of results) {
    const item = document.createElement("div");
    item.className = "result-item";
    item.innerHTML = `
      <h4>${escHtml(article.title)}</h4>
      <p>${escHtml(article.summary)}</p>
    `;
    item.addEventListener("click", () => openArticleModal(article.id));
    list.appendChild(item);
  }

  container.appendChild(list);
}

/**
 * 記事モーダルを開く
 * 本文中の arg-hint は装飾を持たない地の文であり、クリックによる
 * 他記事への自動遷移も行わない（ユーザー自身に読み解いて検索させるため）。
 */
export function openArticleModal(id: string): void {
  const article = getArticleById(id);
  if (!article) return;

  const modal = document.getElementById(
    "article-modal"
  ) as HTMLDivElement | null;
  const content = document.getElementById(
    "article-content"
  ) as HTMLDivElement | null;
  const closeBtn = document.getElementById(
    "article-close"
  ) as HTMLButtonElement | null;
  const backdrop = document.getElementById(
    "article-backdrop"
  ) as HTMLDivElement | null;

  if (!modal || !content) return;

  content.innerHTML = article.content;
  modal.classList.remove("hidden");

  const close = () => modal.classList.add("hidden");
  closeBtn?.addEventListener("click", close, { once: true });
  backdrop?.addEventListener("click", close, { once: true });
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
