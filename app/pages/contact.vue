<template>
  <div class="pt-16">
    <SectionWrapper
      title="Get In"
      highlight=" Touch"
      subtitle="Have a project in mind? Let's talk."
    >
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Form -->
        <div>
          <div class="glass-card p-6 sm:p-8">
            <h3 class="text-lg font-semibold text-white mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <!-- Info Card -->
          <div class="glass-card p-6 sm:p-8">
            <h3 class="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <div class="space-y-4">
              <a
                v-for="info in contactInfo"
                :key="info.label"
                :href="info.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-dark-lighter transition-colors duration-200 group"
              >
                <div
                  class="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors"
                >
                  <Icon :name="info.icon" class="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <p class="text-xs text-gray-500 uppercase tracking-wider">
                    {{ info.label }}
                  </p>
                  <p
                    class="text-sm text-gray-300 group-hover:text-white transition-colors"
                  >
                    {{ info.value }}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="glass-card p-6 sm:p-8">
            <div class="flex items-center gap-3 mb-3">
              <span class="relative flex h-3 w-3">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                />
                <span
                  class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"
                />
              </span>
              <h3 class="text-lg font-semibold text-white">
                Available for Work
              </h3>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed">
              I'm currently open to full-time positions, freelance projects, and
              collaboration opportunities. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Contact — Adith",
  meta: [
    {
      name: "description",
      content: "Get in touch with Adith — Let's discuss your next project.",
    },
  ],
});

const contactInfo = [
  {
    label: "Email",
    value: "adith@example.com",
    icon: "mdi:email-outline",
    url: "mailto:adith@example.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/adith",
    icon: "mdi:linkedin",
    url: "https://linkedin.com/in/",
  },
  {
    label: "GitHub",
    value: "github.com/adith",
    icon: "mdi:github",
    url: "https://github.com/",
  },
];
</script>
