/**
 * セキュリティ対策モジュール
 * - 右クリック禁止
 * - F12 / Ctrl+Shift+I などのショートカット無効化
 * - debugger ループによる開発者ツール使用阻害
 */

export function initSecurity(): void {
  // ① 右クリック禁止
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
  });

  // ② キーボードショートカット無効化
  document.addEventListener("keydown", (e) => {
    // F12
    if (e.key === "F12") {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
    if (
      e.ctrlKey &&
      e.shiftKey &&
      ["I", "J", "C", "i", "j", "c"].includes(e.key)
    ) {
      e.preventDefault();
      return false;
    }
    // Ctrl+U (ソース表示)
    if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
      e.preventDefault();
      return false;
    }
    // Ctrl+S (保存)
    if (e.ctrlKey && (e.key === "s" || e.key === "S")) {
      e.preventDefault();
      return false;
    }
  });

  // ③ debugger ループ（開発者ツールを開いている間は無限一時停止）
  // ウィンドウサイズの差分で devtools を検出し、開いていたら debugger を起動する
  const devtoolsLoop = () => {
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
      // eslint-disable-next-line no-debugger
      debugger;
    }
    setTimeout(devtoolsLoop, 1000);
  };
  devtoolsLoop();
}
