
<template>
  <section id="activity" class="spa-page py-24">
    <div class="max-w-6xl mx-auto px-6">
      <p
        class="text-xs tracking-[0.4em] text-neutral-500 text-center uppercase mb-2"
      >
        Activities
      </p>
      <h2 class="section-title">アクティビティ</h2>
      <div class="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="activity-card">
          <div class="aspect-video mb-4 overflow-hidden">
            <img loading="lazy" decoding="async"
              src="/src/assets/activity_campfire.jpg"
              alt="キャンプファイヤー"
              class="w-full h-full object-cover"
            />
          </div>
          <h4 class="font-serif text-lg text-white mb-2">キャンプファイヤー</h4>
          <p class="text-xs text-neutral-400 leading-relaxed mb-3">
            湖畔の焚き火台を囲む静かな夜。薪の爆ぜる音と水面に揺れる炎の反射が幻想的な空間を作り出します。
          </p>
          <p class="text-xs text-neutral-600">毎晩開催 / 日没〜23:00</p>
          <a
            href="#activity-campfire"
            class="detail-btn mt-4 inline-flex items-center gap-2"
            >詳細を見る <span class="detail-btn-arrow">→</span></a
          >
        </div>
        <div class="activity-card">
          <div class="aspect-video mb-4 overflow-hidden">
            <img loading="lazy" decoding="async"
              src="/src/assets/activity_stargazing.jpg"
              alt="天体観渫"
              class="w-full h-full object-cover"
            />
          </div>
          <h4 class="font-serif text-lg text-white mb-2">天体観測</h4>
          <p class="text-xs text-neutral-400 leading-relaxed mb-3">
            光害の少ない山間で、望遠鏡を使った本格的な星空観測を体験。御鏡湖に映る星空は息をのむ美しさです。
          </p>
          <p class="text-xs text-neutral-600">晴天時 / 21:00〜23:00</p>
          <a
            href="#activity-stargazing"
            class="detail-btn mt-4 inline-flex items-center gap-2"
            >詳細を見る <span class="detail-btn-arrow">→</span></a
          >
        </div>
        <div class="activity-card">
          <div class="aspect-video mb-4 overflow-hidden">
            <img loading="lazy" decoding="async"
              src="/src/assets/activity_cruising.jpg"
              alt="御鏡湖クルージング"
              class="w-full h-full object-cover"
            />
          </div>
          <h4 class="font-serif text-lg text-white mb-2">御鏡湖クルージング</h4>
          <p class="text-xs text-neutral-400 leading-relaxed mb-3">
            電動ボートで静かな御鏡湖を巡る至福のひととき。湖面に映る山並みや空の変化をお楽しみいただけます。
          </p>
          <p class="text-xs text-neutral-600">
            9:00・14:00 / 所要90分 / 要予約
          </p>
          <a
            href="#activity-cruising"
            class="detail-btn mt-4 inline-flex items-center gap-2"
            >詳細を見る <span class="detail-btn-arrow">→</span></a
          >
        </div>
        <div class="activity-card">
          <div class="aspect-video mb-4 overflow-hidden">
            <img loading="lazy" decoding="async"
              src="/src/assets/activity_cycling.jpg"
              alt="湖畔サイクリング"
              class="w-full h-full object-cover"
            />
          </div>
          <h4 class="font-serif text-lg text-white mb-2">湖畔サイクリング</h4>
          <p class="text-xs text-neutral-400 leading-relaxed mb-3">
            e-バイクで御鏡湖を一周する約18kmのコース。山の空気を胸いっぱいに味わいながら絶景スポットを巡ります。
          </p>
          <p class="text-xs text-neutral-600">7:00〜17:00 / レンタル無料</p>
          <a
            href="#activity-cycling"
            class="detail-btn mt-4 inline-flex items-center gap-2"
            >詳細を見る <span class="detail-btn-arrow">→</span></a
          >
        </div>
        <div class="activity-card">
          <div class="aspect-video mb-4 overflow-hidden">
            <img loading="lazy" decoding="async"
              src="/src/assets/activity_yoga.jpg"
              alt="湖畔の朝ヨガ"
              class="w-full h-full object-cover"
            />
          </div>
          <h4 class="font-serif text-lg text-white mb-2">湖畔の朝ヨガ</h4>
          <p class="text-xs text-neutral-400 leading-relaxed mb-3">
            朝靄立ち込める御鏡湖畔で行うヨガ&amp;瞑想。インストラクターが丁寧に指導します。心身ともにリフレッシュを。
          </p>
          <p class="text-xs text-neutral-600">毎朝 6:30〜7:15 / 参加無料</p>
          <a
            href="#activity-yoga"
            class="detail-btn mt-4 inline-flex items-center gap-2"
            >詳細を見る <span class="detail-btn-arrow">→</span></a
          >
        </div>
        <div class="activity-card">
          <div class="aspect-video mb-4 overflow-hidden">
            <img loading="lazy" decoding="async"
              src="/src/assets/activity_sightseeing.jpg"
              alt="周辺観光"
              class="w-full h-full object-cover"
            />
          </div>
          <h4 class="font-serif text-lg text-white mb-2">周辺観光</h4>
          <p class="text-xs text-neutral-400 leading-relaxed mb-3">
            古刹「鏡山神社」や地元の産直マーケット、温泉地巡りなど。スタッフおすすめの隠れ名所もご紹介します。
          </p>
          <p class="text-xs text-neutral-600">フロントにてご相談ください</p>
          <a
            href="#activity-sightseeing"
            class="detail-btn mt-4 inline-flex items-center gap-2"
            >詳細を見る <span class="detail-btn-arrow">→</span></a
          >
        </div>
      </div>
    </div>
  </section>
</template>
