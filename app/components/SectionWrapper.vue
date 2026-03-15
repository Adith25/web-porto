<template>
  <section :class="['py-16 sm:py-24', $attrs.class]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="title" :class="['mb-12 flex flex-col w-full', centered ? 'items-center text-center' : 'items-start text-left']">
        <h2 :class="['text-3xl sm:text-4xl font-bold text-white w-full', centered ? 'text-center' : 'text-left']">
          {{ title }}
          <span v-if="highlight" class="gradient-text">{{ highlight }}</span>
        </h2>
        <p v-if="subtitle" :class="['mt-3 text-gray-400 text-sm max-w-2xl font-sans', centered ? 'mx-auto' : '']">
          {{ subtitle }}
        </p>
        <div v-if="!hideLine" :class="['mt-4 w-16 h-1 bg-accent rounded-full', centered ? 'mx-auto' : '']" />
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
  centered?: boolean;
  hideLine?: boolean;
}>();
</script>
