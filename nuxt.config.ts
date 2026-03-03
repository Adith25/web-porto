// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
  ],

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'JetBrains Mono': [400, 500],
    },
    display: 'swap',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Adith — Fullstack & Machine Learning Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio of Muhammad Aditya Yufnanda — Fullstack & ML Engineer specializing in Machine Learning, Mobile Development, and IoT Systems.',
        },
        { name: 'author', content: 'Muhammad Aditya Yufnanda' },
        { property: 'og:title', content: 'Adith — Fullstack & ML Engineer' },
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
