<template>
  <div>
    <!-- ==================== HERO ==================== -->
    <section id="hero" class="relative min-h-[100vh] flex items-center justify-center pt-16 overflow-hidden bg-[#f8fafc] dark:bg-[#0a0a0f]">
      
      <!-- Subtle Grid -->
      <div class="hero-grid opacity-[0.2] dark:opacity-[0.3]" />
      
      <!-- Ambient orbs (Subtle background) -->
      <div class="hero-orb hero-orb-1 opacity-60" />
      <div class="hero-orb hero-orb-2 opacity-40" />
      
      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          <!-- Left side: Content (Split layout restored) -->
          <div class="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
            
            <!-- Headline: Stacked & Strong -->
            <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] flex flex-col">
              <span class="text-slate-900 dark:text-white">Muhammad</span>
              <span class="text-slate-900 dark:text-white">Aditya</span>
              <span class="bg-gradient-to-r from-accent to-violet-light bg-clip-text text-transparent">Yufnanda</span>
            </h1>

            <!-- Separator -->
            <div class="max-w-md w-full h-px bg-slate-200 dark:bg-slate-800/80 mb-6" />

            <!-- Subtitle: Minimalist, Elegant & Animated -->
            <div class="text-xs md:text-sm text-slate-500/80 dark:text-slate-400/70 mb-10 max-w-md leading-relaxed font-mono tracking-wide h-[4.5rem] lg:h-auto">
              <UiTypingEffect 
                text="Software Engineer specializing in mobile application development and intelligent systems, focused on building scalable and impactful digital solutions"
                :speed="30"
                :delay="800"
              />
            </div>

            <!-- Buttons: Redesigned CTAs -->
            <div class="flex flex-row flex-wrap justify-center lg:justify-start gap-4 items-center">
              <NuxtLink :to="cvUrl || '/resume'" target="_blank">
                <UiInteractiveHoverButton variant="outline" hoverText="Click to Download">
                  <Icon name="mdi:download-outline" class="w-4 h-4" />
                  <span>Download CV</span>
                </UiInteractiveHoverButton>
              </NuxtLink>
              <a href="#contact" class="h-[42px] px-6 flex items-center justify-center gap-2 bg-slate-900 text-white rounded-full font-semibold text-sm shadow-lg shadow-black/20 hover:shadow-black/40 hover:-translate-y-0.5 transition-all" @click.prevent="scrollTo('contact')">
                <Icon name="mdi:email-outline" class="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>

          <!-- Right side: Profile Card -->
          <div class="relative w-full max-w-xs group">
            <!-- Floating animation wrapper -->
            <div class="animate-float-slow will-change-transform">
              <!-- Glow background effect - violet/purple on hover -->
              <div class="absolute -inset-4 bg-gradient-to-br from-violet/20 to-violet-light/10 blur-3xl rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
              
              <div class="relative z-10">
                <!-- Profile Card Container -->
                <div class="overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <!-- Image wrapper with 2:3 aspect ratio -->
                  <div class="relative overflow-hidden aspect-[2/3]">
                    <!-- Profile image -->
                    <img
                      src="/hero.png"
                      alt="Muhammad Aditya Yufnanda"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <!-- Transparent top half with gradient separator -->
                    <div class="absolute inset-0">
                      <!-- Top half - transparent -->
                      <div class="absolute top-0 left-0 right-0 h-1/2 bg-transparent" />
                      
                      <!-- Bottom half dark gradient + violet glow on hover -->
                      <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-violet/0 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ==================== ABOUT ==================== -->
    <section id="about">
      <SectionWrapper
        title="About"
        highlight=" Me"
        subtitle="A bit about my journey and what drives me."
        :centered="true"
        :hideLine="true"
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
              </div>
            </MagicCard>
          </ScrollReveal>

          <!-- ── Right column: dynamic About Cards ── -->
          <div class="lg:col-span-2 space-y-6">
            <template v-if="aboutCards.length > 0">
              <ScrollReveal
                v-for="(card, i) in aboutCards"
                :key="card.id"
                animation="fade-left"
                :delay="i * 50"
              >
                <div class="glass-card p-6 sm:p-8">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Icon v-if="card.icon" :name="card.icon" class="w-5 h-5 text-accent" />
                    {{ card.title }}
                  </h3>
                  <div class="space-y-4 leading-relaxed whitespace-pre-line" :class="card.textColor">
                    <span v-html="card.content"></span>
                  </div>
                </div>
              </ScrollReveal>
            </template>
            <template v-else>
              <ScrollReveal animation="fade-left">
                <div class="glass-card p-6 sm:p-8">
                  <p class="text-gray-500 italic">About Me information is empty.</p>
                </div>
              </ScrollReveal>
            </template>
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
        :centered="true"
        :hideLine="true"
      >
        <div class="space-y-4">
          <ScrollReveal
            v-for="(category, i) in techStack"
            :key="category.name"
            animation="fade-up"
            :delay="i * 60"
          >
            <div class="flex items-start sm:items-center gap-4 py-2 group">
              <!-- Category label -->
              <div class="flex items-center w-28 shrink-0">
                <span class="text-xs font-semibold uppercase tracking-widest" :class="category.labelClass">{{ category.name }}</span>
              </div>

              <!-- Tech pills row -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in category.items"
                  :key="tech"
                  class="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-accent/40 dark:hover:border-accent/40 hover:text-gray-900 dark:hover:text-white hover:bg-accent/10 dark:hover:bg-accent/10 transition-all duration-200 shadow-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <!-- Scroll velocity logo strip -->
        <div class="mt-8">
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
        :centered="true"
        :hideLine="true"
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
        :centered="true"
        :hideLine="true"
      >
        <div class="relative" ref="experienceSectionRef">
          <!-- Background vertical line -->
          <div class="absolute left-32 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/5" />
          <!-- Animated progress line -->
          <div
            ref="progressLineRef"
            class="absolute left-32 top-0 w-px bg-accent/60 origin-top transition-[height] duration-100 ease-linear"
            :style="{ height: `${experienceProgress * 100}%` }"
          />

          <div class="space-y-2">
            <ScrollReveal
              v-for="(exp, index) in experiences"
              :key="index"
              animation="fade-up"
              :delay="index * 60"
            >
              <div class="relative flex items-center gap-4 group">
                <!-- Date label (left side) -->
                <div class="w-32 shrink-0 text-right pr-4">
                  <span class="text-xs text-gray-500 dark:text-gray-400 font-mono leading-tight block">{{ (exp.period.split(' · ')[0] ?? '').split(' - ')[0] ?? '' }}</span>
                  <span class="text-[11px] text-gray-400 dark:text-gray-600 font-mono">{{ (exp.period.split(' · ')[0] ?? '').split(' - ')[1] ?? '' }}</span>
                </div>

                <!-- Animated dot on timeline -->
                <div class="absolute left-[8rem] -translate-x-1/2 z-10 flex">
                  <div
                    class="w-5 h-5 rounded-full bg-white/90 dark:bg-dark/90 border border-accent/40 flex items-center justify-center experience-dot transition-all duration-400"
                    :class="{ 'border-accent shadow-[0_0_10px_rgba(124,58,237,0.5)]': activeDots.includes(index) }"
                  >
                    <div
                      class="w-[55%] h-[55%] rounded-full bg-gradient-to-tr from-accent to-accent-light"
                      :class="activeDots.includes(index) ? 'opacity-100 scale-100 animate-pulse' : 'opacity-0 scale-0'"
                      style="transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);"
                    />
                  </div>
                </div>

                <!-- Content row via MagicCard -->
                <div class="flex-1">
                  <MagicCard :showBorder="false" class="!bg-transparent border border-transparent hover:border-accent/15 hover:bg-gray-50 dark:hover:bg-white/[0.025] transition-all duration-300">
                    <div class="flex items-center gap-4 pl-10 py-3 rounded-xl">
                      <!-- Logo -->
                      <div class="shrink-0 w-10 h-10 flex items-center justify-center">
                        <img
                          v-if="exp.logo"
                          :src="exp.logo"
                          :alt="exp.company"
                          class="w-full h-full object-contain"
                        />
                        <Icon v-else name="mdi:office-building-outline" class="w-6 h-6 text-gray-500" />
                      </div>

                      <!-- Text -->
                      <div class="flex-1 min-w-0">
                        <div class="flex flex-col gap-0.5">
                          <span class="font-semibold text-gray-900 dark:text-white text-base leading-tight">{{ exp.role }}</span>
                          <span class="text-accent-dark/80 dark:text-accent-light/70 text-sm font-medium">
                            {{ exp.company }}<template v-if="exp.position"> &middot; {{ exp.position }}</template>
                          </span>
                        </div>
                        <div v-if="exp.description" class="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                          {{ exp.description }}
                        </div>
                      </div>
                    </div>
                  </MagicCard>
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
        centered
        hideLine
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
              :pdf-url="cert.pdfUrl"
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
        class="!pt-20 !pb-16"
        centered
        hideLine
      >
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
          <!-- Left Side: Contact Info -->
          <ScrollReveal animation="fade-right">
            <div class="space-y-8">
              <div>
                <h3 class="text-lg font-semibold text-white mb-1">Contact Info</h3>
                <p class="text-gray-500 text-[13px]">Find me across the digital landscape.</p>
              </div>
              
              <div class="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                <div
                  v-for="info in contactInfo"
                  :key="info.label"
                  class="space-y-1 group"
                >
                  <div class="flex items-center gap-1.5 text-gray-500 group-hover:text-[#6366F1] transition-colors">
                    <Icon :name="info.icon" class="w-4 h-4" />
                    <span class="text-[10px] uppercase tracking-widest font-bold">{{ info.label }}</span>
                  </div>
                  <a
                    :href="info.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block text-gray-400 hover:text-white transition-colors text-[13px] truncate"
                  >
                    {{ info.value }}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Right Side: Form -->
          <ScrollReveal animation="fade-left" :delay="100">
            <div class="space-y-6 text-center">
              <div>
                <h3 class="text-lg font-semibold text-white mb-1">Send a Message</h3>
                <p class="text-gray-500 text-[13px]">Reach out directly via the form below.</p>
              </div>
              <div class="border border-[#1F2937] rounded-xl p-[1px] text-left">
                <div class="bg-transparent p-5 sm:p-7">
                  <ContactForm />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <!-- GitHub Contribution Calendar -->
        <ScrollReveal animation="fade-up" :delay="300">
          <div class="mt-16 w-full overflow-hidden relative">
            <GitHubCalendar 
              username="Adith25" 
              avatar-url="https://github.com/Adith25.png"
            />
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </section>
  </div>

  <!-- Certificate Modal -->
  <CertificateModal :cert="selectedCert" @close="selectedCert = null" />
