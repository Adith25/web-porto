<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-dark-border/50"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <span class="text-xl font-bold gradient-text">Adith</span>
          <span class="text-xs font-mono text-gray-500 hidden sm:inline"
            >/ engineer</span
          >
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-lg transition-colors duration-200 relative group"
            active-class="!text-white"
          >
            {{ link.label }}
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-4/5"
            />
          </NuxtLink>
        </div>

        <!-- Mobile Hamburger -->
        <button
          class="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
          @click="isOpen = !isOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="md:hidden bg-dark-card/95 backdrop-blur-md border-b border-dark-border"
      >
        <div class="px-4 py-3 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-dark-lighter rounded-lg transition-all duration-200"
            active-class="!text-white !bg-dark-lighter"
            @click="isOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false);

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

// Close mobile menu on route change
const route = useRoute();
watch(
  () => route.path,
  () => {
    isOpen.value = false;
  },
);
</script>
