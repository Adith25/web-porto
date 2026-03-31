<template>
  <Transition leave-active-class="splash-leave" leave-to-class="splash-leave-to">
    <div v-if="isLoading" class="splash-overlay" aria-live="polite" aria-label="Loading">
      <div ref="lottieContainer" class="lottie-wrap" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useLoading } from '~/composables/useLoading';
import { usePortfolioData } from '~/composables/usePortfolioData';

const { isLoading, finishLoading } = useLoading();
const { fetchAll, isDataReady }    = usePortfolioData();
const lottieContainer = ref<HTMLElement | null>(null);

const finish = () => setTimeout(() => finishLoading(), 400);

onMounted(async () => {
  if (lottieContainer.value) {
    const lottie = (await import('lottie-web')).default;
    lottie.loadAnimation({
      container : lottieContainer.value,
      renderer  : 'svg',
      loop      : true,
      autoplay  : true,
      path      : '/lottie/mana-loading.json',
    });
  }

  const dataPromise    = fetchAll();
  const timeoutPromise = new Promise<void>(res => setTimeout(res, 6000));
  await Promise.race([dataPromise, timeoutPromise]);
  finish();
});

watch(isDataReady, (ready) => { if (ready) finish(); });
onUnmounted(() => {});
</script>

<style scoped>
.splash-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}

.splash-leave    { transition: opacity 0.5s ease; }
.splash-leave-to { opacity: 0; }

/* 
  CSS filter to convert white SVG → indigo-400 (#818cf8)
  Tahapan: 
  1. brightness(0) → hitam
  2. invert(1)      → putih  (reset)  
  3. sepia+saturate → warna warni
  4. hue-rotate     → geser ke ungu/indigo
*/
.lottie-wrap {
  width: 220px;
  height: 220px;
  filter: invert(56%) sepia(60%) saturate(1200%) hue-rotate(210deg) brightness(105%);
}
</style>
