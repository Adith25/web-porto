import Lenis from 'lenis';

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    duration: 1.5, // Increased duration for a "heavy" feel
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    wheelMultiplier: 1,
    touchMultiplier: 2,
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
