/**
 * UI モジュール: FAQ アコーディオン
 */
export function initFaq(): void {
  const faqList = document.getElementById("faq-list");
  if (!faqList) return;

  faqList.querySelectorAll<HTMLElement>(".faq-item").forEach((item) => {
    const question = item.querySelector<HTMLButtonElement>(".faq-question");
    const answer = item.querySelector<HTMLElement>(".faq-answer");
    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // 他を閉じる
      faqList.querySelectorAll<HTMLElement>(".faq-item").forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".faq-answer")?.classList.add("hidden");
      });
      // 今のを開閉
      if (!isOpen) {
        item.classList.add("open");
        answer.classList.remove("hidden");
      }
    });
  });
}
