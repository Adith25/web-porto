<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <!-- Background Decorations -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
        />
        <div
          class="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet/5 rounded-full blur-3xl animate-float"
          style="animation-delay: 3s"
        />
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-3xl">
          <!-- Greeting -->
          <p class="text-accent font-mono text-sm mb-4 animate-fade-in">
            Hello, I'm
          </p>

          <!-- Name -->
          <h1
            class="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-up"
          >
            Muhammad Aditya
            <span class="block gradient-text">Yufnanda</span>
          </h1>

          <!-- Role -->
          <h2
            class="text-xl sm:text-2xl font-medium text-gray-300 mb-6 animate-fade-up"
            style="animation-delay: 0.1s"
          >
            Fullstack &amp; Machine Learning Engineer
          </h2>

          <!-- Subtext -->
          <p
            class="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed animate-fade-up"
            style="animation-delay: 0.2s"
          >
            Building intelligent systems with AI, Mobile, and IoT technologies.
            Passionate about creating solutions that bridge software and
            hardware.
          </p>

          <!-- CTAs -->
          <div
            class="flex flex-wrap gap-4 animate-fade-up"
            style="animation-delay: 0.3s"
          >
            <NuxtLink to="/projects" class="btn-primary">
              <Icon name="mdi:rocket-launch-outline" class="w-5 h-5" />
              View Projects
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-outline">
              <Icon name="mdi:email-outline" class="w-5 h-5" />
              Contact Me
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <SectionWrapper
      title="Tech"
      highlight=" Stack"
      subtitle="Technologies and tools I work with."
    >
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="category in techStack"
          :key="category.name"
          class="glass-card p-6 hover:border-accent/30 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="p-2 rounded-lg" :class="category.bgClass">
              <Icon
                :name="category.icon"
                class="w-5 h-5"
                :class="category.iconClass"
              />
            </div>
            <h3 class="font-semibold text-white">{{ category.name }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <TechBadge
              v-for="tech in category.items"
              :key="tech"
              :variant="category.variant"
            >
              {{ tech }}
            </TechBadge>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Adith — Fullstack & Machine Learning Engineer",
});

const techStack = [
  {
    name: "Machine Learning",
    icon: "mdi:brain",
    bgClass: "bg-violet/10",
    iconClass: "text-violet-light",
    variant: "violet" as const,
    items: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
  },
  {
    name: "Backend",
    icon: "mdi:server",
    bgClass: "bg-emerald-500/10",
    iconClass: "text-emerald-400",
    variant: "emerald" as const,
    items: ["NestJS", "TypeScript", "MySQL"],
  },
  {
    name: "Frontend",
    icon: "mdi:palette-outline",
    bgClass: "bg-sky-500/10",
    iconClass: "text-sky-400",
    variant: "sky" as const,
    items: ["Nuxt.js", "Flutter"],
  },
  {
    name: "Embedded / IoT",
    icon: "mdi:chip",
    bgClass: "bg-amber-500/10",
    iconClass: "text-amber-400",
    variant: "amber" as const,
    items: ["Arduino", "Sensors", "Actuators"],
  },
  {
    name: "Tools",
    icon: "mdi:wrench-outline",
    bgClass: "bg-accent/10",
    iconClass: "text-accent-light",
    variant: "accent" as const,
    items: ["Git", "Docker", "Linux"],
  },
];
</script>
