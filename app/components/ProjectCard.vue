<template>
  <article
    class="glass-card p-6 group hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
  >
    <!-- Header -->
    <div class="flex items-start justify-between mb-4">
      <div class="p-2 rounded-lg bg-accent/10">
        <Icon
          :name="icon || 'mdi:code-braces'"
          class="w-6 h-6 text-accent-light"
        />
      </div>
      <div class="flex gap-2">
        <a
          v-if="github"
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 text-gray-500 hover:text-white transition-colors"
          aria-label="GitHub repository"
        >
          <Icon name="mdi:github" class="w-5 h-5" />
        </a>
        <a
          v-if="demo"
          :href="demo"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 text-gray-500 hover:text-accent transition-colors"
          aria-label="Live demo"
        >
          <Icon name="mdi:open-in-new" class="w-5 h-5" />
        </a>
      </div>
    </div>

    <!-- Content -->
    <h3
      class="text-lg font-semibold text-white mb-2 group-hover:text-accent-light transition-colors"
    >
      {{ title }}
    </h3>
    <p class="text-sm text-gray-400 leading-relaxed mb-4">{{ description }}</p>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2">
      <TechBadge v-for="tag in tags" :key="tag" variant="default">
        {{ tag }}
      </TechBadge>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  tags: string[];
  icon?: string;
  github?: string;
  demo?: string;
}>();
</script>
