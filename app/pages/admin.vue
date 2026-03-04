<template>
  <div class="login-page">
    <!-- Animated Gradient Background -->
    <div class="animated-bg">
      <div class="blob blob-1" />
      <div class="blob blob-2" />
      <div class="blob blob-3" />
      <div class="blob blob-4" />
    </div>

    <!-- Glass Card -->
    <div class="glass-wrapper animate-fade-up">
      <!-- Logo / Header -->
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-block group">
          <span class="logo-text group-hover:tracking-widest transition-all duration-300">
            Adith
          </span>
        </NuxtLink>
        <p class="subtitle">Welcome Back Admin 🤩</p>
      </div>

      <!-- Form -->
      <form class="space-y-5" @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="field-group">
          <label for="admin-email" class="field-label">Email</label>
          <input
            id="admin-email"
            v-model="form.email"
            type="email"
            required
            autocomplete="email"
            placeholder="you@example.com"
            class="glass-input"
          />
        </div>

        <!-- Password -->
        <div class="field-group">
          <label for="admin-password" class="field-label">Password</label>
          <div class="relative">
            <input
              id="admin-password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              required
              autocomplete="current-password"
              placeholder="••••••••"
              class="glass-input pr-10"
            />
            <button
              type="button"
              class="eye-btn"
              @click="showPassword = !showPassword"
            >
              <Icon
                :name="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"
                class="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <!-- Error -->
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 -translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-1"
        >
          <p v-if="error" class="error-msg">{{ error }}</p>
        </Transition>

        <!-- Submit -->
        <button
          type="submit"
          class="submit-btn"
          :disabled="isLoading"
        >
          <Icon
            v-if="isLoading"
            name="mdi:loading"
            class="w-4 h-4 animate-spin"
          />
          {{ isLoading ? 'Signing in...' : 'Sign In' }}
        </button>
      </form>

      <!-- Back -->
      <div class="text-center mt-6">
        <NuxtLink to="/" class="back-link">
          ← Back to portfolio
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})

useHead({
  title: 'Admin — Adith',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const form = reactive({ email: '', password: '' })
const showPassword = ref(false)
const isLoading = ref(false)
const error = ref('')

const handleLogin = async () => {
  error.value = ''
  isLoading.value = true
  await new Promise((r) => setTimeout(r, 1200))

  if (form.email === 'admin@example.com' && form.password === 'admin') {
    alert('Login successful! (Placeholder)')
  } else {
    error.value = 'Invalid credentials. Please try again.'
  }
  isLoading.value = false
}
</script>

<style scoped>
/* ── Page shell ── */
.login-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1.5rem;
}

/* ── Animated blobs ── */
.animated-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: #07071a;
  /* slow global counter-spin for extra depth */
  animation: bgRotate 60s linear infinite;
  transform-origin: center center;
}

@keyframes bgRotate {
  from { filter: hue-rotate(0deg); }
  to   { filter: hue-rotate(30deg); }
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.6;
  /* anchor point at centre of screen */
  top: 50%;
  left: 50%;
}