</template>

<script setup lang="ts">
useHead({
  title: "Adith ΓÇö Computer Engineer & Machine Learning Enthusiast",
});

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

onMounted(() => {
  if (typeof window !== 'undefined' && window.history) {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }
});

// ΓöÇΓöÇ Experience timeline scroll progress ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const experienceSectionRef = ref<HTMLElement | null>(null);
const progressLineRef = ref<HTMLElement | null>(null);
const experienceProgress = ref(0);
const activeDots = ref<number[]>([]);

const calculateExperienceProgress = () => {
  if (!experienceSectionRef.value || !progressLineRef.value) return;
  const rect = experienceSectionRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const progress = (windowHeight * 0.6 - rect.top) / rect.height;
  experienceProgress.value = Math.max(0, Math.min(1, progress));

  const lineBottomY = progressLineRef.value.getBoundingClientRect().bottom;
  const dots = experienceSectionRef.value.querySelectorAll('.experience-dot');
  const newActive: number[] = [];
  Array.from(dots).forEach((dot, i) => {
    const dr = dot.getBoundingClientRect();
    if (dr.top + dr.height / 2 <= lineBottomY) newActive.push(i);
  });
  activeDots.value = newActive;
};

onMounted(() => {
  window.addEventListener('scroll', calculateExperienceProgress, { passive: true });
  calculateExperienceProgress();
});

