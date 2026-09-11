<template>
  <section id="dining" class="spa-page py-24">
    <div class="max-w-5xl mx-auto px-6">
      <p
        class="text-xs tracking-[0.4em] text-neutral-500 text-center uppercase mb-2"
      >
        Dining
      </p>
      <h2 class="section-title">お食事</h2>
      <div class="mt-12 space-y-20">
        <!-- 夕食 -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="aspect-video overflow-hidden rounded">
            <img loading="lazy" decoding="async"
              src="../../assets/dining_dinner.jpg"
              alt="御鏡のディナー"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="space-y-4">
            <p class="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              Dinner
            </p>
            <h3 class="font-serif text-2xl text-white">御鏡のディナー</h3>
            <p class="text-sm leading-loose text-neutral-400">
              地元の旬の恵みを贅沢に使った10品のフルコース。御鏡湖の水面を望む完全個室で、プライベートなひとときをお過ごしください。
            </p>
            <p class="text-sm leading-loose text-neutral-400">
              地元猟師が仕留めた野生鹿や猪のジビエ料理、湖で獲れた天然魚を中心に、シェフが毎日手を加えた創作料理をご堪能いただけます。
            </p>
            <p class="text-xs text-neutral-600">
              提供時間: 18:00〜20:30（最終入室）
            </p>
            <a
              href="#dining-dinner"
              class="detail-btn mt-4 inline-flex items-center gap-2"
              >詳細メニューを見る <span class="detail-btn-arrow">→</span></a
            >
          </div>
        </div>
        <!-- 朝食 -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 space-y-4">
            <p class="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              Breakfast
            </p>
            <h3 class="font-serif text-2xl text-white">朝の朝食</h3>
            <p class="text-sm leading-loose text-neutral-400">
              御鏡湖の霧立つ朝。地元農家から届く朝採れ野菜と平飼い卵を使った和定食または洋定食をお選びいただけます。
            </p>
            <p class="text-sm leading-loose text-neutral-400">
              湖を望むテラスでのアウトドア朝食（晴天時）もご用意しております。
            </p>
            <p class="text-xs text-neutral-600">提供時間: 7:30〜9:30</p>
            <a
              href="#dining-breakfast"
              class="detail-btn mt-4 inline-flex items-center gap-2"
              >詳細を見る <span class="detail-btn-arrow">→</span></a
            >
          </div>
          <div class="order-1 md:order-2 aspect-video overflow-hidden rounded">
            <img loading="lazy" decoding="async"
              src="../../assets/dining_breakfast.jpg"
              alt="朝の朝食"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
