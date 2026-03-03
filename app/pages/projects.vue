<template>
  <div class="pt-16">
    <SectionWrapper
      title="My"
      highlight=" Projects"
      subtitle="A selection of things I've built and researched."
    >
      <div class="grid gap-6 sm:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :icon="project.icon"
          :github="project.github"
          :demo="project.demo"
        />
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Projects — Adith",
  meta: [
    {
      name: "description",
      content:
        "Projects by Adith — ML research, IoT systems, and mobile applications.",
    },
  ],
});

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
</script>
