<template>
  <div>
    <!-- ==================== HERO ==================== -->
    <section
      id="hero"
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
          <p class="text-accent font-mono text-sm mb-4 animate-fade-in">
            Hello, I'm
          </p>

          <h1
            class="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-up"
          >
            Muhammad Aditya
            <span class="block gradient-text">Yufnanda</span>
          </h1>

          <h2
            class="text-xl sm:text-2xl font-medium text-gray-300 mb-6 animate-fade-up"
            style="animation-delay: 0.1s"
          >
            Fullstack &amp; Machine Learning Engineer
          </h2>

          <p
            class="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed animate-fade-up"
            style="animation-delay: 0.2s"
          >
            Building intelligent systems with AI, Mobile, and IoT technologies.
            Passionate about creating solutions that bridge software and
            hardware.
          </p>

          <div
            class="flex flex-wrap gap-4 animate-fade-up"
            style="animation-delay: 0.3s"
          >
            <a
              href="#projects"
              class="btn-primary"
              @click.prevent="scrollTo('projects')"
            >
              <Icon name="mdi:rocket-launch-outline" class="w-5 h-5" />
              View Projects
            </a>
            <a
              href="#contact"
              class="btn-outline"
              @click.prevent="scrollTo('contact')"
            >
              <Icon name="mdi:email-outline" class="w-5 h-5" />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block"
      >
        <Icon name="mdi:chevron-double-down" class="w-6 h-6 text-gray-600" />
      </div>
    </section>

    <!-- ==================== TECH STACK ==================== -->
    <SectionWrapper
      title="Tech"
      highlight=" Stack"
      subtitle="Technologies and tools I work with."
    >
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ScrollReveal
          v-for="(category, i) in techStack"
          :key="category.name"
          animation="fade-up"
          :delay="i * 100"
        >
          <div
            class="glass-card p-6 hover:border-accent/30 transition-all duration-300 h-full"
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
        </ScrollReveal>
      </div>
    </SectionWrapper>

    <!-- ==================== ABOUT ==================== -->
    <section id="about">
      <SectionWrapper
        title="About"
        highlight=" Me"
        subtitle="A bit about my journey and what drives me."
      >
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Main -->
          <ScrollReveal class="lg:col-span-2 space-y-6" animation="fade-right">
            <div class="glass-card p-6 sm:p-8">
              <h3 class="text-xl font-semibold text-white mb-4">Who I Am</h3>
              <div class="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I'm
                  <strong class="text-white">Muhammad Aditya Yufnanda</strong>,
                  a Computer Engineering graduate with a deep interest in
                  building intelligent systems. My work spans across
                  <span class="text-accent-light">Machine Learning</span>,
                  <span class="text-violet-light">Mobile Development</span>, and
                  <span class="text-emerald-400">IoT Systems</span>.
                </p>
                <p>
                  My ML research focused on
                  <strong class="text-white"
                    >dental caries classification</strong
                  >
                  using Feature Pyramid Network (FPN) architecture, aiming to
                  improve segmentation and classification performance in dental
                  imaging.
                </p>
                <p>
                  Beyond ML, I've built IoT systems like
                  <strong class="text-white">LeakGuard</strong> — an irrigation
                  leak detection system — and
                  <strong class="text-white">WudhuCycle</strong>, a greywater
                  reuse system with Flutter mobile app integration.
                </p>
              </div>
            </div>

            <div class="glass-card p-6 sm:p-8">
              <h3
                class="text-xl font-semibold text-white mb-4 flex items-center gap-2"
              >
                <Icon name="mdi:target" class="w-5 h-5 text-accent" />
                Career Objective
              </h3>
              <p class="text-gray-400 leading-relaxed">
                To leverage my multidisciplinary background in ML, mobile, and
                embedded systems to contribute to innovative projects that
                create meaningful impact.
              </p>
            </div>
          </ScrollReveal>

          <!-- Sidebar -->
          <div class="space-y-6">
            <ScrollReveal animation="fade-left" :delay="100">
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
                    Focus: AI &amp; Embedded Systems
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" :delay="200">
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
                    v-for="s in strengths"
                    :key="s.label"
                    class="flex items-start gap-3"
                  >
                    <Icon
                      :name="s.icon"
                      class="w-4 h-4 text-accent mt-1 shrink-0"
                    />
                    <div>
                      <p class="text-sm font-medium text-white">
                        {{ s.label }}
                      </p>
                      <p class="text-xs text-gray-500">{{ s.desc }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" :delay="300">
              <div class="glass-card p-6">
                <h3
                  class="text-lg font-semibold text-white mb-4 flex items-center gap-2"
                >
                  <Icon
                    name="mdi:lightbulb-outline"
                    class="w-5 h-5 text-accent"
                  />
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
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>
    </section>

    <!-- ==================== PROJECTS ==================== -->
    <section id="projects">
      <SectionWrapper
        title="My"
        highlight=" Projects"
        subtitle="A selection of things I've built and researched."
      >
        <div class="grid gap-6 sm:grid-cols-2">
          <ScrollReveal
            v-for="(project, i) in projects"
            :key="project.title"
            animation="scale"
            :delay="i * 100"
          >
            <ProjectCard
              :title="project.title"
              :description="project.description"
              :tags="project.tags"
              :icon="project.icon"
              :github="project.github"
              :demo="project.demo"
            />
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </section>

    <!-- ==================== EXPERIENCE ==================== -->
    <section id="experience">
      <SectionWrapper
        title="My"
        highlight=" Experience"
        subtitle="Professional journey and technical contributions."
      >
        <div class="relative">
          <div
            class="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-dark-border"
          />

          <div class="space-y-12">
            <ScrollReveal
              v-for="(exp, index) in experiences"
              :key="index"
              animation="fade-up"
              :delay="index * 150"
            >
              <div class="relative pl-12 sm:pl-20">
                <div
                  class="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-dark"
                />

                <div
                  class="glass-card p-6 sm:p-8 hover:border-accent/30 transition-all duration-300"
                >
                  <div
                    class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4"
                  >
                    <div>
                      <h3 class="text-lg font-semibold text-white">
                        {{ exp.role }}
                      </h3>
                      <p class="text-accent-light font-medium">
                        {{ exp.company }}
                      </p>
                    </div>
                    <div
                      class="flex items-center gap-2 text-sm text-gray-500 font-mono shrink-0"
                    >
                      <Icon name="mdi:calendar-outline" class="w-4 h-4" />
                      {{ exp.period }}
                    </div>
                  </div>

                  <p class="text-gray-400 text-sm leading-relaxed mb-4">
                    {{ exp.description }}
                  </p>

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
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>
    </section>

    <!-- ==================== CONTACT ==================== -->
    <section id="contact">
      <SectionWrapper
        title="Get In"
        highlight=" Touch"
        subtitle="Have a project in mind? Let's talk."
      >
        <div class="grid lg:grid-cols-2 gap-12">
          <ScrollReveal animation="fade-right">
            <div class="glass-card p-6 sm:p-8">
              <h3 class="text-lg font-semibold text-white mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>

          <div class="space-y-6">
            <ScrollReveal animation="fade-left" :delay="100">
              <div class="glass-card p-6 sm:p-8">
                <h3 class="text-lg font-semibold text-white mb-6">
                  Contact Info
                </h3>
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
                      <Icon
                        :name="info.icon"
                        class="w-5 h-5 text-accent-light"
                      />
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
            </ScrollReveal>

            <ScrollReveal animation="fade-left" :delay="200">
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
                  I'm currently open to full-time positions, freelance projects,
                  and collaboration opportunities. Feel free to reach out!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Adith — Fullstack & Machine Learning Engineer",
});

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// ─── Data ───────────────────────────────────
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

