<template>
  <div class="admin-page">
    <!-- Animated Gradient Background -->
    <div class="animated-bg">
      <div class="blob blob-1" />
      <div class="blob blob-2" />
      <div class="blob blob-3" />
      <div class="blob blob-4" />
    </div>

    <!-- ── LOGGED OUT: Login Card ── -->
    <div
      v-if="!isLoggedIn"
      class="glass-wrapper"
      v-motion
      :initial="{ opacity: 0, scale: 0.95, y: 40 }"
      :enter="{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } }"
    >
      <div class="text-center mb-8" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }">
        <NuxtLink to="/" class="inline-block group">
          <span class="logo-text group-hover:tracking-widest transition-all duration-300">Adith</span>
        </NuxtLink>
        <p class="subtitle">Welcome Back Admin 🤩</p>
      </div>

      <form class="space-y-5" @submit.prevent="handleLogin">
        <div class="field-group" v-motion :initial="{ opacity: 0, x: -20 }" :enter="{ opacity: 1, x: 0, transition: { delay: 200 } }">
          <label for="admin-email" class="field-label">Email</label>
          <input id="admin-email" v-model="form.email" type="email" required autocomplete="email" placeholder="you@example.com" class="glass-input" />
        </div>

        <div class="field-group" v-motion :initial="{ opacity: 0, x: -20 }" :enter="{ opacity: 1, x: 0, transition: { delay: 300 } }">
          <label for="admin-password" class="field-label">Password</label>
          <div class="relative">
            <input id="admin-password" v-model="form.password" :type="showPassword ? 'text' : 'password'" required autocomplete="current-password" placeholder="••••••••" class="glass-input pr-10" />
            <button type="button" class="eye-btn" @click="showPassword = !showPassword">
              <Icon :name="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'" class="w-4 h-4" />
            </button>
          </div>
        </div>

        <Transition enter-active-class="transition-all duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0">
          <p v-if="error" class="error-msg">{{ error }}</p>
        </Transition>

        <button type="submit" class="submit-btn" :disabled="isLoading" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }">
          <Icon v-if="isLoading" name="mdi:loading" class="w-4 h-4 animate-spin" />
          {{ isLoading ? 'Signing in...' : 'Sign In' }}
        </button>
      </form>

      <div class="text-center mt-6" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 500 } }">
        <NuxtLink to="/" class="back-link">← Back to portfolio</NuxtLink>
      </div>
    </div>

    <!-- ── LOGGED IN: Dashboard ── -->
    <div v-else class="dashboard-wrapper">
      <!-- Header -->
      <div class="dash-header" v-motion :initial="{ opacity: 0, y: -20 }" :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } }">
        <div>
          <span class="logo-text text-lg">Adith</span>
          <span class="text-gray-500 text-xs font-mono ml-2">/ admin</span>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink to="/" target="_blank" class="dash-link">
            <Icon name="mdi:open-in-new" class="w-4 h-4" /> View Site
          </NuxtLink>
          <button class="dash-logout" @click="isLoggedIn = false">
            <Icon name="mdi:logout" class="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="dash-body">
        <!-- Add Certificate Card -->
        <section class="dash-card" v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 240, damping: 22, delay: 100 } }">
          <h2 class="dash-section-title">
            <Icon name="mdi:certificate-outline" class="w-5 h-5 text-accent" />
            Add New Certificate
          </h2>

          <form class="cert-form" @submit.prevent="addCertificate">
            <!-- Image/PDF Upload -->
            <div class="field-group">
              <label class="field-label">Certificate Image / PDF</label>
              <div
                class="upload-zone"
                :class="{ 'upload-zone--active': isDragging }"
                @dragover.prevent="isDragging = true"
                @dragleave="isDragging = false"
                @drop.prevent="handleDrop"
                @click="fileInput?.click()"
              >
                <input ref="fileInput" type="file" accept="image/*,.pdf" class="hidden" @change="handleFileChange" />
                <div v-if="certForm.previewUrl" class="upload-preview">
                  <img v-if="!certForm.isPdf" :src="certForm.previewUrl" alt="Preview" class="upload-preview-img" />
                  <div v-else class="upload-pdf-preview">
                    <Icon name="mdi:file-pdf-box" class="w-10 h-10 text-red-400" />
                    <span class="text-sm text-gray-300 mt-1">{{ certForm.fileName }}</span>
                  </div>
                  <button type="button" class="upload-remove" @click.stop="clearFile">
                    <Icon name="mdi:close" class="w-4 h-4" />
                  </button>
                </div>
                <div v-else class="upload-empty">
                  <Icon name="mdi:cloud-upload-outline" class="w-10 h-10 text-gray-500" />
                  <p class="text-sm text-gray-400 mt-2">Click or drag & drop here</p>
                  <p class="text-xs text-gray-600">JPG, PNG, PDF accepted</p>
                </div>
              </div>
            </div>

            <!-- Title -->
            <div class="field-group">
              <label class="field-label">Certificate Title *</label>
              <input v-model="certForm.title" type="text" required placeholder="e.g. AWS Certified Cloud Practitioner" class="glass-input" />
            </div>

            <!-- Description -->
            <div class="field-group">
              <label class="field-label">Description</label>
              <textarea v-model="certForm.description" rows="3" placeholder="Short description of what this certificate covers..." class="glass-input resize-none" />
            </div>

            <!-- Credential Link -->
            <div class="field-group">
              <label class="field-label">Credential URL</label>
              <input v-model="certForm.credentialUrl" type="url" placeholder="https://..." class="glass-input" />
            </div>

            <button type="submit" class="submit-btn">
              <Icon name="mdi:plus" class="w-4 h-4" />
              Add Certificate
            </button>
          </form>
        </section>

        <!-- Certificate List -->
        <section class="dash-card" v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 240, damping: 22, delay: 200 } }">
          <h2 class="dash-section-title">
            <Icon name="mdi:view-grid-outline" class="w-5 h-5 text-accent" />
            Managed Certificates
            <span class="dash-count">{{ managedCerts.length }}</span>
          </h2>

          <p v-if="managedCerts.length === 0" class="text-gray-500 text-sm py-6 text-center">
            No certificates added yet.
          </p>

          <div class="cert-list">
            <div v-for="(cert, i) in managedCerts" :key="i" class="cert-list-item">
              <div class="cert-list-thumb">
                <img v-if="cert.previewUrl && !cert.isPdf" :src="cert.previewUrl" alt="" class="cert-list-img" />
                <Icon v-else-if="cert.isPdf" name="mdi:file-pdf-box" class="w-6 h-6 text-red-400" />
                <Icon v-else name="mdi:certificate-outline" class="w-6 h-6 text-accent/40" />
              </div>
              <div class="cert-list-info">
                <p class="font-medium text-white text-sm">{{ cert.title }}</p>
                <p class="text-xs text-gray-500 truncate">{{ cert.description || 'No description' }}</p>
              </div>
              <button class="cert-list-delete" @click="managedCerts.splice(i, 1)" title="Delete">
                <Icon name="mdi:trash-can-outline" class="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Admin — Adith', meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

