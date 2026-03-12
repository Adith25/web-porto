<template>
  <div v-if="settings?.announcementActive && settings?.announcementText" 
       class="w-full py-2 overflow-hidden flex items-center shadow-md relative z-50 banner-container"
       :style="{ backgroundColor: settings.bannerColor, color: settings.textColor, '--speed': settings.animationSpeed + 's' }">
    <div class="marquee-track">
      <div class="marquee-content font-medium text-sm tracking-wide">
        <span class="mx-8" v-html="settings.announcementText"></span>
        <span class="mx-8" v-html="settings.announcementText"></span>
        <span class="mx-8" v-html="settings.announcementText"></span>
        <span class="mx-8" v-html="settings.announcementText"></span>
      </div>
      <div class="marquee-content font-medium text-sm tracking-wide" aria-hidden="true">
        <span class="mx-8" v-html="settings.announcementText"></span>
        <span class="mx-8" v-html="settings.announcementText"></span>
        <span class="mx-8" v-html="settings.announcementText"></span>
        <span class="mx-8" v-html="settings.announcementText"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const config = useRuntimeConfig();
const API_BASE = config.public.apiBase || "http://localhost:4000";

interface SiteSetting {
  announcementText: string;
  announcementActive: boolean;
  bannerColor: string;
  textColor: string;
  animationSpeed: number;
}

const settings = ref<SiteSetting | null>(null);

onMounted(async () => {
  try {
    settings.value = await $fetch<SiteSetting>(`${API_BASE}/settings`);
  } catch (err) {
    console.error('Failed to load site settings:', err);
  }
});
</script>

<style scoped>
.banner-container {
  display: flex;
  white-space: nowrap;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee var(--speed, 25s) linear infinite;
}

.marquee-content {
  display: flex;
  flex-shrink: 0;
}

@keyframes marquee {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
</style>
