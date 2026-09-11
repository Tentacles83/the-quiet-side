<script setup lang="ts">
import { onMounted } from "vue";

// ナビ・フッター
import TheNav from "./components/TheNav.vue";
import TheFooter from "./components/TheFooter.vue";
import TheSubpageNav from "./components/TheSubpageNav.vue";

// メインセクション
import HeroSection from "./components/sections/HeroSection.vue";
import NewsSection from "./components/sections/NewsSection.vue";
import AboutSection from "./components/sections/AboutSection.vue";
import VillaSection from "./components/sections/VillaSection.vue";
import FacilitiesSection from "./components/sections/FacilitiesSection.vue";
import DiningSection from "./components/sections/DiningSection.vue";
import AmenitySection from "./components/sections/AmenitySection.vue";
import ActivitySection from "./components/sections/ActivitySection.vue";
import AccessSection from "./components/sections/AccessSection.vue";
import SurroundingsSection from "./components/sections/SurroundingsSection.vue";
import ReserveSection from "./components/sections/ReserveSection.vue";
import FaqSection from "./components/sections/FaqSection.vue";
import PolicySection from "./components/sections/PolicySection.vue";
import TermsSection from "./components/sections/TermsSection.vue";

// アクティビティ詳細
import CampfireDetail from "./components/activity/CampfireDetail.vue";
import StargazingDetail from "./components/activity/StargazingDetail.vue";
import CruisingDetail from "./components/activity/CruisingDetail.vue";
import CyclingDetail from "./components/activity/CyclingDetail.vue";
import YogaDetail from "./components/activity/YogaDetail.vue";
import SightseeingDetail from "./components/activity/SightseeingDetail.vue";

// お食事詳細
import DinnerDetail from "./components/dining/DinnerDetail.vue";
import BreakfastDetail from "./components/dining/BreakfastDetail.vue";

// 館内情報詳細
import SaunaDetail from "./components/facility/SaunaDetail.vue";
import PoolDetail from "./components/facility/PoolDetail.vue";
import OnsenDetail from "./components/facility/OnsenDetail.vue";
import GardenDetail from "./components/facility/GardenDetail.vue";
import RestaurantDetail from "./components/facility/RestaurantDetail.vue";
import OverviewDetail from "./components/facility/OverviewDetail.vue";

// ARG要素
import OwnerChat from "./components/arg/OwnerChat.vue";
import ArticleModal from "./components/arg/ArticleModal.vue";

// 既存モジュールをインポート
import { initSecurity } from "./arg/security.ts";
import { initSearch, openArticleModal } from "./arg/search.ts";
import { initBooking } from "./arg/booking.ts";
import { initChat, applyEndingEffects } from "./arg/chat.ts";
import { initNav } from "./ui/nav.ts";
import { initFaq } from "./ui/faq.ts";
import { initFormTouchedValidation } from "./utils/formValidation.ts";

onMounted(() => {
  // UI 初期化
  initNav();
  initFaq();

  // ARG 初期化
  initSecurity();
  initSearch();
  initBooking();
  initChat();

  // エンディング到達済みの場合は演出を復元
  if (localStorage.getItem("arg-ending-reached") === "1") {
    applyEndingEffects();
  }

  // フォーム touched バリデーション
  initFormTouchedValidation();

  // 記事リンク（data-article 属性）
  document.querySelectorAll<HTMLElement>("[data-article]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const id = el.dataset.article ?? "";
      if (id) openArticleModal(id);
    });
  });

  // visible クラスを追加したらアニメーション完了
  const style = document.createElement("style");
  style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);
});
</script>

<template>
  <!-- ナビゲーション -->
  <TheNav />

  <!-- ホームページ (ヒーロー + お知らせ) -->
  <div id="home" class="spa-page page-active">
    <HeroSection />
    <NewsSection />
  </div>

  <!-- メインセクション -->
  <AboutSection />
  <FacilitiesSection />
  <VillaSection />
  <DiningSection />
  <AmenitySection />
  <ActivitySection />
  <AccessSection />
  <SurroundingsSection />
  <ReserveSection />
  <FaqSection />
  <PolicySection />

  <!-- アクティビティ詳細サブページ -->
  <CampfireDetail />
  <StargazingDetail />
  <CruisingDetail />
  <CyclingDetail />
  <YogaDetail />
  <SightseeingDetail />

  <!-- お食事詳細サブページ -->
  <DinnerDetail />
  <BreakfastDetail />

  <!-- 館内情報詳細サブページ -->
  <SaunaDetail />
  <PoolDetail />
  <OnsenDetail />
  <GardenDetail />
  <RestaurantDetail />
  <OverviewDetail />

  <!-- 利用規約 -->
  <TermsSection />

  <!-- ARG要素 -->
  <OwnerChat />
  <ArticleModal />

  <!-- サブページ用ボトムナビ -->
  <TheSubpageNav />

  <!-- フッター -->
  <TheFooter />
</template>
