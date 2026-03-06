<template>
  <div>
    <!-- ==================== HERO ==================== -->
    <section id="hero" class="relative min-h-screen flex items-center pt-16 overflow-hidden">

      <!-- Dot-grid background -->
      <div class="hero-grid" aria-hidden="true" />

      <!-- Ambient orbs -->
      <div class="hero-orb hero-orb-1" aria-hidden="true" />
      <div class="hero-orb hero-orb-2" aria-hidden="true" />
      <div class="hero-orb hero-orb-3" aria-hidden="true" />

      <!-- Horizontal glow line -->
      <div class="hero-glow-line" aria-hidden="true" />

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12">

          <!-- Left: Text content -->
          <div class="max-w-2xl">

            <!-- Greeting badge -->
            <div class="hero-badge mb-6">
              <span class="badge-dot" />
              <span class="font-mono text-xs tracking-widest text-accent-light">Hello World!, I'm&nbsp;</span>
              <span class="font-mono text-xs font-semibold text-white">Adith</span>
            </div>

            <!-- Name -->
            <h1 class="hero-name mb-4">
              <span class="block text-white">Muhammad Aditya</span>
              <span class="block gradient-text">Yufnanda</span>
            </h1>

            <!-- Animated role typewriter -->
            <h2 class="hero-role mb-6">
              <span class="role-prefix">I'm a </span>
              <span class="role-typed">{{ displayedRole }}<span class="cursor-blink">|</span></span>
            </h2>

            <!-- Welcome message -->
            <div class="hero-welcome mb-10">
              <p class="welcome-text">Welcome to my personal website</p>
              <div class="welcome-line" />
            </div>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-4 hero-cta">
              <a href="/cv.pdf" target="_blank" class="btn-primary" download>
                <Icon name="mdi:download" class="w-5 h-5" />
                Download CV
              </a>
              <a href="#contact" class="btn-outline" @click.prevent="scrollTo('contact')">
                <Icon name="mdi:email-outline" class="w-5 h-5" />
                Contact Me
              </a>
              <a href="#about" class="btn-ghost" @click.prevent="scrollTo('about')">
                Learn More
                <Icon name="mdi:arrow-right" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 animate-bounce">
        <span class="text-xs font-mono text-gray-600 tracking-widest">SCROLL</span>
        <Icon name="mdi:chevron-double-down" class="w-5 h-5 text-gray-600" />
      </div>
    </section>


    <!-- ==================== ABOUT ==================== -->
    <section id="about">
      <SectionWrapper
        title="About"
        highlight=" Me"
        subtitle="A bit about my journey and what drives me."
      >
        <div class="grid lg:grid-cols-3 gap-8">

          <!-- ── Profile MagicCard (left column on large screens) ── -->
          <ScrollReveal animation="fade-right" class="lg:col-span-1 lg:self-start">
            <MagicCard>
              <div class="profile-card">
                <!-- 3:4 Portrait Photo -->
                <div class="photo-wrapper">
                  <img
                    src="/profile.png"
                    alt="Muhammad Aditya Yufnanda"
                    class="photo-img"
                  />
                  <!-- Gradient overlay for text readability -->
                  <div class="photo-overlay" />

                  <!-- Role badge top-left -->
                  <div class="photo-header">
                    <span class="role-badge">
                      <Icon name="mdi:code-braces" class="w-3.5 h-3.5" />
                      Software Engineer
                    </span>
                  </div>

                  <!-- Meta info bottom overlay -->
                  <div class="photo-footer">
                    <div class="meta-line">
                      <Icon name="mdi:map-marker-outline" class="meta-icon" />
                      <span>Tangerang, Indonesia</span>
                    </div>
                    <div class="meta-line">
                      <Icon name="mdi:email-outline" class="meta-icon" />
                      <span>adityayufnanda25@gmail.com</span>
                    </div>
                  </div>
                </div>

                <!-- Card footer -->
                <div class="card-footer">
                  <div class="status-row">
                    <span class="status-dot" />
                    <span class="status-text">Available for Work</span>
                  </div>
                </div>
              </div>
            </MagicCard>
          </ScrollReveal>

          <!-- ── Right column: text cards + sidebar info ── -->
          <div class="lg:col-span-2 space-y-6">
            <ScrollReveal animation="fade-left">
              <div class="glass-card p-6 sm:p-8">
                <h3 class="text-xl font-semibold text-white mb-4">Who I Am</h3>
                <div class="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    I'm <strong class="text-white">Muhammad Aditya Yufnanda</strong>,
                    a Computer Engineer based in Tangerang, Banten, Indonesia.
                    I'm specializing in <span class="text-violet-light">Web and Mobile Development</span>, <span class="text-violet-400">Machine Learning</span> and <span class="text-violet-400">Embedded Systems</span>.
                  </p>
                  <p>
                    I have hands-on experience across the full development stack — from
                    building scalable web and mobile applications to training ML models
                    and designing IoT systems. I strengthened my cloud skills through
                    <strong class="text-white">Bangkit Academy (Google, Tokopedia, Gojek & Traveloka)</strong>
                    and front-end expertise through
                    <strong class="text-white">Dicoding Indonesia</strong>.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" :delay="100">
              <div class="glass-card p-6 sm:p-8">
                <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Icon name="mdi:target" class="w-5 h-5 text-accent" />
                  Career Objective
                </h3>
                <p class="text-gray-400 leading-relaxed">
                  To apply my multidisciplinary background in Web & Mobile Development,
                  Machine Learning, and Embedded Systems to build impactful,
                  real-world solutions — and grow as an engineer who bridges software
                  intelligence with physical hardware.
                </p>
              </div>
            </ScrollReveal>

            <div class="grid sm:grid-cols-2 gap-6">
              <ScrollReveal animation="fade-left" :delay="150">
                <div class="glass-card p-6">
                  <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Icon name="mdi:school-outline" class="w-5 h-5 text-accent" />
                    Education
                  </h3>
                  <div>
                    <p class="font-medium text-white">Universitas Syiah Kuala</p>
                    <p class="text-sm text-gray-400 mt-1">Bachelor of Engineering (B.E.)</p>
                    <p class="text-xs text-gray-500 mt-1 font-mono">Computer Engineering (2021 – 2025)</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" :delay="200">
                <div class="glass-card p-6">
                  <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Icon name="mdi:lightbulb-outline" class="w-5 h-5 text-accent" />
                    Interests
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <TechBadge v-for="interest in interests" :key="interest" variant="accent">
                      {{ interest }}
                    </TechBadge>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-left" :delay="250">
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Icon name="mdi:star-four-points-outline" class="w-5 h-5 text-accent" />
                  Key Strengths
                </h3>
                <ul class="grid sm:grid-cols-2 gap-3">
                  <li v-for="s in strengths" :key="s.label" class="flex items-start gap-3">
                    <Icon :name="s.icon" class="w-4 h-4 text-accent mt-1 shrink-0" />
                    <div>
                      <p class="text-sm font-medium text-white">{{ s.label }}</p>
                      <p class="text-xs text-gray-500">{{ s.desc }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>
    </section>

    <!-- ==================== TECH STACK ==================== -->
    <section id="techstack">
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

      <!-- Scroll velocity logo strip -->
      <div class="mt-10">
        <ScrollVelocity />
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

    <!-- ==================== CERTIFICATIONS ==================== -->
    <section id="certifications">
      <SectionWrapper
        title="My"
        highlight=" Certifications"
        subtitle="Continuous learning and professional development."
      >
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ScrollReveal
            v-for="(cert, i) in displayedCertificates"
            :key="cert.title + i"
            animation="fade-up"
          >
            <CertificateCard
              :title="cert.title"
              :description="cert.description"
              :image="cert.image"
              :credential-url="cert.credentialUrl"
              @select="selectedCert = cert"
            />
          </ScrollReveal>
        </div>

        <div v-if="certificates.length > 6" class="mt-8 text-center" v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }">
          <button 
            @click="showAllCertificates = !showAllCertificates"
            class="btn-outline inline-flex items-center gap-2"
          >
            {{ showAllCertificates ? 'Show Less' : `Show All (${certificates.length})` }}
            <Icon :name="showAllCertificates ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="w-5 h-5" />
          </button>
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

  <!-- Certificate Modal -->
  <CertificateModal :cert="selectedCert" @close="selectedCert = null" />
