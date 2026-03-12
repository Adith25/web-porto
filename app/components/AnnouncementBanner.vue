<template>
  <div v-if="settings?.announcementActive && settings?.announcementText" class="w-full bg-indigo-600 text-white py-2 overflow-hidden flex items-center shadow-md relative z-50">
    <div class="whitespace-nowrap animate-marquee-ltr font-medium text-sm tracking-wide">
      <span class="mx-8" v-html="settings.announcementText"></span>
      <span class="mx-8" v-html="settings.announcementText"></span>
      <span class="mx-8" v-html="settings.announcementText"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const API_BASE = "http://localhost:4000";

interface SiteSetting {
  announcementText: string;
  announcementActive: boolean;
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
.animate-marquee-ltr {
  display: inline-block;
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
