<template>
  <section id="villa" class="spa-page py-24 bg-neutral-900">
    <div class="max-w-5xl mx-auto px-6">
      <p
        class="text-xs tracking-[0.4em] text-neutral-500 text-center uppercase mb-2"
      >
        Villa
      </p>
      <h2 class="section-title">ヴィラについて</h2>
      <div class="mt-12 grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <p class="text-sm leading-loose text-neutral-300 font-serif">
            御鏡ヴィラは全棟が完全一棟貸し切り制のプライベートヴィラです。チェックイン期間中、施設全体を独占していただけます。
          </p>
          <p class="text-sm leading-loose text-neutral-300 font-serif">
            建物は伝統的な日本建築にモダンな設計を融合させ、御鏡湖の景観に溶け込むよう設計されました。天然木と石材を随所に使用し、自然の呼吸を感じる空間をご提供します。
          </p>
          <p class="text-sm leading-loose text-neutral-300 font-serif">
            オーナー自らがひとつひとつ選び抜いた調度品が各室を彩ります。
          </p>
          <ul class="space-y-2 text-xs text-neutral-400">
            <li class="flex gap-3">
              <span class="text-forest-500">✓</span>完全一棟貸し切り
            </li>
            <li class="flex gap-3">
              <span class="text-forest-500">✓</span>チェックイン 15:00 /
              チェックアウト 11:00
            </li>
            <li class="flex gap-3">
              <span class="text-forest-500">✓</span>全館 Wi-Fi 完備
            </li>
            <li class="flex gap-3">
              <span class="text-forest-500">✓</span>専任スタッフが常駐
            </li>
            <li class="flex gap-3">
              <span class="text-forest-500">✓</span>全室禁煙（屋外喫煙所あり）
            </li>
          </ul>
        </div>
        <!-- 画像 -->
        <div class="space-y-4">
          <div class="aspect-video">
            <img loading="lazy" decoding="async"
              src="/src/assets/villa_outview.jpg"
              alt="御鏡ヴィラ外観"
              class="w-full h-full object-cover border border-neutral-800"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="aspect-square img-placeholder">
              <!-- TODO: ヴィラ内観1 -->
            </div>
            <div class="aspect-square img-placeholder">
              <!-- TODO: ヴィラ内観2 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