</template>

<script setup lang="ts">
useHead({
  title: "Adith — Computer Engineer & Machine Learning Enthusiast",
});

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// ── Typewriter role cycling ──────────────────────────
const roles = [
  'Computer Engineer',
  'Web & Mobile Developer',
  'Machine Learning Enthusiast',
  'Embedded Systems Builder',
];
const displayedRole = ref('');
onMounted(() => {
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  const tick = () => {
    const target = roles[roleIdx] ?? '';
    if (!deleting) {
      displayedRole.value = target.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === target.length) {
        // Pause before deleting
        setTimeout(() => { deleting = true; requestAnimationFrame(tick); }, 1800);
        return;
      }
    } else {
      displayedRole.value = target.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(() => requestAnimationFrame(tick), deleting ? 45 : 80);
  };
  setTimeout(() => requestAnimationFrame(tick), 800);
});

const selectedCert = ref<{
  title: string;
  description?: string;
  image?: string;
  credentialUrl?: string;
} | null>(null);

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
    role: "Machine Learning Path",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    period: "Feb 2024 — Jul 2024",
    description:
      "Intensive Machine Learning program focusing on Machine Learning, backend APIs, and modern deployment architectures.",
    highlights: [
      "Designed and deployed scalable cloud infrastructure on GCP",
      "Developed robust backend services for team capstone projects",
      "Achieved AWS Certified Cloud Practitioner certification",
      "Collaborated in a multidisciplinary team simulating a tech industry environment"
    ],
    tech: ["Google Cloud Platform", "Node.js", "Docker", "REST API", "Cloud Shell"],
  },
  {
    role: "Front-End Web Developer Learning Path",
    company: "Dicoding Indonesia",
    period: "Aug 2023 — Jan 2024",
    description:
      "Comprehensive frontend development training covering fundamental to advanced web technologies and progressive web apps.",
    highlights: [
      "Built responsive and accessible web applications using modern HTML/css and JavaScript",
      "Implemented Progressive Web Apps (PWA) features including service workers and offline caching",
      "Integrated REST APIs asynchronously to display dynamic content",
      "Earned 'Belajar Dasar Pemrograman Web' certification"
    ],
    tech: ["HTML5/CSS3", "JavaScript (ES6+)", "PWA", "Webpack", "Web Accessibility"],
  },
  {
    role: "Web Developer Intern",
    company: "PT. Telkom Indonesia (Persero) Tbk",
    period: "Jul 2022 — Sep 2022",
    description:
      "Assisted the development team in designing and implementing web-based internal tools and dashboards.",
    highlights: [
      "Contributed to the frontend development of internal reporting dashboards",
      "Collaborated with senior engineers to optimize web performance and UI/UX",
      "Participated in code reviews and agile development cadences",
    ],
    tech: ["Web Development", "UI/UX", "JavaScript", "Git"],
  },
];

