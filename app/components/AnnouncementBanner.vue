<template>
  <div v-if="settings?.announcementActive && settings?.announcementText" 
       class="w-full py-2.5 overflow-hidden flex items-center shadow-lg relative z-[100] banner-container"
       :style="{ 
         backgroundColor: settings.bannerColor || '#4f46e5', 
         color: settings.textColor || '#ffffff', 
         '--speed': (settings.animationSpeed || 25) + 's' 
       }">
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
const API_BASE = config.public.apiBase;

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
    const res = await $fetch<any>(`${API_BASE}/settings`);
    settings.value = res;
  } catch (err) {
    console.error('Failed to load site settings for banner:', err);
  }
});
</script>

<style scoped>
.banner-container {
  min-height: 40px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: all 0.3s ease;
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
