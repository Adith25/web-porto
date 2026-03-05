<template>
  <Teleport to="body">
    <Transition
      enter-active-class="modal-enter-active"
      enter-from-class="modal-enter-from"
      enter-to-class="modal-enter-to"
      leave-active-class="modal-leave-active"
      leave-from-class="modal-leave-from"
      leave-to-class="modal-leave-to"
    >
      <div v-if="cert" class="modal-backdrop" @click.self="$emit('close')">
        <div
          class="modal-panel"
          v-motion
          :initial="{ opacity: 0, scale: 0.92, y: 30 }"
          :enter="{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 28 } }"
        >
          <!-- Close -->
          <button class="modal-close" @click="$emit('close')" aria-label="Close">
            <Icon name="mdi:close" class="w-5 h-5" />
          </button>

          <!-- Certificate image -->
          <div class="modal-thumb">
            <div v-if="isPdf" class="modal-pdf">
              <Icon name="mdi:file-pdf-box" class="w-16 h-16 text-red-400" />
              <p class="text-gray-400 text-sm mt-2">PDF Certificate</p>
              <a
                :href="cert.image"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-3 btn-outline text-sm py-1.5 px-4"
              >
                Open PDF
              </a>
            </div>
            <img
              v-else-if="cert.image"
              :src="cert.image"
              :alt="cert.title"
              class="modal-img"
            />
            <div v-else class="modal-pdf">
              <Icon name="mdi:certificate-outline" class="w-16 h-16 text-accent/40" />
            </div>
          </div>

          <!-- Details -->
          <div class="modal-body">
            <span class="cert-tag">certification</span>

            <h2 class="modal-title">{{ cert.title }}</h2>

            <template v-if="cert.description">
              <h4 class="modal-section-label">Description</h4>
              <p class="modal-desc">{{ cert.description }}</p>
            </template>

            <template v-if="cert.credentialUrl">
              <h4 class="modal-section-label">Credential</h4>
              <a
                :href="cert.credentialUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-cred-link"
              >
                <Icon name="mdi:link-variant" class="w-4 h-4" />
                View Credential
              </a>
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  cert: {
    title: string;
    description?: string;
    image?: string;
    credentialUrl?: string;
  } | null;
}>();

const emit = defineEmits<{ close: [] }>();

const isPdf = computed(
  () => !!props.cert?.image && props.cert.image.toLowerCase().endsWith('.pdf')
);

// Close on Escape key
onMounted(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') emit('close');
  };
  window.addEventListener('keydown', handleKey);
  onUnmounted(() => window.removeEventListener('keydown', handleKey));
});
</script>

<style scoped>
/* ── Backdrop ── */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

/* ── Panel ── */
.modal-panel {
  position: relative;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
  background: rgba(10, 8, 30, 0.72);
  backdrop-filter: blur(48px) saturate(1.4);
  -webkit-backdrop-filter: blur(48px) saturate(1.4);
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 1.25rem;
  box-shadow:
    0 0 0 1px rgba(139, 92, 246, 0.12),
    0 32px 80px rgba(0, 0, 0, 0.6);
  scrollbar-width: thin;
  scrollbar-color: rgba(139, 92, 246, 0.3) transparent;
}

/* ── Close button ── */
.modal-close {
  position: sticky;
  top: 0.75rem;
  float: right;
  margin: 0.75rem 0.75rem 0 0;
  padding: 0.4rem;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: rgba(200, 200, 230, 0.7);
  transition: all 0.2s;
  z-index: 10;
}
.modal-close:hover {
  background: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.3);
  color: #fca5a5;
}

/* ── Thumbnail ── */
.modal-thumb {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.modal-pdf {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

/* ── Body ── */
.modal-body {
  padding: 1.25rem 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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

.modal-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.3;
  margin-top: 0.25rem;
}

.modal-section-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(200, 200, 230, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
}

.modal-desc {
  font-size: 0.9rem;
  color: rgba(200, 200, 230, 0.75);
  line-height: 1.65;
}

.modal-cred-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #a78bfa;
  border: 1px solid rgba(139, 92, 246, 0.35);
  border-radius: 0.5rem;
  padding: 0.45rem 0.9rem;
  width: fit-content;
  transition: all 0.2s;
}
.modal-cred-link:hover {
  background: rgba(139, 92, 246, 0.12);
  border-color: rgba(139, 92, 246, 0.6);
  color: #c4b5fd;
}

/* ── Transitions ── */
.modal-enter-active, .modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-to, .modal-leave-from { opacity: 1; }
</style>