const showAllCertificates = ref(false);

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Validates technical expertise in designing and deploying scalable systems on Amazon Web Services.",
    image: "",
    credentialUrl: "#",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    description: "Foundational web development course covering HTML, CSS, and modern JavaScript.",
    image: "",
    credentialUrl: "#",
  },
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    description: "Back-end development fundamentals using Node.js and REST APIs on Dicoding Indonesia.",
    image: "",
    credentialUrl: "#",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    description: "Core JavaScript programming including ES6+ features, async programming, and DOM manipulation.",
    image: "",
    credentialUrl: "#",
  },
  {
    title: "Cloud Computing Learning Path",
    description: "Intensive program by Bangkit Academy focused on Google Cloud Platform, backend services, and modern cloud architectures.",
    image: "",
    credentialUrl: "#",
  },
  {
    title: "Front-End Web Developer Learning Path",
    description: "Comprehensive frontend path covering HTML5, CSS3, JavaScript, PWA, and web accessibility.",
    image: "",
    credentialUrl: "#",
  },
  {
    title: "Machine Learning Foundations",
    description: "Introductory machine learning concepts including supervised/unsupervised learning and model evaluation.",
    image: "",
    credentialUrl: "#",
  },
  {
    title: "Flutter Development Bootcamp",
    description: "End-to-end Flutter development including state management, Firebase integration, and publishing to app stores.",
    image: "",
    credentialUrl: "#",
  },
  // Add more certificates here — they will be hidden behind the "Show All" toggle.
];

