<template>
  <section id="about" class="spa-page py-24 bg-neutral-900">
    <div class="max-w-5xl mx-auto px-6">
      <p
        class="text-xs tracking-[0.4em] text-neutral-500 text-center uppercase mb-2"
      >
        About
      </p>
      <h2 class="section-title">御鏡ヴィラについて</h2>

      <!-- 概要 -->
      <div class="grid md:grid-cols-2 gap-16 mt-12 items-center">
        <!-- 画像 -->
        <div class="aspect-square">
          <img loading="lazy" decoding="async"
            src="/src/assets/villa_outview.jpg"
            alt="御鏡ヴィラ外観"
            class="w-full h-full object-cover border border-neutral-800"
          />
        </div>
        <div class="space-y-6">
          <p class="text-sm leading-loose text-neutral-300 font-serif">
            御鏡湖の静かな湖畔に佇む「御鏡ヴィラ」は、
            完全一棟貸し切りのラグジュアリーグランピングリゾートです。
          </p>
          <p class="text-sm leading-loose text-neutral-300 font-serif">
            山々に囲まれた秘境の湖は、水面が鏡のように空を映し出すことで知られ、古くから親しまれてきました。その神秘的な景観の中で、最上質の滞在体験をご提供いたします。
          </p>
          <p class="text-sm leading-loose text-neutral-300 font-serif">
            バレルサウナ、プライベートプール、源泉かけ流しの温泉、そして星空に包まれるアウトドアダイニング。日常を忘れる豊かな時間がここにあります。
          </p>
        </div>
      </div>

      <!-- ヴィラ詳細 -->
      <div class="mt-20 grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-6 order-2 md:order-1">
          <p class="text-xs tracking-[0.3em] text-neutral-500 uppercase">
            — Villa Details
          </p>
          <p class="text-sm leading-loose text-neutral-300 font-serif">
            建物は伝統的な日本建築にモダンな設計を融合させ、御鏡湖の景観に溶け込むよう設計されました。天然木と石材を随所に使用し、自然の呼吸を感じる空間をご提供します。
          </p>
          <p class="text-sm leading-loose text-neutral-300 font-serif">
            オーナー自らがひとつひとつ選び抜いた調度品が各室を彩ります。
          </p>
          <ul class="space-y-2 text-xs text-neutral-400">
            <li class="flex gap-3">
              <span class="text-forest-500">✓</span>完全一棟貸し切り（最大14名）
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
        <div class="order-1 md:order-2">
          <div class="aspect-square">
            <img loading="lazy" decoding="async"
              src="/src/assets/villa_lake_viewing.jpg"
              alt="御鏡湖を望む御鏡ヴィラ"
              class="w-full h-full object-cover border border-neutral-800"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
