<template>
  <div :data-loading="isLoading" class="app-root">
    <SplashScreen />
    <div class="main-content-gate">
      <ParticlesBackground />
      <ClientOnly>
        <ToastContainer />
      </ClientOnly>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isLoading } = useLoading();
</script>

<style>
  /* Critical CSS to prevent FOUC and layout shifts on refresh */
  [data-loading="true"] .main-content-gate { 
    opacity: 0 !important; 
    visibility: hidden !important; 
  }
  .main-content-gate {
    transition: opacity 0.3s ease;
  }
  /* Ensure splash-overlay is always fixed and covers screen even before main CSS */
  .splash-overlay { 
    position: fixed !important; 
    inset: 0 !important; 
    z-index: 99999 !important; 
    background: #0a0a0f !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
</style>

<style scoped>
.app-root {
  min-height: 100vh;
}
</style>
