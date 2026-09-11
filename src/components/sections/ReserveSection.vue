<template>
  <section id="reserve" class="spa-page py-24 bg-neutral-900">
    <div class="max-w-2xl mx-auto px-6">
      <p
        class="text-xs tracking-[0.4em] text-neutral-500 text-center uppercase mb-2"
      >
        Reservation
      </p>
      <h2 class="section-title">ご予約</h2>
      <p class="text-xs text-neutral-500 text-center mt-4 mb-10">
        ご宿泊のご予約はこちらのフォームよりお申し込みください。<br />スタッフより折り返しご連絡いたします。
      </p>

      <form id="reservation-form" class="space-y-6" novalidate>
        <!-- チェックイン・アウト -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="form-label">チェックイン</label>
            <input
              type="date"
              name="checkin"
              id="checkin"
              class="form-input"
              required
            />
          </div>
          <div>
            <label class="form-label">チェックアウト</label>
            <input
              type="date"
              name="checkout"
              id="checkout"
              class="form-input"
              required
            />
          </div>
        </div>

        <!-- 部屋選択 -->
        <div>
          <label class="form-label">ご希望のお部屋</label>
          <select name="room" class="form-input" required>
            <option value="">選択してください</option>
            <option value="hotaru">蛍の間</option>
            <option value="tsukikage">月影の間</option>
            <option value="mizukiri">水霧の間</option>
            <option value="hoshiakari">星灯りの間</option>
            <option value="nami">波の間</option>
          </select>
        </div>

        <!-- 宿泊人数 -->
        <div>
          <label class="form-label">宿泊人数</label>
          <select name="guests" id="guest-count" class="form-input" required>
            <option value="">選択してください</option>
            <option value="1">1名</option>
            <option value="2">2名</option>
            <option value="3">3名</option>
            <option value="4">4名</option>
            <option value="5">5名</option>
            <option value="6">6名</option>
          </select>
        </div>

        <!-- 宿泊者名（ARG要素: 被害者全員の名前を入力するとイベント発生） -->
        <div id="guest-names-section">
          <label class="form-label">宿泊者様のお名前（代表者）</label>
          <input
            type="text"
            name="name_1"
            id="guest-name-1"
            class="form-input"
            placeholder="例：山田 太郎"
            required
          />
          <!-- 追加の宿泊者名フィールドはJSで動的に追加 -->
          <div id="extra-guest-names" class="space-y-3 mt-3"></div>
        </div>

        <!-- ご要望 -->
        <div>
          <label class="form-label">ご要望・アレルギー等</label>
          <textarea
            name="request"
            class="form-input h-28 resize-none"
            placeholder="ご自由にご記入ください"
          ></textarea>
        </div>

        <!-- 利用規約同意 -->
        <div class="flex gap-3 items-start">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            class="mt-1 accent-forest-500"
            required
          />
          <label for="agree" class="text-xs text-neutral-400 leading-relaxed">
            <a href="#policy" class="underline hover:text-white"
              >宿泊者様へのお願い</a
            >および
            <a href="#terms" class="underline hover:text-white">利用規約</a
            >に同意します。
          </label>
        </div>

        <button
          type="submit"
          id="reserve-btn"
          class="btn-primary w-full py-4 tracking-[0.3em] text-sm"
        >
          予約内容を確認する
        </button>
      </form>

      <!-- 予約確認モーダル -->
      <div
        id="reserve-modal"
        class="hidden fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          class="absolute inset-0 bg-black/80 backdrop-blur-sm"
          id="modal-backdrop"
        ></div>
        <div
          class="relative bg-neutral-900 border border-neutral-700 p-8 max-w-md w-full"
        >
          <h3 class="font-serif text-xl text-white mb-4" id="modal-title">
            ご予約を受け付けました
          </h3>
          <div
            id="modal-body"
            class="text-sm text-neutral-400 leading-relaxed space-y-3"
          ></div>
          <button
            id="modal-close"
            class="mt-6 btn-outline w-full py-3 text-sm tracking-widest"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
