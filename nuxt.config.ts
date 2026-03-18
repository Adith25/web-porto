// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3001'
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@vueuse/motion/nuxt',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: ''
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      Manrope: [400, 500, 600, 700, 800],
      'JetBrains Mono': [400, 500],
      Caveat: [400, 500, 600, 700],
    },
    display: 'swap',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Adith — Software Developer & Machine Learning Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio of Muhammad Aditya Yufnanda — Software Developer & Machine Learning Engineer specializing in Machine Learning, Mobile Development, and IoT Systems.',
        },
        { name: 'author', content: 'Muhammad Aditya Yufnanda' },
        { property: 'og:title', content: 'Adith — Software Developer & Machine Learning Engineer' },
        {
          property: 'og:description',
          content:
            'Building intelligent systems with AI, Mobile, and IoT technologies.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],
})