const displayedCertificates = computed(() => {
  return showAllCertificates.value ? certificates : certificates.slice(0, 6);
});

const contactInfo = [
  {
    label: "Email",
    value: "adityayufnanda25@gmail.com",
    icon: "mdi:email-outline",
    url: "mailto:adityayufnanda25@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "adityayufnanda",
    icon: "mdi:linkedin",
    url: "https://www.linkedin.com/in/adityayufnanda/",
  },
  {
    label: "GitHub",
    value: "Adith25",
    icon: "mdi:github",
    url: "https://github.com/Adith25",
  },
  {
    label: "Instagram",
    value: "@adityayufnanda",
    icon: "mdi:instagram",
    url: "https://instagram.com/adityayufnanda",
  },
];
</script>

<style scoped>
/* ── Profile Card ── */
.profile-card {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
}

/* 3:4 Portrait photo area */
.photo-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  flex-shrink: 0;
}
.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.5s ease;
}
.profile-card:hover .photo-img {
  transform: scale(1.03);
}
/* Dark gradient from top for badge legibility */
.photo-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(10,10,20,0.55) 0%, transparent 30%),
    linear-gradient(to top, rgba(5,5,15,0.88) 0%, rgba(5,5,15,0.4) 35%, transparent 60%);
  pointer-events: none;
}
/* Role badge pinned top-left */
.photo-header {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  align-items: flex-start;
}
/* Meta info pinned bottom of photo */
.photo-footer {
  position: absolute;
  bottom: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.role-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;
  border-radius: 99px;
  background: rgba(15, 15, 25, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(139, 92, 246, 0.4);
  color: #a78bfa;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.03em;
}

/* Card footer below photo */
.card-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 18px 18px;
  background: rgba(10, 10, 18, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* Meta lines inside photo overlay */
.meta-line {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.85);
  font-family: 'Inter', sans-serif;
  text-shadow: 0 1px 4px rgba(0,0,0,0.8);
}
.meta-icon {
  width: 13px;
  height: 13px;
  color: #a78bfa;
  flex-shrink: 0;
}

/* Name */
.profile-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
  text-shadow: 0 1px 6px rgba(0,0,0,0.7);
}

/* Status */
.status-row {
  display: flex;
  align-items: center;
  gap: 7px;
}
.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 8px 2px rgba(52, 211, 153, 0.5);
  animation: pulse-green 2s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes pulse-green {
  0%, 100% { box-shadow: 0 0 8px 2px rgba(52, 211, 153, 0.5); }
  50%       { box-shadow: 0 0 14px 4px rgba(52, 211, 153, 0.8); }
}
.status-text {
  font-size: 0.75rem;
  color: #6ee7b7;
  font-weight: 500;
}

/* Divider */
.profile-divider {
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.07);
  border-radius: 1px;
}


/* ─────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────── */

/* Dot grid */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(139, 92, 246, 0.12) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  pointer-events: none;
}

/* Ambient orbs */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  animation: heroFloat 10s ease-in-out infinite alternate;
}
.hero-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, transparent 70%);
  top: -8%; left: -6%;
  animation-delay: 0s;
}
.hero-orb-2 {
  width: 420px; height: 420px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.14) 0%, transparent 70%);
  bottom: 0; right: -5%;
  animation-delay: -4s;
}
.hero-orb-3 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%);
  top: 55%; left: 40%;
  animation-delay: -7s;
}
@keyframes heroFloat {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(24px, 18px) scale(1.06); }
}

