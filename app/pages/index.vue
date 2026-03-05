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
          <p 
            class="text-accent font-mono text-sm mb-4"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } }"
          >
            Hello, I'm
          </p>

          <h1
            class="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 100 } }"
          >
            Muhammad Aditya
            <span class="block gradient-text">Yufnanda</span>
          </h1>

          <h2
            class="text-xl sm:text-2xl font-medium text-gray-300 mb-6"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 200 } }"
          >
            Software Developer &amp; Machine Learning Engineer
          </h2>

          <p
            class="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 300 } }"
          >
            Building intelligent systems with AI, Mobile, and IoT technologies.
            Passionate about creating solutions that bridge software and
            hardware.
          </p>

          <div
            class="flex flex-wrap gap-4"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 400 } }"
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
                  I'm <strong class="text-white">Muhammad Aditya Yufnanda</strong>,
                  a <span class="text-accent-light">Software Engineer</span> based in Surabaya, Indonesia. 
                  My expertise spans across scalable <span class="text-violet-light">Web Development</span> and <span class="text-emerald-400">Cloud Computing</span> architectures.
                </p>
                <p>
                  I have hands-on experience utilizing modern technology stacks and a solid foundation in cloud infrastructure. 
                  Recently, I expanded my skills through intensive programs at 
                  <strong class="text-white">Bangkit Academy (Cloud Computing)</strong> and 
                  <strong class="text-white">Dicoding Indonesia (Front-End Web)</strong>.
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
                  <p class="font-medium text-white">Universitas Trunojoyo Madura</p>
                  <p class="text-sm text-gray-400 mt-1">Bachelor of Engineering (B.E.)</p>
                  <p class="text-xs text-gray-500 mt-1 font-mono">
                    Computer Engineering (2020 - 2024)
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
  title: "Adith — Software Developer & Machine Learning Engineer",
});

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

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
    role: "Cloud Computing Learning Path",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    period: "Feb 2024 — Jul 2024",
    description:
      "Intensive cloud computing program focusing on Google Cloud Platform, backend APIs, and modern deployment architectures.",
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
