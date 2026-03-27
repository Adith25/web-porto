<template>
  <div class="relative flex h-[240px] w-full flex-col overflow-hidden p-2">
    <transition-group 
      name="notification" 
      tag="div" 
      class="flex flex-col gap-3 w-full items-center justify-start pointer-events-auto"
    >
      <component 
        :is="item.href ? 'a' : 'div'" 
        v-for="item in visibleItems" 
        :key="item.uniqueId"
        :href="item.href"
        target="_blank"
        class="relative flex w-full max-w-[350px] cursor-pointer flex-col overflow-hidden rounded-xl p-3 bg-transparent border border-transparent hover:bg-black/5 dark:hover:bg-white/5 hover:backdrop-blur-md hover:scale-[102%] transition-all duration-300 group hover:border-[color:var(--hover-color)] dark:hover:border-[color:var(--hover-color)]"
        :style="{ '--hover-color': item.color + '80' }"
      >
        <div class="flex flex-row items-center gap-3">
          <div
            class="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
            :style="{ backgroundColor: item.color + '20' }"
          >
            <Icon :name="item.icon" class="w-5 h-5" :style="{ color: item.color }" />
          </div>
          <div class="flex flex-col overflow-hidden">
            <figcaption class="flex flex-row items-center text-sm font-semibold whitespace-pre dark:text-white">
              <span>{{ item.name }}</span>
              <span class="mx-1.5 text-gray-500">·</span>
              <span class="text-[10px] font-medium text-gray-500">{{ item.time }}</span>
            </figcaption>
            <p class="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
              {{ item.description }}
            </p>
          </div>
        </div>
      </component>
    </transition-group>

    <!-- Bottom gradient mask to fade out old items cleanly -->
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-[#f8fafc] dark:from-black to-transparent z-10"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Item {
  name: string;
  description: string;
  time: string;
  icon: string;
  color: string;
  href: string;
}

const items: Item[] = [
  {
    name: "Instagram",
    description: "Daily life & updates",
    time: "Social",
    icon: "mdi:instagram",
    color: "#E1306C",
    href: "https://instagram.com/adityayufnanda"
  },
  {
    name: "LinkedIn",
    description: "Professional networking",
    time: "Work",
    icon: "mdi:linkedin",
    color: "#0A66C2",
    href: "https://www.linkedin.com/in/adityayufnanda/"
  },
  {
    name: "GitHub",
    description: "My open source projects",
    time: "Code",
    icon: "mdi:github",
    color: "#ffffff",
    href: "https://github.com/Adith25"
  },
  {
    name: "Spotify",
    description: "Coding playlists & jams",
    time: "Music",
    icon: "mdi:spotify",
    color: "#1DB954",
    href: "https://open.spotify.com/user/yufnanda?si=yYrGWxDvSUiGL9VEsJel5g"
  }
]

interface VisibleItem extends Item {
  uniqueId: number;
}

const visibleItems = ref<VisibleItem[]>([])
let currentIndex = 0
let idCounter = 0
let intervalId: ReturnType<typeof setInterval> | null = null

const pushNextItem = () => {
  const sourceItem = items[currentIndex]
  visibleItems.value.unshift({ ...sourceItem, uniqueId: idCounter++ } as VisibleItem)
  
  // Keep max 3 items visible to save space and trigger the leave animation on the oldest
  if (visibleItems.value.length > 3) {
    visibleItems.value.pop()
  }
  
  currentIndex = (currentIndex + 1) % items.length
}

onMounted(() => {
  // Initial populate with 3 items
  pushNextItem()
  setTimeout(pushNextItem, 200)
  setTimeout(pushNextItem, 400)
  
  // Start the infinite scrolling interval
  intervalId = setInterval(pushNextItem, 2500)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
/* Transition Group Animations matching Magic UI AnimatedList */
.notification-move,
.notification-enter-active,
.notification-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.notification-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.9); /* Drop from above */
}

/* Magic UI removes items from bottom instantly or fades them out */
.notification-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

/* Ensure leaving items are taken out of flow so moving items can slide smoothly */
.notification-leave-active {
  position: absolute;
  width: 100%;
  max-width: 350px;
}
</style>
