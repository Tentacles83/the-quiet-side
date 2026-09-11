<template>
  <!-- ARG: オーナーチャット (隠し要素 - 初期非表示) -->
  <div id="owner-chat" class="hidden fixed bottom-6 right-6 z-50">
    <div
      id="chat-window"
      class="hidden w-80 bg-neutral-950 border border-neutral-700 shadow-2xl mb-3"
    >
      <div
        class="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900"
      >
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span class="text-xs tracking-widest text-neutral-300">御影 聡</span>
        </div>
        <button id="chat-minimize" class="text-neutral-500 hover:text-white">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        </button>
      </div>
      <div
        id="chat-messages"
        class="h-64 overflow-y-auto p-4 space-y-3 text-xs"
      ></div>
      <div class="border-t border-neutral-800 p-3 flex gap-2">
        <input
          id="chat-input"
          type="text"
          placeholder="メッセージを入力..."
          class="flex-1 bg-neutral-900 border border-neutral-700 text-neutral-100 px-3 py-2 text-xs focus:outline-none focus:border-neutral-500"
        />
        <button
          id="chat-send"
          class="bg-neutral-700 hover:bg-neutral-600 text-white px-3 py-2 text-xs transition-colors"
        >
          送信
        </button>
      </div>
    </div>
    <button
      id="chat-toggle"
      class="hidden w-12 h-12 bg-neutral-900 border border-neutral-700 hover:border-neutral-500 flex items-center justify-center shadow-lg transition-all"
    >
      <svg
        class="w-5 h-5 text-neutral-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
  </div>
</template>
