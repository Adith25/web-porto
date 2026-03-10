<template>
  <div
    ref="cardRef"
    class="magic-card group"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- Gradient spotlight that follows the cursor -->
    <div class="magic-spotlight" :style="spotlightStyle" />
    <!-- Border glow layer -->
    <div class="magic-border" :style="borderStyle" />
    <!-- Static outer border -->
    <div class="magic-static-border" />
    <!-- Content slot -->
    <div class="magic-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  /** Spotlight color, default violet */
  gradientColor?: string;
  gradientSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  gradientColor: 'rgba(139, 92, 246, 0.18)',
  gradientSize: 280,
});

const cardRef = ref<HTMLDivElement | null>(null);
const mouseX = ref<number | null>(null);
const mouseY = ref<number | null>(null);

const onMouseMove = (e: MouseEvent) => {
  const el = cardRef.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
};

const onMouseLeave = () => {
  mouseX.value = null;
  mouseY.value = null;
};

const spotlightStyle = computed(() => {
  if (mouseX.value === null || mouseY.value === null) {
    return { opacity: '0' };
  }
  return {
    opacity: '1',
    background: `radial-gradient(${props.gradientSize}px circle at ${mouseX.value}px ${mouseY.value}px, ${props.gradientColor}, transparent 70%)`,
  };
});

const borderStyle = computed(() => {
  if (mouseX.value === null || mouseY.value === null) {
    return { opacity: '0' };
  }
  const r = props.gradientSize;
  return {
    opacity: '1',
    background: `radial-gradient(${r}px circle at ${mouseX.value}px ${mouseY.value}px, rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.8) 40%, transparent 80%)`,
  };
});
</script>

<style scoped>
.magic-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  /* Dark base */
  background: rgba(15, 15, 25, 0.75);
}

.magic-static-border {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: inherit;
  z-index: 1;
}
.magic-card:hover .magic-static-border {
  opacity: 0.3;
}

/* Spotlight glow that follows cursor */
.magic-spotlight {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 0;
  border-radius: inherit;
}

/* Border glow — sits exactly on the edge */
.magic-border {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 2;
  border-radius: inherit;
  /* Masked so only the 1px edge is visible */
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  padding: 1px;
}

/* Actual card content sits above the glow layers */
.magic-content {
  position: relative;
  z-index: 3;
}
</style>
