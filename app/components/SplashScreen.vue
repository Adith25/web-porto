<template>
  <Transition leave-active-class="splash-leave" leave-to-class="splash-leave-to">
    <div v-if="isLoading" class="splash-overlay" aria-live="polite" aria-label="Loading">
      <div class="flex flex-col items-center gap-1.5">
        <div ref="lottieContainer" class="lottie-wrap" />
        <!-- Dynamic Loading Message -->
        <p class="loading-message text-gray-400 tracking-widest">
          {{ currentMessage }}
        </p>
      </div>
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

const messages = [
  "Initializing system...",
  "Powering up modules...",
  "Fetching portfolio data...",
  "Synchronizing assets...",
  "Loading premium experience...",
  "Almost there...",
  "Finalizing things..."
];
const currentMessage = ref(messages[0]);
let messageInterval: any = null;

const startMessageCycle = () => {
  let index = 0;
  messageInterval = setInterval(() => {
    if (index < messages.length - 1) {
      index++;
      currentMessage.value = messages[index];
    }
  }, 1200);
};

const finish = () => {
  if (messageInterval) clearInterval(messageInterval);
  currentMessage.value = "Welcome!";
  setTimeout(() => finishLoading(), 400);
};

onMounted(async () => {
  startMessageCycle();
  
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
onUnmounted(() => {
  if (messageInterval) clearInterval(messageInterval);
});
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

.lottie-wrap {
  width: 400px;
  height: 400px;
  filter: invert(56%) sepia(30%) saturate(1200%) hue-rotate(210deg) brightness(105%);
}

.loading-message {
  font-size: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
</style>
