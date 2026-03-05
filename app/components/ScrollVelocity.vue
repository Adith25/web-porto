<template>
  <div class="sv-wrapper">
    <!-- Row 1: scrolls left -->
    <div class="sv-row">
      <div class="sv-track" ref="track1Ref">
        <template v-for="n in 4" :key="'r1-' + n">
          <span v-for="item in row1" :key="item.label + n" class="sv-item">
            <Icon :name="item.icon" class="sv-icon" />
            <span class="sv-label">{{ item.label }}</span>
          </span>
        </template>
      </div>
    </div>

    <!-- Row 2: scrolls right -->
    <div class="sv-row">
      <div class="sv-track" ref="track2Ref">
        <template v-for="n in 4" :key="'r2-' + n">
          <span v-for="item in row2" :key="item.label + n" class="sv-item">
            <Icon :name="item.icon" class="sv-icon" />
            <span class="sv-label">{{ item.label }}</span>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const row1 = [
  { label: 'Python',      icon: 'logos:python' },
  { label: 'TensorFlow',  icon: 'logos:tensorflow' },
  { label: 'PyTorch',     icon: 'logos:pytorch-icon' },
  { label: 'OpenCV',      icon: 'logos:opencv' },
  { label: 'NestJS',      icon: 'logos:nestjs' },
  { label: 'TypeScript',  icon: 'logos:typescript-icon' },
  { label: 'MySQL',       icon: 'logos:mysql-icon' },
  { label: 'Nuxt.js',     icon: 'logos:nuxt-icon' },
  { label: 'Flutter',     icon: 'logos:flutter' },
]

const row2 = [
  { label: 'Node.js',     icon: 'logos:nodejs-icon' },
  { label: 'Docker',      icon: 'logos:docker-icon' },
  { label: 'Git',         icon: 'logos:git-icon' },
  { label: 'Linux',       icon: 'logos:linux-tux' },
  { label: 'Arduino',     icon: 'logos:arduino' },
  { label: 'Google Cloud',icon: 'logos:google-cloud' },
  { label: 'Firebase',    icon: 'logos:firebase' },
  { label: 'Dart',        icon: 'logos:dart' },
  { label: 'Tailwind',    icon: 'logos:tailwindcss-icon' },
]

const track1Ref = ref<HTMLElement | null>(null)
const track2Ref = ref<HTMLElement | null>(null)

let x1 = 0   // position of track1 (moves left)
let x2 = 0   // position of track2 (moves right)

const BASE_SPEED = 0.55        // px per frame base speed
const MAX_BOOST  = 8           // max extra speed from scroll
const DECAY      = 0.92        // how fast the boost fades

let velocity = 0               // current scroll-boost
let lastScrollY = 0
let animId = 0

const animate = () => {
  const boost = velocity * MAX_BOOST

  // Row 1: left (negative x)
  if (track1Ref.value) {
    const half = track1Ref.value.scrollWidth / 4
    x1 -= BASE_SPEED + boost
    if (x1 <= -half) x1 += half
    track1Ref.value.style.transform = `translateX(${x1}px)`
  }

  // Row 2: right (positive x)
  if (track2Ref.value) {
    const half = track2Ref.value.scrollWidth / 4
    x2 += BASE_SPEED + boost
    if (x2 >= half) x2 -= half
    track2Ref.value.style.transform = `translateX(${x2}px)`
  }

  // Decay velocity
  velocity *= DECAY

  animId = requestAnimationFrame(animate)
}

onMounted(() => {
  animId = requestAnimationFrame(animate)

  const onScroll = () => {
    const delta = window.scrollY - lastScrollY
    lastScrollY = window.scrollY
    // Map scroll delta to 0‥1 velocity
    velocity = Math.min(1, Math.abs(delta) / 60)
  }

  window.addEventListener('scroll', onScroll, { passive: true })

  onUnmounted(() => {
    cancelAnimationFrame(animId)
    window.removeEventListener('scroll', onScroll)
  })
})
</script>

<style scoped>
.sv-wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 0;
  /* Fade edges */
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.sv-row {
  overflow: hidden;
  width: 100%;
}

.sv-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.sv-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.4rem;
  margin-right: 0.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  white-space: nowrap;
  transition: border-color 0.2s, background 0.2s;
}

.sv-item:hover {
  background: rgba(139, 92, 246, 0.08);
  border-color: rgba(139, 92, 246, 0.3);
}

.sv-icon {
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
}

.sv-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(200, 200, 230, 0.7);
  letter-spacing: 0.02em;
}
</style>