/* blob-1: large purple — wide clockwise orbit */
.blob-1 {
  width: 560px;
  height: 560px;
  margin: -280px 0 0 -280px;
  background: radial-gradient(circle, #7c3aed, #4f46e5);
  animation: orbit1 18s linear infinite;
}

/* blob-2: cyan/blue — mid counter-clockwise orbit */
.blob-2 {
  width: 440px;
  height: 440px;
  margin: -220px 0 0 -220px;
  background: radial-gradient(circle, #06b6d4, #3b82f6);
  animation: orbit2 14s linear infinite;
}

/* blob-3: pink/violet — small fast clockwise ellipse */
.blob-3 {
  width: 320px;
  height: 320px;
  margin: -160px 0 0 -160px;
  background: radial-gradient(circle, #ec4899, #a855f7);
  animation: orbit3 10s linear infinite;
}

/* blob-4: emerald — slow counter-clockwise tight circle */
.blob-4 {
  width: 260px;
  height: 260px;
  margin: -130px 0 0 -130px;
  background: radial-gradient(circle, #10b981, #14b8a6);
  animation: orbit4 22s linear infinite;
}

/* ── Orbital keyframes ── */
/* Each blob traces a full ellipse around screen centre */

@keyframes orbit1 {
  0%   { transform: translate(-38vw, -28vh) scale(1);    }
  25%  { transform: translate( 35vw, -22vh) scale(1.1);  }
  50%  { transform: translate( 32vw,  30vh) scale(0.95); }
  75%  { transform: translate(-32vw,  25vh) scale(1.05); }
  100% { transform: translate(-38vw, -28vh) scale(1);    }
}

@keyframes orbit2 {
  0%   { transform: translate( 32vw,  26vh) scale(1);    }
  25%  { transform: translate(-28vw,  22vh) scale(1.08); }
  50%  { transform: translate(-30vw, -24vh) scale(0.92); }
  75%  { transform: translate( 28vw, -20vh) scale(1.04); }
  100% { transform: translate( 32vw,  26vh) scale(1);    }
}

@keyframes orbit3 {
  0%   { transform: translate( 18vw, -32vh) scale(1);    }
  25%  { transform: translate( 30vw,  18vh) scale(1.12); }
  50%  { transform: translate(-20vw,  28vh) scale(0.9);  }
  75%  { transform: translate(-28vw, -18vh) scale(1.06); }
  100% { transform: translate( 18vw, -32vh) scale(1);    }
}

@keyframes orbit4 {
  0%   { transform: translate(-20vw,  18vh) scale(1);    }
  25%  { transform: translate( 14vw,  22vh) scale(1.1);  }
  50%  { transform: translate( 22vw, -16vh) scale(0.95); }
  75%  { transform: translate(-16vw, -22vh) scale(1.05); }
  100% { transform: translate(-20vw,  18vh) scale(1);    }
}

/* ── Glass card ── */
.glass-wrapper {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(24px) saturate(1.8);
  -webkit-backdrop-filter: blur(24px) saturate(1.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

/* ── Logo ── */
.logo-text {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #a78bfa, #60a5fa, #f0abfc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.subtitle {
  color: rgba(200, 200, 230, 0.6);
  font-size: 0.7rem;
  font-family: monospace;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-top: 0.5rem;
}

/* ── Fields ── */
.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.field-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(180, 180, 220, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.glass-input {
  width: 100%;
  padding: 0.65rem 1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.75rem;
  color: #ffffff;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}

.glass-input::placeholder {
  color: rgba(200, 200, 230, 0.3);
}

.glass-input:focus {
  border-color: rgba(139, 92, 246, 0.6);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15), 0 0 16px rgba(139, 92, 246, 0.1);
  background: rgba(255, 255, 255, 0.1);
}

/* ── Eye button ── */
.eye-btn {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-right: 0.75rem;
  display: flex;
  align-items: center;
  color: rgba(180, 180, 220, 0.5);
  transition: color 0.2s;
}

.eye-btn:hover {
  color: rgba(200, 200, 240, 0.9);
}

/* ── Error ── */
.error-msg {
  font-size: 0.75rem;
  color: #fca5a5;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 0.6rem;
  padding: 0.5rem 0.75rem;
}

/* ── Submit button ── */
.submit-btn {
  width: 100%;
  padding: 0.7rem;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  border-radius: 0.75rem;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
  cursor: pointer;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 8px 30px rgba(124, 58, 237, 0.5);
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.submit-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

/* ── Back link ── */
.back-link {
  font-size: 0.75rem;
  color: rgba(180, 180, 220, 0.45);
  transition: color 0.2s;
}

.back-link:hover {
  color: rgba(200, 200, 240, 0.8);
}

/* ── Fade-up animation ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fadeUp 0.6s ease forwards;
}
</style>
