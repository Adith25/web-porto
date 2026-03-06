<template>
  <footer class="border-t border-dark-border/50 bg-dark-card/30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Brand -->
        <div class="text-center md:text-left">
          <NuxtLink to="/" class="text-lg font-bold gradient-text"
            >Adith</NuxtLink
          >
          <p class="text-sm text-gray-500 mt-1">Computer Engineer &amp; ML Enthusiast</p>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-4">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-gray-500 hover:text-accent transition-colors duration-200"
            :aria-label="social.label"
          >
            <Icon :name="social.icon" class="w-5 h-5" />
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-sm text-gray-600">
          &copy; {{ new Date().getFullYear() }} Adith. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { label: "GitHub", icon: "mdi:github", url: "https://github.com/" },
  { label: "LinkedIn", icon: "mdi:linkedin", url: "https://linkedin.com/in/" },
  {
    label: "Email",
    icon: "mdi:email-outline",
    url: "mailto:adith@example.com",
  },
];
</script>
