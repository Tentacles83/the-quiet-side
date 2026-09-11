<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

let animId: number | null = null;

function startRipple(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  const dpr = window.devicePixelRatio || 1;

  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);

  const cx = canvas.offsetWidth / 2;
  const cy = canvas.offsetHeight / 2;
  const maxR = Math.hypot(cx, cy) * 1.1;

  // delay(ms)ごとに波を開始するスケジュール
  const schedule = [300, 480, 800, 1180];
  // 同じ水面を伝わる波紋は伝播速度が揃っているはずなので、発生順が
  // 入れ替わって波紋同士が交差しないよう、速度は全て揃える
  const configs = schedule.map((delay, i) => ({
    delay,
    opacity: 0.55 - i * 0.06,
    speed: 3.2,
    width: 2.5 - i * 0.3,
  }));

  interface Ripple {
    r: number;
    maxR: number;
    opacity: number;
    speed: number;
    width: number;
    seed: number; // ゆらぎの位相をリップルごとにずらす乱数シード
    ox: number; // 中心からの微小オフセット（真円が並ぶ機械的な印象を崩す）
    oy: number;
  }

  const ripples: Ripple[] = [];
  const startTime = performance.now();
  let scheduled = 0; // 次にスポーンすべきconfigのインデックス

  // 波面のゆらぎ: 複数の周波数の正弦波を重ね、それぞれ違う速さで位相を回して
  // 水面らしい不規則な揺らぎ（真円にならない波打ち）を表現する
  const WOBBLE_FREQS = [5, 9, 14];
  const WOBBLE_SPEEDS = [0.0009, -0.0014, 0.0021];
  const SEGMENTS = 110;

  function draw(now: number) {
    // 時間が来たリップルをスポーン
    while (
      scheduled < configs.length &&
      now - startTime >= configs[scheduled].delay
    ) {
      const c = configs[scheduled];
      ripples.push({
        r: 0,
        maxR,
        opacity: c.opacity,
        speed: c.speed,
        width: c.width,
        seed: Math.random() * Math.PI * 2,
        ox: (Math.random() - 0.5) * 6,
        oy: (Math.random() - 0.5) * 6,
      });
      scheduled++;
    }

    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      rp.r += rp.speed;
      const progress = rp.r / rp.maxR;
      const alpha = rp.opacity * (1 - progress) * Math.sin(Math.PI * progress);

      if (alpha <= 0.002 || rp.r > rp.maxR) {
        ripples.splice(i, 1);
        continue;
      }

      // 半径を角度ごとに揺らして波打った輪郭を描く（大きくなるほど揺れも増す）
      const wobbleAmp = Math.min(rp.r * 0.045, 6) + 0.6;
      ctx.beginPath();
      for (let s = 0; s <= SEGMENTS; s++) {
        const theta = (s / SEGMENTS) * Math.PI * 2;
        let wobble = 0;
        for (let w = 0; w < WOBBLE_FREQS.length; w++) {
          wobble +=
            Math.sin(theta * WOBBLE_FREQS[w] + now * WOBBLE_SPEEDS[w] + rp.seed) /
            (w + 1);
        }
        const r = rp.r + wobble * wobbleAmp;
        const x = rp.ox + cx + Math.cos(theta) * r;
        const y = rp.oy + cy + Math.sin(theta) * r;
        if (s === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(160, 210, 220, ${alpha})`;
      ctx.lineWidth = rp.width * (1 - progress * 0.5);
      ctx.stroke();
    }

    // まだスポーン待ちがあるか、描画中のリップルがあれば続行
    if (scheduled < configs.length || ripples.length > 0) {
      animId = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      animId = null;
    }
  }

  animId = requestAnimationFrame(draw);
}

function triggerRipple() {
  if (animId !== null) {
    cancelAnimationFrame(animId);
    animId = null;
  }
  const canvas = document.getElementById(
    "hero-ripple"
  ) as HTMLCanvasElement | null;
  if (canvas) startRipple(canvas);
}

onMounted(() => {
  // 初回ロード
  triggerRipple();

  // SPAでhomeページが表示されるたびに再トリガー
  const section = document.getElementById("home");
  if (section) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (
          m.type === "attributes" &&
          m.attributeName === "class" &&
          (m.target as HTMLElement).classList.contains("page-active")
        ) {
          setTimeout(triggerRipple, 80);
        }
      });
    });
    observer.observe(section, { attributes: true });
  }
});

onBeforeUnmount(() => {
  if (animId !== null) cancelAnimationFrame(animId);
});
</script>

<template>
  <section
    id="hero"
    class="relative h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- 動画背景 -->
    <div class="absolute inset-0 overflow-hidden">
      <video
        id="hero-bg-video"
        class="w-full h-full object-cover opacity-40"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      >
        <source src="/src/assets/villa_promotion.mp4" type="video/mp4" />
      </video>
      <div
        class="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/10 to-neutral-950"
      ></div>
    </div>

    <!-- コンテンツ -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p class="text-xs tracking-[0.4em] text-neutral-400 mb-6 uppercase">
        Lake glamping resort
      </p>
      <h1
        class="font-serif text-5xl md:text-7xl tracking-widest text-white mb-8"
      >
        御鏡ヴィラ
      </h1>
      <p class="text-sm md:text-lg text-neutral-300 tracking-widest mb-4">
        御鏡湖畔 — 一棟貸し切りのラグジュアリーグランピング
      </p>
      <p
        class="text-xs md:text-sm text-neutral-500 leading-relaxed mb-10 max-w-2xl mx-auto"
      >
        静寂な山間に抱かれたプライベートリゾート。幼い偏光を浴びるバレルサウナ、湖面を望むプライベートプール、
        地元の慕山食材を使ったフルコースディナー——全5棟の客室にはそれぞれ水の意匆を凍らせた名前がつけられています。
        日常から離れ、御鏡湖の静寂に身を委ねる特別な時間をお届けします。
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#reserve" class="btn-primary px-8 py-3 tracking-widest text-sm"
          >ご予約はこちら</a
        >
        <a href="#about" class="btn-outline px-8 py-3 tracking-widest text-sm"
          >施設について</a
        >
      </div>
    </div>
    <!-- スクロール誘導 -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg
        class="w-5 h-5 text-neutral-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>

    <!-- 水面リップルエフェクト -->
    <canvas
      id="hero-ripple"
      class="absolute inset-0 w-full h-full pointer-events-none z-20"
    ></canvas>
  </section>
</template>
