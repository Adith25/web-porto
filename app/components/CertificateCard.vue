<template>
  <MagicCard
    class="cert-card-container flex flex-col h-full group cursor-pointer !bg-white dark:!bg-[#0a081e]/45 !p-0"
    @click="$emit('select')"
    :title="title"
  >
    <!-- Image / Thumbnail -->
    <div class="cert-thumb">
      <!-- PDF indicator overlay -->
      <div v-if="isPdf" class="pdf-overlay">
        <Icon name="mdi:file-pdf-box" class="w-12 h-12 text-red-400" />
        <span class="text-xs text-gray-300 mt-1 font-mono">PDF</span>
      </div>
      <img
        v-else-if="image"
        :src="image"
        :alt="title"
        class="cert-img"
      />
      <div v-else class="cert-placeholder">
        <Icon name="mdi:certificate-outline" class="w-12 h-12 text-accent/40" />
      </div>

      <!-- Hover shine overlay -->
      <div class="cert-shine" />
    </div>

    <!-- Body -->
    <div class="cert-body">
      <span class="cert-tag">certification</span>

      <h3 class="cert-title">{{ title }}</h3>

      <p v-if="description" class="cert-desc">{{ description }}</p>

      <a
        v-if="credentialUrl"
        :href="credentialUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="cert-link"
        @click.stop
      >
        <Icon name="mdi:link-variant" class="w-3.5 h-3.5" />
        View Credential
      </a>
    </div>
  </MagicCard>
</template>

<script setup lang="ts">
import MagicCard from '~/components/MagicCard.vue';
const props = defineProps<{
  title: string;
  description?: string;
  image?: string;
  credentialUrl?: string;
}>();

defineEmits<{ select: [] }>();

const isPdf = computed(
  () => !!props.image && props.image.toLowerCase().endsWith('.pdf')
);
</script>

<style scoped>
/* ── Card shell ── */
.cert-card-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.cert-card-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.15);
}

/* ── Thumbnail area ── */
.cert-thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #f8fafc;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dark .cert-thumb {
  background: rgba(255, 255, 255, 0.04);
}

.cert-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.cert-card-container:hover .cert-img {
  transform: scale(1.04);
}

.pdf-overlay,
.cert-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* Glassy shine on hover */
.cert-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.cert-card-container:hover .cert-shine {
  opacity: 1;
}

/* ── Body ── */
.cert-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.1rem 1.1rem;
}

.cert-tag {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a78bfa;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 9999px;
  padding: 0.1rem 0.6rem;
  width: fit-content;
}

.cert-title {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s;
}
.dark .cert-title {
  color: #fff;
}
.cert-card-container:hover .cert-title {
  color: #c4b5fd;
}

.cert-desc {
  font-size: 0.78rem;
  color: #64748b;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.dark .cert-desc {
  color: rgba(200, 200, 230, 0.55);
}

.cert-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.72rem;
  font-weight: 500;
  color: rgba(139, 92, 246, 0.8);
  transition: color 0.2s;
  margin-top: 0.25rem;
}
.cert-link:hover {
  color: #a78bfa;
}
</style>