onUnmounted(() => {
  window.removeEventListener('scroll', calculateExperienceProgress);
});

const selectedCert = ref<{
  title: string;
  description?: string;
  image?: string;
  credentialUrl?: string;
} | null>(null);

// ΓöÇΓöÇΓöÇ Data ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const techStack = ref<any[]>([]);

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

const projects = ref<any[]>([]);
const experiences = ref<any[]>([]);
const aboutCards = ref<any[]>([]);
const cvUrl = ref("");

const config = useRuntimeConfig();
const API_BASE = config.public.apiBase;

const fetchExperiences = async () => {
  try {
    const data = await $fetch<any[]>(`${API_BASE}/experiences`);
    experiences.value = data;
  } catch (error) {
    console.error('Failed to fetch experiences:', error);
  }
};

const fetchAboutCards = async () => {
  try {
    const data = await $fetch<any[]>(`${API_BASE}/about-cards`);
    aboutCards.value = data;
  } catch (error) {
    console.error('Failed to fetch about cards:', error);
  }
};

const fetchProjects = async () => {
  try {
    const data = await $fetch<any[]>(`${API_BASE}/projects`);
    projects.value = data.map(p => ({
      ...p,
      tags: p.techStack ? p.techStack.split(',').map((t: string) => t.trim()).filter(Boolean) : [],
      github: p.githubUrl,
      demo: p.demoUrl
    }));
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }
};

