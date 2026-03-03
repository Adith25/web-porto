<template>
  <div class="pt-16">
    <SectionWrapper
      title="About"
      highlight=" Me"
      subtitle="A bit about my journey and what drives me."
    >
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <div class="glass-card p-6 sm:p-8">
            <h3 class="text-xl font-semibold text-white mb-4">Who I Am</h3>
            <div class="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm
                <strong class="text-white">Muhammad Aditya Yufnanda</strong>, a
                Computer Engineering graduate with a deep interest in building
                intelligent systems. My work spans across
                <span class="text-accent-light">Machine Learning</span>,
                <span class="text-violet-light">Mobile Development</span>, and
                <span class="text-emerald-400">IoT Systems</span>.
              </p>
              <p>
                My ML research focused on
                <strong class="text-white">dental caries classification</strong>
                using Feature Pyramid Network (FPN) architecture, aiming to
                improve segmentation and classification performance in dental
                imaging.
              </p>
              <p>
                Beyond ML, I've built IoT systems like
                <strong class="text-white">LeakGuard</strong> — an irrigation
                leak detection system — and
                <strong class="text-white">WudhuCycle</strong>, a greywater
                reuse system with Flutter mobile app integration. These projects
                reflect my passion for solving real-world problems through
                technology.
              </p>
            </div>
          </div>

          <!-- Career Objective -->
          <div class="glass-card p-6 sm:p-8">
            <h3
              class="text-xl font-semibold text-white mb-4 flex items-center gap-2"
            >
              <Icon name="mdi:target" class="w-5 h-5 text-accent" />
              Career Objective
            </h3>
            <p class="text-gray-400 leading-relaxed">
              To leverage my multidisciplinary background in ML, mobile, and
              embedded systems to contribute to innovative projects that create
              meaningful impact. I aim to work in a dynamic environment that
              values continuous learning and technical excellence.
            </p>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Education -->
          <div class="glass-card p-6">
            <h3
              class="text-lg font-semibold text-white mb-4 flex items-center gap-2"
            >
              <Icon name="mdi:school-outline" class="w-5 h-5 text-accent" />
              Education
            </h3>
            <div>
              <p class="font-medium text-white">Computer Engineering</p>
              <p class="text-sm text-gray-400 mt-1">Bachelor's Degree</p>
              <p class="text-xs text-gray-500 mt-1 font-mono">
                Focus: AI & Embedded Systems
              </p>
            </div>
          </div>

          <!-- Key Strengths -->
          <div class="glass-card p-6">
            <h3
              class="text-lg font-semibold text-white mb-4 flex items-center gap-2"
            >
              <Icon
                name="mdi:star-four-points-outline"
                class="w-5 h-5 text-accent"
              />
              Key Strengths
            </h3>
            <ul class="space-y-3">
              <li
                v-for="strength in strengths"
                :key="strength.label"
                class="flex items-start gap-3"
              >
                <Icon
                  :name="strength.icon"
                  class="w-4 h-4 text-accent mt-1 shrink-0"
                />
                <div>
                  <p class="text-sm font-medium text-white">
                    {{ strength.label }}
                  </p>
                  <p class="text-xs text-gray-500">{{ strength.desc }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Interests -->
          <div class="glass-card p-6">
            <h3
              class="text-lg font-semibold text-white mb-4 flex items-center gap-2"
            >
              <Icon name="mdi:lightbulb-outline" class="w-5 h-5 text-accent" />
              Interests
            </h3>
            <div class="flex flex-wrap gap-2">
              <TechBadge
                v-for="interest in interests"
                :key="interest"
                variant="accent"
              >
                {{ interest }}
              </TechBadge>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About — Adith",
  meta: [
    {
      name: "description",
      content:
        "Learn about Muhammad Aditya Yufnanda — Computer Engineering graduate specializing in ML, Mobile, and IoT.",
    },
  ],
});

const strengths = [
  {
    label: "Analytical Thinking",
    desc: "Data-driven problem solving",
    icon: "mdi:chart-line",
  },
  {
    label: "Adaptable",
    desc: "Quick to learn new tech stacks",
    icon: "mdi:refresh",
  },
  {
    label: "Fast Learner",
    desc: "Self-motivated growth mindset",
    icon: "mdi:lightning-bolt",
  },
  {
    label: "Team Player",
    desc: "Collaborative & communicative",
    icon: "mdi:account-group-outline",
  },
];

const interests = [
  "Deep Learning",
  "Computer Vision",
  "Mobile Apps",
  "IoT",
  "Sustainability",
  "Open Source",
];
</script>