// ── Auth ──
const form = reactive({ email: '', password: '' })
const showPassword = ref(false)
const isLoading = ref(false)
const error = ref('')
const isLoggedIn = ref(false)

const handleLogin = async () => {
  error.value = ''
  isLoading.value = true
  await new Promise((r) => setTimeout(r, 1200))
  if (form.email === 'admin@example.com' && form.password === 'admin') {
    isLoggedIn.value = true
  } else {
    error.value = 'Invalid credentials. Please try again.'
  }
  isLoading.value = false
}

// ── Certificate Form ──
const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)

const certForm = reactive({
  title: '',
  description: '',
  credentialUrl: '',
  previewUrl: '',
  fileName: '',
  isPdf: false,
  file: null as File | null,
})

const clearFile = () => {
  certForm.previewUrl = ''
  certForm.fileName = ''
  certForm.isPdf = false
  certForm.file = null
  if (fileInput.value) fileInput.value.value = ''
}

const processFile = (file: File) => {
  certForm.file = file
  certForm.fileName = file.name
  certForm.isPdf = file.type === 'application/pdf'
  if (!certForm.isPdf) {
    const reader = new FileReader()
    reader.onload = (e) => { certForm.previewUrl = e.target?.result as string }
    reader.readAsDataURL(file)
  } else {
    certForm.previewUrl = URL.createObjectURL(file)
  }
}

const handleFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files?.[0]) processFile(input.files[0])
}

const handleDrop = (e: DragEvent) => {
  isDragging.value = false
  const file = e.dataTransfer?.files[0]
  if (file) processFile(file)
}

// ── Managed list ──
const managedCerts = ref<Array<{
  title: string;
  description: string;
  credentialUrl: string;
  previewUrl: string;
  isPdf: boolean;
}>>([])

const addCertificate = () => {
  if (!certForm.title.trim()) return
  managedCerts.value.unshift({
    title: certForm.title,
    description: certForm.description,
    credentialUrl: certForm.credentialUrl,
    previewUrl: certForm.previewUrl,
    isPdf: certForm.isPdf,
  })
  Object.assign(certForm, { title: '', description: '', credentialUrl: '', previewUrl: '', fileName: '', isPdf: false, file: null })
  if (fileInput.value) fileInput.value.value = ''
}
</script>

