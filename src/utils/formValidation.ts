/**
 * フォームの touched バリデーション
 * blur (フォーカスを外した) 時に .touched クラスを付与する。
 * CSS では .form-input.touched:invalid のみ赤枠を表示する。
 */
export function initFormTouchedValidation(): void {
  applyTouchedListeners(document);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          applyTouchedListeners(node);
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function applyTouchedListeners(root: Document | Element): void {
  const selector = "input.form-input, select.form-input, textarea.form-input";
  const inputs =
    root instanceof Document
      ? root.querySelectorAll<HTMLElement>(selector)
      : root.matches(selector)
      ? [root as HTMLElement]
      : root.querySelectorAll<HTMLElement>(selector);

  inputs.forEach((el) => {
    if (!el.dataset.touchedBound) {
      el.dataset.touchedBound = "1";
      el.addEventListener("blur", () => el.classList.add("touched"));
    }
  });
}