const fetchSkills = async () => {
  try {
    const data = await $fetch<any[]>(`${API_BASE}/skills`);
    techStack.value = data.map(s => {
        let bgClass = "bg-accent/10";
        let iconClass = "text-accent-light";
        
        switch(s.category.toLowerCase()) {
            case 'frontend': bgClass = "bg-sky-500/10"; iconClass = "text-sky-400"; break;
            case 'backend': bgClass = "bg-emerald-500/10"; iconClass = "text-emerald-400"; break;
            case 'design': bgClass = "bg-pink-500/10"; iconClass = "text-pink-400"; break;
            case 'tools': bgClass = "bg-accent/10"; iconClass = "text-accent-light"; break;
            case 'ml': bgClass = "bg-violet-500/10"; iconClass = "text-violet-400"; break;
            case 'embedded': bgClass = "bg-amber-500/10"; iconClass = "text-amber-400"; break;
        }

        return {
            name: s.category,
            icon: s.icon || 'mdi:code-tags',
            bgClass,
            iconClass,
            labelClass: iconClass,
            items: s.items ? s.items.split(',').map((t: string) => t.trim()).filter(Boolean) : []
        };
    });
  } catch (error) {
    console.error('Failed to fetch skills:', error);
  }
};

const fetchCertificates = async () => {
  try {
    const data = await $fetch<any[]>(`${API_BASE}/certificates`);
    certificates.value = data.map(c => ({
      ...c,
      image: c.fileUrl ? `${API_BASE}${c.fileUrl}` : '',
      pdfUrl: c.pdfUrl ? `${API_BASE}${c.pdfUrl}` : ''
    }));
  } catch (error) {
    console.error('Failed to fetch certificates:', error);
  }
};

onMounted(() => {
  fetchAboutCards();
  fetchExperiences();
  fetchProjects();
  fetchSkills();
  fetchCertificates();
  
  // Fetch settings for CV
  $fetch<any>(`${API_BASE}/settings`).then(settings => {
    if (settings.cvUrl) {
      cvUrl.value = `${API_BASE}${settings.cvUrl}`;
    }
  }).catch(console.error);
});

const showAllCertificates = ref(false);
const certificates = ref<any[]>([]);

const displayedCertificates = computed(() => {
  return showAllCertificates.value ? certificates.value : certificates.value.slice(0, 6);
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
/* ΓöÇΓöÇ Profile Card ΓöÇΓöÇ */
.profile-card {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
}

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
.photo-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(10,10,20,0.55) 0%, transparent 30%),
    linear-gradient(to top, rgba(5,5,15,0.88) 0%, rgba(5,5,15,0.4) 35%, transparent 60%);
  pointer-events: none;
}
.photo-header {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  align-items: flex-start;
}
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

/* ΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓöö
   HERO SECTION
ΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓööΓöö */

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  pointer-events: none;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  animation: heroFloat 10s ease-in-out infinite alternate;
}
.hero-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
  top: -8%; left: -6%;
  animation-delay: 0s;
}
.hero-orb-2 {
  width: 420px; height: 420px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
  bottom: 10%; right: -5%;
  animation-delay: -4s;
}
@keyframes heroFloat {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(24px, 18px) scale(1.06); }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 99px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
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

@keyframes fadeSlideDown {
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Floating animation for profile card */
.animate-float-slow {
  animation: floatSlow 8s ease-in-out infinite;
}
</style>
