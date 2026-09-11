<template>
  <!-- ARG: 記事モーダル -->
  <div
    id="article-modal"
    class="hidden fixed inset-0 z-50 flex items-center justify-center p-4"
  >
    <div
      class="absolute inset-0 bg-black/90 backdrop-blur-sm"
      id="article-backdrop"
    ></div>
    <div
      class="relative bg-neutral-950 border border-neutral-700 p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
    >
      <button
        id="article-close"
        class="absolute top-4 right-4 text-neutral-500 hover:text-white"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div id="article-content"></div>
    </div>
  </div>
</template>
