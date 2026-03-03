<template>
  <div class="pt-16">
    <SectionWrapper
      title="My"
      highlight=" Experience"
      subtitle="Professional journey and technical contributions."
    >
      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div
          class="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-dark-border"
        />

        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative pl-12 sm:pl-20"
          >
            <!-- Timeline Dot -->
            <div
              class="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-dark"
            />

            <div
              class="glass-card p-6 sm:p-8 hover:border-accent/30 transition-all duration-300"
            >
              <!-- Header -->
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4"
              >
                <div>
                  <h3 class="text-lg font-semibold text-white">
                    {{ exp.role }}
                  </h3>
                  <p class="text-accent-light font-medium">{{ exp.company }}</p>
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-gray-500 font-mono shrink-0"
                >
                  <Icon name="mdi:calendar-outline" class="w-4 h-4" />
                  {{ exp.period }}
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                {{ exp.description }}
              </p>

              <!-- Contributions -->
              <ul class="space-y-2 mb-4">
                <li
                  v-for="(point, i) in exp.highlights"
                  :key="i"
                  class="flex items-start gap-2 text-sm text-gray-400"
                >
                  <Icon
                    name="mdi:chevron-right"
                    class="w-4 h-4 text-accent mt-0.5 shrink-0"
                  />
                  <span>{{ point }}</span>
                </li>
              </ul>

              <!-- Tech used -->
              <div class="flex flex-wrap gap-2">
                <TechBadge
                  v-for="tech in exp.tech"
                  :key="tech"
                  variant="accent"
                >
                  {{ tech }}
                </TechBadge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Experience — Adith",
  meta: [
    {
      name: "description",
      content: "Professional experience and technical contributions by Adith.",
    },
  ],
});

const experiences = [
  {
    role: "IT Development Intern",
    company: "Technology Company",
    period: "2024 — 2025",
    description:
      "Contributed to IT development projects involving web and mobile platforms. Worked collaboratively within a development team using agile methodologies.",
    highlights: [
      "Developed and maintained internal web applications using modern frameworks",
      "Collaborated with senior developers on feature design and code reviews",
      "Integrated REST APIs and ensured data consistency across platforms",
      "Utilized Git for version control and collaborative development workflows",
      "Participated in sprint planning and daily standups",
    ],
    tech: ["TypeScript", "NestJS", "Flutter", "MySQL", "Git"],
  },
  {
    role: "ML Research — Dental Caries Classification",
    company: "University Research Project",
    period: "2024",
    description:
      "Conducted research on dental caries classification using deep learning approaches with Feature Pyramid Network architecture.",
    highlights: [
      "Designed and trained FPN-based segmentation models for dental imagery",
      "Preprocessed and augmented dental X-ray datasets for improved model generalization",
      "Evaluated model performance using precision, recall, and IoU metrics",
      "Documented findings and methodology for academic publication",
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Matplotlib"],
  },
  {
    role: "IoT Systems Developer",
    company: "Academic Projects",
    period: "2023 — 2024",
    description:
      "Designed and built multiple IoT systems addressing real-world challenges in water management and sustainability.",
    highlights: [
      "Built LeakGuard — an IoT-based irrigation leak detection system (SDG 6.4)",
      "Developed WudhuCycle — a greywater reuse system with Flutter mobile integration",
      "Programmed Arduino microcontrollers with multiple sensors and actuators",
      "Created mobile dashboards for real-time monitoring and control",
    ],
    tech: ["Arduino", "Flutter", "Sensors", "IoT", "Dart"],
  },
];
</script>
