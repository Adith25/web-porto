<template>
  <section :class="['py-16 sm:py-24', $attrs.class]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="title" class="mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-white">
          {{ title }}
          <span v-if="highlight" class="gradient-text">{{ highlight }}</span>
        </h2>
        <p v-if="subtitle" class="mt-3 text-gray-400 text-lg max-w-2xl">
          {{ subtitle }}
        </p>
        <div class="mt-4 w-16 h-1 bg-accent rounded-full" />
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  highlight?: string;
  subtitle?: string;
}>();
</script>
