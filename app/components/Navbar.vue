<template>
  <nav
    class="fixed z-50 transition-all duration-[1200ms] [transition-timing-function:cubic-bezier(0.6,0.01,0.05,0.95)] shadow-indigo-500/5 mx-auto left-0 right-0"
    :class="[
      scrolled 
        ? 'mt-4 max-w-4xl rounded-full bg-white/40 dark:bg-dark/40 backdrop-blur-xl shadow-2xl px-2' 
        : 'max-w-full rounded-none bg-white/50 dark:bg-dark/50 backdrop-blur-md px-0',
    ]"
    :style="{ 
      top: scrolled 
        ? '0px' 
        : (isBannerVisible ? '40px' : '0px'),
      left: '0px',
      right: '0px'
    }"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a
          href="#hero"
          class="flex items-center gap-2 group"
          @click.prevent="scrollToSection('hero')"
        >
          <span 
            class="text-4xl sm:text-4xl font-medium gradient-text py-1" 
            style="font-family: 'Bastliga One', cursive; line-height: 1.2;"
          >
            Adith
          </span>
          <span class="text-xs font-mono text-gray-500 hidden sm:inline"
            ></span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 relative group"
            :class="
              activeSection === link.id
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            "
            @click.prevent="scrollToSection(link.id)"
          >
            {{ link.label }}
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300"
              :class="
                activeSection === link.id ? 'w-4/5' : 'w-0'
              "
            />
          </a>
          <AnimatedThemeToggler class="ml-2" />
        </div>

        <!-- Mobile: Toggle + Hamburger -->
        <div class="md:hidden flex items-center gap-2">
          <AnimatedThemeToggler />
          <button
          class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
        class="md:hidden bg-white/95 dark:bg-dark-card/95 backdrop-blur-md border-b border-gray-200 dark:border-dark-border"
      >
        <div class="px-4 py-3 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
            :class="
              activeSection === link.id
                ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-dark-lighter'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-lighter'
            "
            @click.prevent="
              scrollToSection(link.id);
              isOpen = false;
            "
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import AnimatedThemeToggler from '~/components/ui/animated-theme-toggler.vue';

const { isBannerVisible } = useAnnouncement();
const isOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref("hero");

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  // Track scroll for navbar bg
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
  };

  // Track active section via IntersectionObserver
  const sectionIds = navLinks.map((l) => l.id);
  const observers: IntersectionObserver[] = [];

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    rootMargin: "-80px 0px -70% 0px",
  });

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
  observers.push(observer);

  window.addEventListener("scroll", handleScroll, { passive: true });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    observers.forEach((o) => o.disconnect());
  });
});
</script>