<style scoped>
/* ── Page shell ── */
.admin-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 1.5rem;
}

/* ── Animated blobs ── */
.animated-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: #07071a;
  animation: bgRotate 60s linear infinite;
  transform-origin: center center;
}
@keyframes bgRotate { from { filter: hue-rotate(0deg); } to { filter: hue-rotate(30deg); } }

.blob { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.55; top: 50%; left: 50%; }
.blob-1 { width: 560px; height: 560px; margin: -280px 0 0 -280px; background: radial-gradient(circle, #7c3aed, #4f46e5); animation: orbit1 18s linear infinite; }
.blob-2 { width: 440px; height: 440px; margin: -220px 0 0 -220px; background: radial-gradient(circle, #06b6d4, #3b82f6); animation: orbit2 14s linear infinite; }
.blob-3 { width: 320px; height: 320px; margin: -160px 0 0 -160px; background: radial-gradient(circle, #ec4899, #a855f7); animation: orbit3 10s linear infinite; }
.blob-4 { width: 260px; height: 260px; margin: -130px 0 0 -130px; background: radial-gradient(circle, #10b981, #14b8a6); animation: orbit4 22s linear infinite; }

@keyframes orbit1 { 0% { transform: translate(-38vw,-28vh) scale(1); } 25% { transform: translate(35vw,-22vh) scale(1.1); } 50% { transform: translate(32vw,30vh) scale(0.95); } 75% { transform: translate(-32vw,25vh) scale(1.05); } 100% { transform: translate(-38vw,-28vh) scale(1); } }
@keyframes orbit2 { 0% { transform: translate(32vw,26vh) scale(1); } 25% { transform: translate(-28vw,22vh) scale(1.08); } 50% { transform: translate(-30vw,-24vh) scale(0.92); } 75% { transform: translate(28vw,-20vh) scale(1.04); } 100% { transform: translate(32vw,26vh) scale(1); } }
@keyframes orbit3 { 0% { transform: translate(18vw,-32vh) scale(1); } 25% { transform: translate(30vw,18vh) scale(1.12); } 50% { transform: translate(-20vw,28vh) scale(0.9); } 75% { transform: translate(-28vw,-18vh) scale(1.06); } 100% { transform: translate(18vw,-32vh) scale(1); } }
@keyframes orbit4 { 0% { transform: translate(-20vw,18vh) scale(1); } 25% { transform: translate(14vw,22vh) scale(1.1); } 50% { transform: translate(22vw,-16vh) scale(0.95); } 75% { transform: translate(-16vw,-22vh) scale(1.05); } 100% { transform: translate(-20vw,18vh) scale(1); } }

/* ── Login Glass Card ── */
.glass-wrapper {
  position: relative; z-index: 10; width: 100%; max-width: 400px;
  background: rgba(10,8,30,0.45); backdrop-filter: blur(64px) saturate(1.4) brightness(0.9);
  -webkit-backdrop-filter: blur(64px) saturate(1.4) brightness(0.9);
  border: 1px solid rgba(255,255,255,0.12); border-radius: 1.5rem; padding: 2.5rem 2rem;
  box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset;
}

/* ── Dashboard ── */
.dashboard-wrapper {
  position: relative; z-index: 10; width: 100%; max-width: 900px;
  display: flex; flex-direction: column; gap: 1.5rem;
}

.dash-header {
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(10,8,30,0.50); backdrop-filter: blur(32px);
  border: 1px solid rgba(255,255,255,0.10); border-radius: 1rem; padding: 0.85rem 1.25rem;
}
.dash-link, .dash-logout {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.78rem; font-weight: 500; padding: 0.4rem 0.85rem;
  border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.1);
  color: rgba(200,200,230,0.7); transition: all 0.2s;
}
.dash-link:hover { color: white; border-color: rgba(139,92,246,0.5); }
.dash-logout:hover { color: #fca5a5; border-color: rgba(239,68,68,0.4); }

.dash-body { display: grid; gap: 1.5rem; }
@media (min-width: 768px) { .dash-body { grid-template-columns: 1fr 1fr; } }

.dash-card {
  background: rgba(10,8,30,0.45); backdrop-filter: blur(48px);
  border: 1px solid rgba(255,255,255,0.1); border-radius: 1.25rem; padding: 1.5rem;
}

.dash-section-title {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 1.25rem;
}
.dash-count {
  margin-left: auto; font-size: 0.7rem; font-weight: 600;
  background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3);
  color: #a78bfa; border-radius: 9999px; padding: 0.1rem 0.55rem;
}

/* ── Upload zone ── */
.upload-zone {
  position: relative; border: 2px dashed rgba(255,255,255,0.1); border-radius: 0.75rem;
  min-height: 150px; display: flex; align-items: center; justify-content: center;
  cursor: pointer; overflow: hidden; transition: border-color 0.2s, background 0.2s;
}
.upload-zone:hover, .upload-zone--active {
  border-color: rgba(139,92,246,0.5); background: rgba(139,92,246,0.05);
}
.upload-empty { display: flex; flex-direction: column; align-items: center; padding: 1.5rem; }
.upload-preview { position: relative; width: 100%; display: flex; align-items: center; justify-content: center; }
.upload-preview-img { width: 100%; max-height: 180px; object-fit: contain; }
.upload-pdf-preview { display: flex; flex-direction: column; align-items: center; padding: 1.5rem; }
.upload-remove {
  position: absolute; top: 0.5rem; right: 0.5rem;
  background: rgba(239,68,68,0.2); border: 1px solid rgba(239,68,68,0.35);
  border-radius: 0.4rem; color: #fca5a5; padding: 0.25rem; transition: all 0.2s;
}
.upload-remove:hover { background: rgba(239,68,68,0.35); }

/* ── Cert list ── */
.cert-list { display: flex; flex-direction: column; gap: 0.6rem; max-height: 400px; overflow-y: auto; }
.cert-list-item {
  display: flex; align-items: center; gap: 0.75rem;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 0.65rem; padding: 0.6rem 0.75rem; transition: border-color 0.2s;
}
.cert-list-item:hover { border-color: rgba(139,92,246,0.3); }
.cert-list-thumb {
  width: 2.5rem; height: 2.5rem; border-radius: 0.4rem; overflow: hidden;
  background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; shrink: 0;
}
.cert-list-img { width: 100%; height: 100%; object-fit: cover; }
.cert-list-info { flex: 1; min-width: 0; }
.cert-list-delete {
  padding: 0.35rem; border-radius: 0.4rem; color: rgba(200,200,230,0.35);
  transition: all 0.2s; flex-shrink: 0;
}
.cert-list-delete:hover { color: #fca5a5; background: rgba(239,68,68,0.1); }

/* ── Shared form elements ── */
.cert-form { display: flex; flex-direction: column; gap: 1rem; }
.field-group { display: flex; flex-direction: column; gap: 0.375rem; }
.field-label { font-size: 0.7rem; font-weight: 500; color: rgba(180,180,220,0.7); text-transform: uppercase; letter-spacing: 0.1em; }
.glass-input {
  width: 100%; padding: 0.65rem 1rem; background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12); border-radius: 0.75rem; color: #fff;
  font-size: 0.875rem; outline: none; transition: all 0.2s; backdrop-filter: blur(8px);
}
.glass-input::placeholder { color: rgba(200,200,230,0.3); }
.glass-input:focus { border-color: rgba(139,92,246,0.6); box-shadow: 0 0 0 3px rgba(139,92,246,0.15); background: rgba(255,255,255,0.1); }

.logo-text { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #a78bfa, #60a5fa, #f0abfc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; display: inline-block; }
.subtitle { color: rgba(200,200,230,0.6); font-size: 0.7rem; font-family: monospace; letter-spacing: 0.15em; text-transform: uppercase; margin-top: 0.5rem; }

.error-msg { font-size: 0.75rem; color: #fca5a5; background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); border-radius: 0.6rem; padding: 0.5rem 0.75rem; }

.submit-btn {
  width: 100%; padding: 0.7rem; background: linear-gradient(135deg, #7c3aed, #4f46e5);
  border-radius: 0.75rem; color: #fff; font-size: 0.875rem; font-weight: 600;
  letter-spacing: 0.03em; display: flex; align-items: center; justify-content: center;
  gap: 0.5rem; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(124,58,237,0.3); cursor: pointer;
}
.submit-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 30px rgba(124,58,237,0.5); background: linear-gradient(135deg, #8b5cf6, #6366f1); }
.submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

.eye-btn { position: absolute; top: 0; bottom: 0; right: 0; padding-right: 0.75rem; display: flex; align-items: center; color: rgba(180,180,220,0.5); transition: color 0.2s; }
.eye-btn:hover { color: rgba(200,200,240,0.9); }

.back-link { font-size: 0.75rem; color: rgba(180,180,220,0.45); transition: color 0.2s; }
.back-link:hover { color: rgba(200,200,240,0.8); }
</style>