/* Glow line */
.hero-glow-line {
  position: absolute;
  top: 62%;
  left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139,92,246,0.2) 40%, rgba(96,165,250,0.2) 60%, transparent);
  pointer-events: none;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 99px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.25);
  animation: fadeSlideDown 0.6s ease both;
}
.badge-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #7c3aed;
  box-shadow: 0 0 8px 2px rgba(124,58,237,0.6);
  animation: pulse-badge 2s ease-in-out infinite;
}
@keyframes pulse-badge {
  0%,100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.6; transform: scale(1.3); }
}

/* Name */
.hero-name {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-family: 'Inter', sans-serif;
  animation: fadeSlideUp 0.7s 0.1s ease both;
}

/* Role typewriter */
.hero-role {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 500;
  color: #cbd5e1;
  animation: fadeSlideUp 0.7s 0.25s ease both;
}
.role-prefix { color: #64748b; }
.role-typed  { color: #a78bfa; font-weight: 600; }
.cursor-blink {
  color: #7c3aed;
  animation: blink 0.75s step-end infinite;
}
@keyframes blink {
  0%,100% { opacity: 1; }
  50%      { opacity: 0; }
}

/* Description */
.hero-desc { animation: fadeSlideUp 0.7s 0.35s ease both; }

/* CTAs */
.hero-cta { animation: fadeSlideUp 0.7s 0.5s ease both; }

/* Ghost button */
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #94a3b8;
  transition: color 0.2s ease;
}
.btn-ghost:hover { color: #ffffff; }

/* Shared entrance animations */
@keyframes fadeSlideDown {
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Floating code card ── */
.hero-card-wrap {
  position: relative;
  animation: fadeSlideUp 0.9s 0.4s ease both;
}
.hero-float-card {
  background: rgba(12, 12, 22, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04);
  min-width: 300px;
  animation: cardPulse 6s ease-in-out infinite alternate;
}
@keyframes cardPulse {
  from { box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 30px rgba(124,58,237,0.06); }
  to   { box-shadow: 0 30px 70px rgba(0,0,0,0.5), 0 0 50px rgba(124,58,237,0.14); }
}

.hfc-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.hfc-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
}
.hfc-dot-red    { background: #ff5f57; }
.hfc-dot-yellow { background: #febc2e; }
.hfc-dot-green  { background: #28c840; }
.hfc-filename {
  margin-left: 8px;
  font-size: 0.72rem;
  font-family: monospace;
  color: #64748b;
}

.hfc-body { padding: 18px 20px; color: #cbd5e1; }
.hfc-kw   { color: #c084fc; }  /* purple — keyword */
.hfc-var  { color: #60a5fa; }  /* blue   — variable */
.hfc-key  { color: #f9a8d4; }  /* pink   — key */
.hfc-str  { color: #86efac; }  /* green  — string */
.hfc-bool { color: #fbbf24; }  /* amber  — boolean */

/* Status badge below card */
.hfc-status-badge {
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 99px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  font-size: 0.75rem;
  color: #6ee7b7;
  font-weight: 500;
}
.hfc-status-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 8px 2px rgba(52,211,153,0.5);
  animation: pulse-green 2s ease-in-out infinite;
}
/* Welcome message */
.hero-welcome {
  animation: fadeSlideUp 0.7s 0.35s ease both;
}
.welcome-text {
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  font-weight: 500;
  background: linear-gradient(90deg, #94a3b8 0%, #c4b5fd 50%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.01em;
  margin-bottom: 12px;
}
.welcome-line {
  height: 2px;
  width: 48px;
  border-radius: 99px;
  background: linear-gradient(90deg, #7c3aed, #60a5fa);
  position: relative;
  overflow: hidden;
}
.welcome-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: shimmer 2s ease-in-out infinite;
}
@keyframes shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}

</style>