const projects = [
  {
    title: "Dental Caries Classification using FPN",
    description:
      "Deep learning research project utilizing Feature Pyramid Network architecture for dental caries segmentation and classification. Focused on improving diagnostic accuracy through multi-scale feature extraction.",
    tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "FPN"],
    icon: "mdi:tooth-outline",
    github: "#",
    demo: "#",
  },
  {
    title: "LeakGuard — IoT Irrigation Monitoring",
    description:
      "IoT-based irrigation leak detection system designed to improve water efficiency aligned with SDG 6.4. Utilizes sensor networks for real-time monitoring and alert mechanisms.",
    tags: ["Arduino", "IoT", "Sensors", "Water Efficiency", "SDG 6.4"],
    icon: "mdi:water-alert-outline",
    github: "#",
    demo: "#",
  },
  {
    title: "WudhuCycle — Greywater Reuse System",
    description:
      "Smart greywater reuse system with integrated mobile application built in Flutter. Combines IoT sensing with a user-friendly interface for monitoring water recycling processes.",
    tags: ["Flutter", "Arduino", "IoT", "Mobile App", "Sustainability"],
    icon: "mdi:recycle-variant",
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile App Projects",
    description:
      "Collection of Flutter-based mobile applications showcasing cross-platform development skills. Includes various apps with clean architecture, state management, and API integrations.",
    tags: ["Flutter", "Dart", "REST API", "Firebase", "Mobile"],
    icon: "mdi:cellphone",
    github: "#",
    demo: "#",
  },
];

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
