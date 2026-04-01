import Lenis from 'lenis';

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    duration: 2.2,
    lerp: 0.07,
    wheelMultiplier: 0.5,
    touchMultiplier: 1.5,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Provide to app context if needed elsewhere (e.g., to pause on modals)
  nuxtApp.provide('lenis', lenis);
});
