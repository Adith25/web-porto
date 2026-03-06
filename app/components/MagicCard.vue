<template>
  <div
    ref="cardRef"
    class="magic-card"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- Gradient spotlight that follows the cursor -->
    <div class="magic-spotlight" :style="spotlightStyle" />
    <!-- Border glow layer -->
    <div class="magic-border" :style="borderStyle" />
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
  const r = props.gradientSize * 1.2;
  return {
    opacity: '1',
    background: `radial-gradient(${r}px circle at ${mouseX.value}px ${mouseY.value}px, rgba(139, 92, 246, 0.55), transparent 65%)`,
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
  /* Normal border — overridden by border-glow on hover via parent */
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.3s ease;
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

/* Border glow — sits just behind via negative inset trick */
.magic-border {
  position: absolute;
  inset: -1px;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 0;
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
  z-index: 1;
}
</style>
