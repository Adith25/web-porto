<template>
  <Transition
    enter-active-class="splash-enter-active"
    leave-active-class="splash-leave-active"
    leave-to-class="splash-leave-to"
  >
    <div v-if="visible" class="splash-overlay" aria-live="polite" aria-label="Loading">
      <!-- Animated background orbs -->
      <div class="orb orb-1" />
      <div class="orb orb-2" />
      <div class="orb orb-3" />

      <!-- Noise grain overlay -->
      <div class="grain" />

      <!-- Center content -->
      <div class="splash-content">
        <!-- Logo / Name -->
        <div class="logo-wrapper">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-name">Adith</span>
          <span class="logo-bracket">/&gt;</span>
        </div>

        <!-- Tagline -->
        <p class="tagline">
          <span
            v-for="(char, i) in taglineChars"
            :key="i"
            class="tagline-char"
            :style="{ animationDelay: `${0.6 + i * 0.04}s` }"
          >{{ char === ' ' ? '\u00a0' : char }}</span>
        </p>

        <!-- Progress bar area -->
        <div class="progress-area">
          <div class="progress-track">
            <div class="progress-bar" :style="{ width: `${progress}%` }" />
            <div class="progress-glow" :style="{ left: `${progress}%` }" />
          </div>
          <div class="progress-label">
            <span class="progress-pct">{{ Math.round(progress) }}</span>
            <span class="progress-pct-sign">%</span>
          </div>
        </div>

        <!-- Loading dots -->
        <div class="dots">
          <span v-for="i in 3" :key="i" class="dot" :style="{ animationDelay: `${i * 0.18}s` }" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(true);
const progress = ref(0);

const tagline = 'Software Engineer';
const taglineChars = tagline.split('');

onMounted(() => {
  // Animate progress in two phases: fast to 80%, then slow until resources load
  let raf: number;
  const start = performance.now();
  const fastDuration = 3000;   // ms to reach ~80%
  const slowExtra  = 2000;     // additional ms to crawl from 80% → 95%

  const tick = (now: number) => {
    const elapsed = now - start;

    if (elapsed < fastDuration) {
      // Ease-out curve: fast reach to ~80
      progress.value = 80 * (1 - Math.pow(1 - elapsed / fastDuration, 3));
    } else {
      // Slow crawl 80 → 95
      const extra = Math.min((elapsed - fastDuration) / slowExtra, 1);
      progress.value = 80 + 15 * extra;
    }

    if (progress.value < 95) {
      raf = requestAnimationFrame(tick);
    }
  };
  raf = requestAnimationFrame(tick);

  // When page is fully loaded, snap to 100% and hide
  const finish = () => {
    cancelAnimationFrame(raf);
    progress.value = 100;
    // Short delay so user sees 100%
    setTimeout(() => {
      visible.value = false;
    }, 2500);
  };

  if (document.readyState === 'complete') {
    // Already loaded (cached page / instant)
    setTimeout(finish, 300);
  } else {
    window.addEventListener('load', finish, { once: true });
    // Safety fallback: hide after 4s even if load never fires
    setTimeout(finish, 4000);
  }
});
</script>

<style scoped>
/* ── Overlay ── */
.splash-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0f;
  overflow: hidden;
}

/* ── Transition ── */
.splash-enter-active { transition: opacity 0.3s ease; }
.splash-leave-active  { transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
.splash-leave-to      { opacity: 0; transform: scale(1.04); }

/* ── Background orbs ── */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  animation: drift 8s ease-in-out infinite alternate;
  pointer-events: none;
}
.orb-1 {
  width: 480px; height: 480px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%);
  top: -10%; left: -5%;
  animation-delay: 0s;
}
.orb-2 {
  width: 380px; height: 380px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  bottom: -5%; right: -5%;
  animation-delay: -3s;
}
.orb-3 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%);
  top: 50%; left: 55%;
  animation-delay: -6s;
}
@keyframes drift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(30px, 20px) scale(1.08); }
}

/* ── Grain ── */
.grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  background-size: 200px;
  opacity: 0.35;
  pointer-events: none;
}

/* ── Center content ── */
.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 1;
}

/* ── Logo ── */
.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 6px;
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
.logo-bracket {
  font-size: 2.2rem;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-weight: 700;
  color: #7c3aed;
  opacity: 0.85;
}
.logo-name {
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Inter', 'Outfit', sans-serif;
  background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #f0abfc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
}
@keyframes popIn {
  from { opacity: 0; transform: scale(0.7) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* ── Tagline ── */
.tagline {
  font-size: 0.875rem;
  color: #94a3b8;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  margin: 0;
  display: flex;
}
.tagline-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(8px);
  animation: charIn 0.35s ease forwards;
}
@keyframes charIn {
  to { opacity: 1; transform: translateY(0); }
}

/* ── Progress ── */
.progress-area {
  width: 260px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: fadeUp 0.5s 0.4s ease both;
}
.progress-track {
  position: relative;
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  overflow: visible;
}
.progress-bar {
  position: absolute;
  inset: 0;
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(90deg, #7c3aed, #60a5fa, #a78bfa);
  transition: width 0.15s linear;
  box-shadow: 0 0 8px 1px rgba(139, 92, 246, 0.6);
}
.progress-glow {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 10px 4px rgba(167, 139, 250, 0.8);
  transition: left 0.15s linear;
  pointer-events: none;
}
.progress-label {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 1px;
}
.progress-pct {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #a78bfa;
  min-width: 2ch;
  text-align: right;
  transition: all 0.1s linear;
}
.progress-pct-sign {
  font-family: 'Fira Code', monospace;
  font-size: 0.65rem;
  color: #6d28d9;
}

/* ── Dots ── */
.dots {
  display: flex;
  gap: 6px;
  animation: fadeUp 0.5s 0.5s ease both;
}
.dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #6d28d9;
  animation: pulse 1.1s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(0.7); opacity: 0.4; }
  50%       { transform: scale(1.2); opacity: 1; background: #a78bfa; }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
