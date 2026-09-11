<template>
  <section id="faq" class="spa-page py-24">
    <div class="max-w-3xl mx-auto px-6">
      <nav class="breadcrumb">
        <a href="#home">ホーム</a>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">よくあるご質問</span>
      </nav>
      <p
        class="text-xs tracking-[0.4em] text-neutral-500 text-center uppercase mb-2"
      >
        FAQ
      </p>
      <h2 class="section-title">よくあるご質問</h2>
      <div class="mt-12 space-y-4" id="faq-list">
        <!-- チェックイン・チェックアウト -->
        <div class="faq-item">
          <button class="faq-question">
            <span>チェックイン・チェックアウトの時間を教えてください。</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              チェックインは15:00〜18:00、チェックアウトは11:00となっております。18:00以降のご到着の場合は、事前にフロントへご連絡ください。
            </p>
          </div>
        </div>
        <!-- アメニティ -->
        <div class="faq-item">
          <button class="faq-question">
            <span>アメニティは何が揃っていますか？</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              各ヴィラにはシャンプー・コンディショナー・ボディソープ・洗顔料・歯ブラシセット・カミソリ・バスタオル・フェイスタオルをご用意しております。バスローブとスリッパも完備しています。ドライヤーは各部屋に備え付けております。
            </p>
          </div>
        </div>
        <!-- Wi-Fi -->
        <div class="faq-item">
          <button class="faq-question">
            <span>Wi-Fiは使えますか？</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              全ヴィラおよび共用スペースに高速Wi-Fi（無料）を完備しております。接続情報はチェックイン時にお渡しするウェルカムカードに記載されています。
            </p>
          </div>
        </div>
        <!-- 駐車場 -->
        <div class="faq-item">
          <button class="faq-question">
            <span>駐車場はありますか？</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              1棟につき普通車2台分の専用駐車場を無料でご利用いただけます。大型車・バスでのご来館をご予定の方は、事前にご相談ください。
            </p>
          </div>
        </div>
        <!-- 送迎 -->
        <div class="faq-item">
          <button class="faq-question">
            <span>送迎サービスはありますか？</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              最寄りの「御鏡口駅」から施設までの無料送迎バスをご用意しております。ご到着の3日前までにご予約時記載のメールアドレス、またはフロント（予約確認書記載の番号）へご連絡ください。運行時間は15:00・17:00の1日2便です。チェックアウト時は10:00発の1便をご利用いただけます。
            </p>
          </div>
        </div>
        <!-- 食事 -->
        <div class="faq-item">
          <button class="faq-question">
            <span>食事のアレルギー対応はできますか？</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              アレルギーや食事制限（ベジタリアン・ハラール等）については、ご予約時または到着3日前までにお申し出ください。シェフが可能な範囲で対応いたします。
            </p>
          </div>
        </div>
        <!-- ペット -->
        <div class="faq-item">
          <button class="faq-question">
            <span>ペットは連れていけますか？</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              誠に申し訳ございませんが、ペットのご同伴はお断りしております。施設内の自然環境保護のためご理解をお願いいたします。
            </p>
          </div>
        </div>
        <!-- キャンセル -->
        <div class="faq-item">
          <button class="faq-question">
            <span>キャンセルポリシーを教えてください。</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              宿泊日の7日前まで：キャンセル料なし<br />
              宿泊日の3〜6日前：宿泊料金の30%<br />
              宿泊日の前日：宿泊料金の50%<br />
              当日：宿泊料金の100%
            </p>
          </div>
        </div>
        <!-- お子様 -->
        <div class="faq-item">
          <button class="faq-question">
            <span>子供でも楽しめますか？</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              はい、お子様連れでも十分お楽しみいただける施設です。ただし、プールのご利用は小学生以上かつ保護者同伴をお願いしております。サウナは中学生以上のご利用となります。
            </p>
          </div>
        </div>
        <!-- 温泉 -->
        <div class="faq-item">
          <button class="faq-question">
            <span>温泉・露天風呂は何時まで利用できますか？</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              ヴィラ備え付けのプライベート温泉のため24時間ご利用いただけます。
            </p>
          </div>
        </div>
        <!-- アクティビティ予約 -->
        <div class="faq-item">
          <button class="faq-question">
            <span>アクティビティの予約はどうすればいいですか？</span>
            <svg
              class="w-4 h-4 faq-icon transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div class="faq-answer hidden">
            <p>
              クルージングや各種ツアーなど要予約のアクティビティは、チェックイン後フロントにてお申し込みいただけます。人気のプログラムは満員になる場合がございますので、お早めにお申し込みください。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
