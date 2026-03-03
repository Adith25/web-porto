<template>
  <div ref="el" :class="classes" :style="delayStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale";
    delay?: number;
    duration?: number;
  }>(),
  {
    animation: "fade-up",
    delay: 0,
    duration: 600,
  },
);

const el = ref<HTMLElement | null>(null);
const { observe } = useScrollAnimation();

const classes = computed(() => ["scroll-reveal", `scroll-${props.animation}`]);

const delayStyle = computed(() => ({
  "--sr-delay": `${props.delay}ms`,
  "--sr-duration": `${props.duration}ms`,
}));

onMounted(() => {
  if (el.value) {
    observe(el.value);
  }
});
</script>
