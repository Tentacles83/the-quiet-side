<script setup lang="ts">
import { ref } from "vue";

const isMapExpanded = ref(false);
</script>

<template>
  <section id="access" class="spa-page py-24 bg-neutral-900">
    <div class="max-w-5xl mx-auto px-6">
      <p
        class="text-xs tracking-[0.4em] text-neutral-500 text-center uppercase mb-2"
      >
        Access
      </p>
      <h2 class="section-title">アクセス</h2>

      <div class="mt-12 grid md:grid-cols-2 gap-16">
        <!-- テキスト情報 -->
        <div class="space-y-8">
          <div>
            <h3 class="text-xs tracking-widest text-neutral-500 mb-3">
              ＜お車でお越しの方＞
            </h3>
            <ul class="text-sm text-neutral-400 space-y-2 leading-relaxed">
              <li>早霧自動車道「御鏡IC」より車で約20分</li>
              <li>駐車場完備（5台・無料）</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xs tracking-widest text-neutral-500 mb-3">
              ＜公共交通機関でお越しの方＞
            </h3>
            <ul class="text-sm text-neutral-400 space-y-2 leading-relaxed">
              <li>早霧鉄道高原線「御鏡駅」より無料送迎（要事前予約）</li>
              <li>送迎時間: 14:00・15:00・16:00（チェックイン日）</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xs tracking-widest text-neutral-500 mb-3">住所</h3>
            <p class="text-sm text-neutral-400">
              〒000-0000<br />早霧県御鏡市御鏡湖畔1-1<br />御鏡ヴィラ RESORT &amp;
              SPA
            </p>
          </div>
        </div>

        <!-- マップ -->
        <div
          class="aspect-[3/2] relative group cursor-zoom-in"
          @click="isMapExpanded = true"
        >
          <img loading="lazy" decoding="async"
            src="/src/assets/area_map.png"
            alt="御鏡ヴィラ周辺アクセスマップ"
            class="w-full h-full object-contain border border-neutral-800 bg-[#faf6ee]"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors"
          >
            <span
              class="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-2 rounded-full"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- マップ拡大モーダル -->
    <div
      v-if="isMapExpanded"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click="isMapExpanded = false"
    >
      <div class="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
      <img loading="lazy" decoding="async"
        src="/src/assets/area_map.png"
        alt="御鏡ヴィラ周辺アクセスマップ（拡大）"
        class="relative max-w-full max-h-full object-contain border border-neutral-700"
      />
      <button
        class="absolute top-4 right-4 text-neutral-300 hover:text-white z-10"
        @click.stop="isMapExpanded = false"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </section>
</template>
