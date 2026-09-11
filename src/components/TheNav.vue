<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
  >
    <!-- お知らせバー (エンディング前は非表示) -->
    <div id="site-notice">
      <span id="site-notice-text"></span>
    </div>
    <div class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <a href="#home" class="font-serif text-lg tracking-widest text-white"
        >御鏡ヴィラ</a
      >
      <button id="menu-btn" class="md:hidden text-white" aria-label="メニュー">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <ul
        id="nav-links"
        class="hidden md:flex gap-8 text-sm tracking-widest text-neutral-300"
      >
        <li>
          <a href="#about" class="hover:text-white transition-colors">概要</a>
        </li>
        <li>
          <a href="#news" class="hover:text-white transition-colors"
            >お知らせ</a
          >
        </li>
        <li>
          <a href="#facilities" class="hover:text-white transition-colors"
            >館内情報</a
          >
        </li>
        <li>
          <a href="#dining" class="hover:text-white transition-colors"
            >お食事</a
          >
        </li>
        <li>
          <a href="#activity" class="hover:text-white transition-colors"
            >アクティビティ</a
          >
        </li>
        <li>
          <a href="#access" class="hover:text-white transition-colors"
            >アクセス</a
          >
        </li>
        <li>
          <a href="#faq" class="hover:text-white transition-colors">FAQ</a>
        </li>
        <li>
          <a href="#reserve" class="hover:text-white transition-colors cta-nav"
            >ご予約</a
          >
        </li>
        <!-- 検索 -->
        <li id="search-section" class="flex items-center">
          <div class="relative">
            <input
              id="site-search"
              type="text"
              placeholder="検索..."
              autocomplete="off"
              class="bg-neutral-800/80 border border-neutral-700 text-neutral-100 pl-3 pr-8 py-1.5 text-xs tracking-wide focus:outline-none focus:border-neutral-500 transition-colors w-36"
            />
            <button
              id="search-btn"
              class="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
            >
              <svg
                class="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div
              id="search-results"
              class="hidden absolute top-full right-0 mt-2 w-80 bg-neutral-900 border border-neutral-700 shadow-xl z-50"
            ></div>
          </div>
        </li>
      </ul>
    </div>
    <!-- Mobile Menu -->
    <div
      id="mobile-menu"
      class="hidden md:hidden bg-neutral-950/95 backdrop-blur-sm px-6 pb-6"
    >
      <ul
        id="mobile-menu-items"
        class="flex flex-col gap-4 text-sm tracking-widest text-neutral-300"
      >
        <li>
          <a href="#about" class="hover:text-white transition-colors">概要</a>
        </li>
        <li>
          <a href="#news" class="hover:text-white transition-colors"
            >お知らせ</a
          >
        </li>
        <li>
          <a href="#facilities" class="hover:text-white transition-colors"
            >館内情報</a
          >
        </li>
        <li>
          <a href="#dining" class="hover:text-white transition-colors"
            >お食事</a
          >
        </li>
        <li>
          <a href="#activity" class="hover:text-white transition-colors"
            >アクティビティ</a
          >
        </li>
        <li>
          <a href="#access" class="hover:text-white transition-colors"
            >アクセス</a
          >
        </li>
        <li>
          <a href="#faq" class="hover:text-white transition-colors">FAQ</a>
        </li>
        <li>
          <a href="#reserve" class="hover:text-white transition-colors"
            >ご予約</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
