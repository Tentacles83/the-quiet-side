<template>
  <section id="facilities" class="spa-page py-24">
    <div class="max-w-6xl mx-auto px-6">
      <p
        class="text-xs tracking-[0.4em] text-neutral-500 text-center uppercase mb-2"
      >
        Facilities
      </p>
      <h2 class="section-title">館内情報</h2>

      <!-- 部屋 (5室) -->
      <div class="mt-16">
        <h3 class="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-8">
          — お部屋
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div class="room-card">
            <div class="aspect-[3/2] img-placeholder mb-4">
              <!-- TODO: 蛍の間画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-1">蛍の間</h4>
            <p class="text-xs text-neutral-500 tracking-widest mb-2">
              HOTARU no MA
            </p>
            <p class="text-xs text-neutral-400 leading-relaxed">
              湖に最も近い客室。夏には蛍が舞う幻想的な景色をお部屋から望めます。定員4名。
            </p>
          </div>
          <div class="room-card">
            <div class="aspect-[3/2] img-placeholder mb-4">
              <!-- TODO: 月影の間画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-1">月影の間</h4>
            <p class="text-xs text-neutral-500 tracking-widest mb-2">
              TSUKIKAGE no MA
            </p>
            <p class="text-xs text-neutral-400 leading-relaxed">
              月明かりが水面に映る夜景が美しい角部屋。プライベートデッキ付き。定員4名。
            </p>
          </div>
          <div class="room-card">
            <div class="aspect-[3/2] img-placeholder mb-4">
              <!-- TODO: 水霧の間画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-1">水霧の間</h4>
            <p class="text-xs text-neutral-500 tracking-widest mb-2">
              MIZUKIRI no MA
            </p>
            <p class="text-xs text-neutral-400 leading-relaxed">
              早朝の湖霧を最も間近に感じられる客室。ミストシャワー完備。定員2名。
            </p>
          </div>
          <div class="room-card">
            <div class="aspect-[3/2] img-placeholder mb-4">
              <!-- TODO: 星灯りの間画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-1">星灯りの間</h4>
            <p class="text-xs text-neutral-500 tracking-widest mb-2">
              HOSHIAKARI no MA
            </p>
            <p class="text-xs text-neutral-400 leading-relaxed">
              天窓から満天の星を望めるスイートルーム。プレミアムプラン専用。定員6名。
            </p>
          </div>
          <div class="room-card">
            <div class="aspect-[3/2] img-placeholder mb-4">
              <!-- TODO: 波の間画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-1">波の間</h4>
            <p class="text-xs text-neutral-500 tracking-widest mb-2">
              NAMI no MA
            </p>
            <p class="text-xs text-neutral-400 leading-relaxed">
              波音が響く湖岸のプレミア客室。岩風呂付きのアウトドアバス完備。定員4名。
            </p>
          </div>
        </div>
      </div>

      <!-- 共用施設 -->
      <div class="mt-20">
        <h3 class="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-8">
          — 共用施設
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="facility-card" id="facility-sauna">
            <div class="aspect-video img-placeholder mb-4">
              <!-- TODO: サウナ画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-2">水霧バレルサウナ</h4>
            <p class="text-xs text-neutral-400 leading-relaxed">
              御鏡湖のほとりに設けられたバレルサウナ。木のぬくもりを感じる円筒型サウナで、ロウリュウ実施。水風呂は湖の伏流水を使用した天然水。
            </p>
            <p class="text-xs text-neutral-600 mt-3">営業時間: 15:00–翌10:00</p>
          </div>
          <div class="facility-card" id="facility-pool">
            <div class="aspect-video img-placeholder mb-4">
              <!-- TODO: プール画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-2">
              インフィニティプール
            </h4>
            <p class="text-xs text-neutral-400 leading-relaxed">
              宿泊者専用のプライベートプール。御鏡湖を眺めながらゆっくりとお楽しみいただけます。夜間のライトアップも好評です。
            </p>
            <p class="text-xs text-neutral-600 mt-3">
              営業時間: 9:00–22:00（季節変動あり）
            </p>
          </div>
          <div class="facility-card" id="facility-onsen">
            <div class="aspect-video img-placeholder mb-4">
              <!-- TODO: 温泉画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-2">
              御鏡の湯（源泉温泉）
            </h4>
            <p class="text-xs text-neutral-400 leading-relaxed">
              地下から湧き出る源泉かけ流し。大浴場と露天風呂を男女各1カ所完備。泉質：単純温泉。
            </p>
            <p class="text-xs text-neutral-600 mt-3">営業時間: 15:00–翌10:00</p>
          </div>
          <div class="facility-card" id="facility-garden">
            <div class="aspect-video img-placeholder mb-4">
              <!-- TODO: 庭画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-2">水庭（日本庭園）</h4>
            <p class="text-xs text-neutral-400 leading-relaxed">
              御鏡湖に隣接する日本庭園。水面を鏡として設計された幽玄な空間。夜間はライトアップ。
            </p>
            <p class="text-xs text-neutral-600 mt-3">入園自由（24時間）</p>
          </div>
          <div class="facility-card" id="facility-restaurant">
            <div class="aspect-video img-placeholder mb-4">
              <!-- TODO: 食事処画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-2">
              御鏡亭（レストラン）
            </h4>
            <p class="text-xs text-neutral-400 leading-relaxed">
              地元食材を使ったフレンチ×和食の創作コース料理。プライベートダイニングとして完全個室でご利用いただけます。
            </p>
            <p class="text-xs text-neutral-600 mt-3">
              夕食: 18:00〜 / 朝食: 7:30〜
            </p>
          </div>
          <div class="facility-card" id="facility-overview">
            <div class="aspect-video img-placeholder mb-4">
              <!-- TODO: 全景画像 -->
            </div>
            <h4 class="font-serif text-lg text-white mb-2">リゾート全景</h4>
            <p class="text-xs text-neutral-400 leading-relaxed">
              御鏡湖に面した約1,200㎡の敷地。5棟の客室棟は自然に溶け込む低層設計で、湖との一体感を大切にしています。
            </p>
            <p class="text-xs text-neutral-600 mt-3">敷地面積: 約1,200㎡</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
