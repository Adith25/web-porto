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
const { settings, fetchSettings } = useAnnouncement();

onMounted(() => {
  fetchSettings();
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
