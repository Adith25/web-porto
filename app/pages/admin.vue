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
    <MagicCard
      v-if="!isLoggedIn"
      class="relative z-10 w-full max-w-md px-8 py-10 !bg-white/90 dark:!bg-[#0f0f19]/75 backdrop-blur-2xl shadow-2xl"
      v-motion
      :initial="{ opacity: 0, scale: 0.95, y: 40 }"
      :enter="{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 25 },
      }"
    >
      <div
        class="text-center mb-8"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
      >
        <NuxtLink to="/" class="inline-block group">
          <span
            class="logo-text group-hover:tracking-widest transition-all duration-300"
            >Adith</span
          >
        </NuxtLink>
        <p class="subtitle">Welcome Back Admin 🤩</p>
      </div>

      <form class="space-y-5" @submit.prevent="handleLogin">
        <div
          class="field-group"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 200 } }"
        >
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

        <div
          class="field-group"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 300 } }"
        >
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

        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 -translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
        >
          <p v-if="error" class="error-msg">{{ error }}</p>
        </Transition>

        <button
          type="submit"
          class="submit-btn"
          :disabled="isLoading"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
        >
          <Icon
            v-if="isLoading"
            name="mdi:loading"
            class="w-4 h-4 animate-spin"
          />
          {{ isLoading ? "Signing in..." : "Sign In" }}
        </button>
      </form>

      <div
        class="text-center mt-6"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 500 } }"
      >
        <NuxtLink to="/" class="back-link">← Back to portfolio</NuxtLink>
      </div>
    </MagicCard>

    <!-- ── LOGGED IN: Dashboard ── -->
    <div v-else class="dashboard-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-brand">
          <span class="logo-text text-base">Adith</span>
          <span class="text-gray-500 text-xs font-mono ml-1">admin</span>
        </div>

        <nav class="sidebar-nav">
          <button
            v-for="item in navItems"
            :key="item.tab"
            class="nav-item"
            :class="{ 'nav-item--active': activeTab === item.tab }"
            @click="activeTab = item.tab"
          >
            <Icon :name="item.icon" class="w-4 h-4 shrink-0" />
            <span>{{ item.label }}</span>
          </button>
        </nav>

        <div class="sidebar-footer">
          <NuxtLink to="/" target="_blank" class="sidebar-action">
            <Icon name="mdi:open-in-new" class="w-3.5 h-3.5" /> View Site
          </NuxtLink>
          <button class="sidebar-action sidebar-logout" @click="doLogout">
            <Icon name="mdi:logout" class="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="dashboard-main">
        <!-- ── DASHBOARD ── -->
        <section v-if="activeTab === 'dashboard'" class="tab-section">
          <div class="tab-header">
            <h1 class="tab-title">Dashboard</h1>
            <p class="tab-subtitle">Overview of your portfolio content</p>
          </div>

          <div class="stats-grid">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="stat-card"
              @click="activeTab = stat.tab"
            >
              <div class="stat-icon-wrap" :style="{ background: stat.bg }">
                <Icon
                  :name="stat.icon"
                  class="w-5 h-5"
                  :style="{ color: stat.color }"
                />
              </div>
              <div>
                <p class="stat-count">{{ stat.count }}</p>
                <p class="stat-label">{{ stat.label }}</p>
              </div>
              <Icon
                name="mdi:arrow-right"
                class="w-4 h-4 text-gray-600 ml-auto"
              />
            </div>
          </div>

          <div class="dash-welcome">
            <Icon name="mdi:hand-wave" class="w-6 h-6 text-yellow-400" />
            <div>
              <p class="text-white font-semibold">
                Welcome to your Admin Panel
              </p>
              <p class="text-gray-400 text-sm">
                Manage all your portfolio content from the sidebar menu.
              </p>
            </div>
          </div>
        </section>

        <!-- ── PROJECTS ── -->
        <section v-if="activeTab === 'projects'" class="tab-section">
          <div class="tab-header">
            <div>
              <h1 class="tab-title">Projects</h1>
              <p class="tab-subtitle">
                {{ projects.length }} project(s) in database
              </p>
            </div>
            <button class="add-btn" @click="openModal('project')">
              <Icon name="mdi:plus" class="w-4 h-4" /> Add Project
            </button>
          </div>

          <div class="list-table">
            <div class="list-head">
              <span>Title</span>
              <span>Tech Stack</span>
              <span>Links</span>
              <span>Actions</span>
            </div>
            <p v-if="projects.length === 0" class="empty-state">
              No projects yet. Click "Add Project" to get started.
            </p>
            <draggable
              v-model="projects"
              item-key="id"
              handle=".drag-handle"
              @end="onReorder('project')"
              :animation="200"
              v-else
            >
              <template #item="{ element: p }">
                <div class="list-row group">
                  <div class="flex items-center gap-2">
                    <button
                      class="drag-handle opacity-0 group-hover:opacity-100 cursor-move text-gray-500 hover:text-gray-900 dark:hover:text-white transition-opacity"
                    >
                      <Icon name="mdi:drag" class="w-4 h-4" />
                    </button>
                    <Icon
                      v-if="p.icon"
                      :name="p.icon"
                      class="w-4 h-4 text-accent-light shrink-0"
                    />
                    <span
                      class="font-medium text-gray-900 dark:text-white text-sm truncate"
                      >{{ p.title }}</span
                    >
                  </div>
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="t in splitItems(p.techStack)"
                      :key="t"
                      class="tag"
                      >{{ t }}</span
                    >
                  </div>
                  <div class="flex gap-2">
                    <a
                      v-if="p.githubUrl && p.githubUrl !== '#'"
                      :href="p.githubUrl"
                      target="_blank"
                      class="link-chip"
                      ><Icon name="mdi:github" class="w-3.5 h-3.5"
                    /></a>
                    <a
                      v-if="p.demoUrl && p.demoUrl !== '#'"
                      :href="p.demoUrl"
                      target="_blank"
                      class="link-chip"
                      ><Icon name="mdi:open-in-new" class="w-3.5 h-3.5"
                    /></a>
                  </div>
                  <div class="flex gap-2">
                    <button
                      class="icon-btn icon-btn--edit"
                      @click="editItem('project', p)"
                    >
                      <Icon name="mdi:pencil-outline" class="w-3.5 h-3.5" />
                    </button>
                    <button
                      class="icon-btn icon-btn--del"
                      @click="deleteItem('project', p.id)"
                    >
                      <Icon name="mdi:trash-can-outline" class="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </section>

        <!-- ── EXPERIENCE ── -->
        <section v-if="activeTab === 'experience'" class="tab-section">
          <div class="tab-header">
            <div>
              <h1 class="tab-title">Experience</h1>
              <p class="tab-subtitle">
                {{ experiences.length }} entry(s) in database
              </p>
            </div>
            <button class="add-btn" @click="openModal('experience')">
              <Icon name="mdi:plus" class="w-4 h-4" /> Add Experience
            </button>
          </div>

          <div class="list-table">
            <div class="list-head list-head--exp">
              <span>Role</span>
              <span>Company</span>
              <span>Period</span>
              <span>Actions</span>
            </div>
            <p v-if="experiences.length === 0" class="empty-state">
              No experience entries yet.
            </p>
            <draggable
              v-model="experiences"
              item-key="id"
              handle=".drag-handle"
              @end="onReorder('experience')"
              :animation="200"
              v-else
            >
              <template #item="{ element: e }">
                <div class="list-row list-row--exp group">
                  <div class="flex items-center gap-2">
                    <button
                      class="drag-handle opacity-0 group-hover:opacity-100 cursor-move text-gray-500 hover:text-gray-900 dark:hover:text-white transition-opacity"
                    >
                      <Icon name="mdi:drag" class="w-4 h-4" />
                    </button>
                    <span
                      class="font-medium text-gray-900 dark:text-white text-sm truncate"
                      >{{ e.role }}</span
                    >
                  </div>
                  <span
                    class="text-gray-600 dark:text-gray-400 text-sm truncate"
                    >{{ e.company }}</span
                  >
                  <span class="text-gray-500 text-xs font-mono">{{
                    e.period
                  }}</span>
                  <div class="flex gap-2">
                    <button
                      class="icon-btn icon-btn--edit"
                      @click="editItem('experience', e)"
                    >
                      <Icon name="mdi:pencil-outline" class="w-3.5 h-3.5" />
                    </button>
                    <button
                      class="icon-btn icon-btn--del"
                      @click="deleteItem('experience', e.id)"
                    >
                      <Icon name="mdi:trash-can-outline" class="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </section>

        <!-- ── SKILLS ── -->
        <section v-if="activeTab === 'skills'" class="tab-section">
          <div class="tab-header">
            <div>
              <h1 class="tab-title">Skills</h1>
              <p class="tab-subtitle">
                {{ skills.length }} category(s) in database
              </p>
            </div>
            <button class="add-btn" @click="openModal('skill')">
              <Icon name="mdi:plus" class="w-4 h-4" /> Add Skill Category
            </button>
          </div>

          <div class="list-table">
            <div class="list-head list-head--skill">
              <span>Category</span>
              <span>Items</span>
              <span>Actions</span>
            </div>
            <p v-if="skills.length === 0" class="empty-state">
              No skill categories yet.
            </p>
            <draggable
              v-model="skills"
              item-key="id"
              handle=".drag-handle"
              @end="onReorder('skill')"
              :animation="200"
              v-else
            >
              <template #item="{ element: s }">
                <div class="list-row list-row--skill group">
                  <div class="flex items-center gap-2">
                    <button
                      class="drag-handle opacity-0 group-hover:opacity-100 cursor-move text-gray-500 hover:text-gray-900 dark:hover:text-white transition-opacity"
                    >
                      <Icon name="mdi:drag" class="w-4 h-4" />
                    </button>
                    <Icon
                      v-if="s.icon"
                      :name="s.icon"
                      class="w-4 h-4 text-accent-light"
                    />
                    <span
                      class="font-medium text-gray-900 dark:text-white text-sm"
                      >{{ s.category }}</span
                    >
                  </div>
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="item in splitItems(s.items)"
                      :key="item"
                      class="tag"
                      >{{ item }}</span
                    >
                  </div>
                  <div class="flex gap-2">
                    <button
                      class="icon-btn icon-btn--edit"
                      @click="editItem('skill', s)"
                    >
                      <Icon name="mdi:pencil-outline" class="w-3.5 h-3.5" />
                    </button>
                    <button
                      class="icon-btn icon-btn--del"
                      @click="deleteItem('skill', s.id)"
                    >
                      <Icon name="mdi:trash-can-outline" class="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </section>

        <!-- ── CERTIFICATES ── -->
        <section v-if="activeTab === 'certificates'" class="tab-section">
          <div class="tab-header">
            <div>
              <h1 class="tab-title">Certificates</h1>
              <p class="tab-subtitle">
                {{ certificates.length }} certificate(s) in database
              </p>
            </div>
            <button class="add-btn" @click="openModal('certificate')">
              <Icon name="mdi:plus" class="w-4 h-4" /> Add Certificate
            </button>
          </div>

          <div class="cert-grid">
            <p v-if="certificates.length === 0" class="empty-state">
              No certificates yet.
            </p>
            <draggable
              v-model="certificates"
              item-key="id"
              handle=".drag-handle"
              @end="onReorder('certificate')"
              :animation="200"
              v-else
            >
              <template #item="{ element: c }">
                <div class="cert-card group">
                  <div class="flex items-center mr-2">
                    <button
                      class="drag-handle opacity-0 group-hover:opacity-100 cursor-move text-gray-500 hover:text-gray-900 dark:hover:text-white transition-opacity"
                    >
                      <Icon name="mdi:drag" class="w-5 h-5" />
                    </button>
                  </div>
                  <div class="cert-thumb">
                    <img
                      v-if="c.fileUrl && !c.isPdf"
                      :src="`${API_BASE}${c.fileUrl}`"
                      alt=""
                      class="cert-img"
                    />
                    <Icon
                      v-else-if="c.isPdf"
                      name="mdi:file-pdf-box"
                      class="w-8 h-8 text-red-400"
                    />
                    <Icon
                      v-else
                      name="mdi:certificate-outline"
                      class="w-8 h-8 text-accent/40"
                    />
                  </div>
                  <div class="cert-info">
                    <p
                      class="font-medium text-gray-900 dark:text-white text-sm leading-tight"
                    >
                      {{ c.title }}
                    </p>
                    <p
                      class="text-xs text-gray-600 dark:text-gray-500 mt-0.5 truncate"
                    >
                      {{ c.description || "No description" }}
                    </p>
                  </div>
                  <button
                    class="icon-btn icon-btn--del mt-1"
                    @click="deleteItem('certificate', c.id)"
                  >
                    <Icon name="mdi:trash-can-outline" class="w-3.5 h-3.5" />
                  </button>
                </div>
              </template>
            </draggable>
          </div>
        </section>
      </main>
    </div>

    <!-- ── Modal ── -->
    <Transition name="modal">
      <div v-if="modal.open" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-box">
          <div class="modal-header">
            <h3 class="modal-title">
              {{ modal.editing ? "Edit" : "Add" }} {{ modalTitle }}
            </h3>
            <button class="modal-close" @click="closeModal">
              <Icon name="mdi:close" class="w-4 h-4" />
            </button>
          </div>

          <div class="modal-body">
            <!-- Project Form -->
            <template v-if="modal.type === 'project'">
              <div class="field-group">
                <label class="field-label">Title *</label
                ><input
                  v-model="form2.title"
                  class="glass-input"
                  placeholder="e.g. My Awesome Project"
                />
              </div>
              <div class="field-group">
                <label class="field-label">Description *</label
                ><textarea
                  v-model="form2.description"
                  class="glass-input resize-none"
                  rows="3"
                  placeholder="Brief description..."
                />
              </div>
              <div class="field-group">
                <label class="field-label">Tech Stack (comma-separated)</label
                ><input
                  v-model="form2.techStack"
                  class="glass-input"
                  placeholder="e.g. Vue, NestJS, PostgreSQL"
                />
              </div>
              <div class="field-group">
                <label class="field-label">Icon (MDI name)</label
                ><input
                  v-model="form2.icon"
                  class="glass-input"
                  placeholder="e.g. mdi:code-braces"
                />
              </div>
              <div class="field-group">
                <label class="field-label">GitHub URL</label
                ><input
                  v-model="form2.githubUrl"
                  class="glass-input"
                  placeholder="https://github.com/..."
                />
              </div>
              <div class="field-group">
                <label class="field-label">Demo URL</label
                ><input
                  v-model="form2.demoUrl"
                  class="glass-input"
                  placeholder="https://..."
                />
              </div>
            </template>

            <!-- Experience Form -->
            <template v-if="modal.type === 'experience'">
              <div class="field-group">
                <label class="field-label">Role *</label
                ><input
                  v-model="form2.role"
                  class="glass-input"
                  placeholder="e.g. Intern Software Engineer"
                />
              </div>
              <div class="field-group">
                <label class="field-label">Company *</label
                ><input
                  v-model="form2.company"
                  class="glass-input"
                  placeholder="e.g. Universitas Syiah Kuala"
                />
              </div>
              <div class="field-group">
                <label class="field-label">Position (Job Type)</label
                ><input
                  v-model="form2.position"
                  class="glass-input"
                  placeholder="e.g. Part-time, Internship, Full-time"
                />
              </div>
              <div class="field-group">
                <label class="field-label">Period *</label>
                <div class="flex items-center gap-3">
                  <input
                    type="month"
                    v-model="form2.startDate"
                    class="glass-input flex-1"
                  />
                  <span class="text-gray-400">to</span>
                  <input
                    type="month"
                    v-model="form2.endDate"
                    class="glass-input flex-1"
                    :disabled="form2.currentJob"
                  />
                </div>
                <div class="mt-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="currentJob"
                    v-model="form2.currentJob"
                    class="rounded border-gray-600 bg-gray-800 text-accent focus:ring-accent accent-purple-500"
                    @change="form2.currentJob ? form2.endDate = '' : null"
                  />
                  <label for="currentJob" class="text-sm text-gray-300 cursor-pointer">I currently work here</label>
                </div>
              </div>
              <div class="field-group">
                <label class="field-label">Location</label
                ><input
                  v-model="form2.location"
                  class="glass-input"
                  placeholder="e.g. Banda Aceh, Indonesia · On-site"
                />
              </div>
              <div class="field-group">
                <label class="field-label">Logo URL</label
                ><input
                  v-model="form2.logo"
                  class="glass-input"
                  placeholder="/images/logo.png"
                />
              </div>
              <div class="field-group">
                <label class="field-label">Description</label
                ><textarea
                  v-model="form2.description"
                  class="glass-input resize-none"
                  rows="3"
                  placeholder="Describe your responsibilities and achievements..."
                />
              </div>
            </template>

            <!-- Skill Form -->
            <template v-if="modal.type === 'skill'">
              <div class="field-group">
                <label class="field-label">Category *</label
                ><input
                  v-model="form2.category"
                  class="glass-input"
                  placeholder="e.g. Frontend"
                />
              </div>
              <div class="field-group">
                <label class="field-label">Icon (MDI name)</label
                ><input
                  v-model="form2.icon"
                  class="glass-input"
                  placeholder="e.g. mdi:palette-outline"
                />
              </div>
              <div class="field-group">
                <label class="field-label">Items (comma-separated)</label
                ><input
                  v-model="form2.items"
                  class="glass-input"
                  placeholder="e.g. React, Vue, Tailwind"
                />
              </div>
            </template>

            <!-- Certificate Form -->
            <template v-if="modal.type === 'certificate'">
              <div class="field-group">
                <label class="field-label"
                  >Certificate File (Image / PDF)</label
                >
                <div
                  class="upload-zone"
                  :class="{ 'upload-zone--active': isDragging }"
                  @dragover.prevent="isDragging = true"
                  @dragleave="isDragging = false"
                  @drop.prevent="handleDrop"
                  @click="fileInput?.click()"
                >
                  <input
                    ref="fileInput"
                    type="file"
                    accept="image/*,.pdf"
                    class="hidden"
                    @change="handleFileChange"
                  />
                  <div v-if="certForm.previewUrl" class="upload-preview">
                    <img
                      v-if="!certForm.isPdf"
                      :src="certForm.previewUrl"
                      alt="Preview"
                      class="upload-preview-img"
                    />
                    <div v-else class="upload-pdf-preview">
                      <Icon
                        name="mdi:file-pdf-box"
                        class="w-10 h-10 text-red-400"
                      />
                      <span class="text-sm text-gray-300 mt-1">{{
                        certForm.fileName
                      }}</span>
                    </div>
                    <button
                      type="button"
                      class="upload-remove"
                      @click.stop="clearFile"
                    >
                      <Icon name="mdi:close" class="w-4 h-4" />
                    </button>
                  </div>
                  <div v-else class="upload-empty">
                    <Icon
                      name="mdi:cloud-upload-outline"
                      class="w-10 h-10 text-gray-500"
                    />
                    <p class="text-sm text-gray-400 mt-2">
                      Click or drag & drop here
                    </p>
                    <p class="text-xs text-gray-600">JPG, PNG, PDF accepted</p>
                  </div>
                </div>
              </div>
              <div class="field-group">
                <label class="field-label">Title *</label
                ><input
                  v-model="form2.title"
                  class="glass-input"
                  placeholder="e.g. AWS Certified Cloud Practitioner"
                />
              </div>
              <div class="field-group">
                <label class="field-label">Description</label
                ><textarea
                  v-model="form2.description"
                  class="glass-input resize-none"
                  rows="2"
                  placeholder="Short description..."
                />
              </div>
              <div class="field-group">
                <label class="field-label">Credential URL</label
                ><input
                  v-model="form2.credentialUrl"
                  class="glass-input"
                  placeholder="https://..."
                />
              </div>
            </template>
          </div>

          <div class="modal-footer">
            <button class="cancel-btn" @click="closeModal">Cancel</button>
            <button class="submit-btn" :disabled="isSaving" @click="saveItem">
              <Icon
                v-if="isSaving"
                name="mdi:loading"
                class="w-4 h-4 animate-spin"
              />
              {{ isSaving ? "Saving..." : modal.editing ? "Update" : "Add" }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";

definePageMeta({ layout: "admin" });
useHead({
  title: "Admin — Adith",
  meta: [{ name: "robots", content: "noindex, nofollow" }],
});

const config = useRuntimeConfig();
const API_BASE = config.public.apiBase;

// ── Auth ──
const token = useCookie("admin_token");
const form = reactive({ email: "", password: "" });
const showPassword = ref(false);
const isLoading = ref(false);
const error = ref("");
const isLoggedIn = ref(!!token.value);

// ── Navigation ──
type TabName =
  | "dashboard"
  | "projects"
  | "experience"
  | "skills"
  | "certificates";
const activeTab = ref<TabName>("dashboard");

const navItems = [
  { tab: "dashboard", icon: "mdi:view-dashboard-outline", label: "Dashboard" },
  { tab: "projects", icon: "mdi:folder-multiple-outline", label: "Projects" },
  { tab: "experience", icon: "mdi:briefcase-outline", label: "Experience" },
  { tab: "skills", icon: "mdi:code-tags", label: "Skills" },
  {
    tab: "certificates",
    icon: "mdi:certificate-outline",
    label: "Certificates",
  },
] as const;

// ── Data ──
const projects = ref<any[]>([]);
const experiences = ref<any[]>([]);
const skills = ref<any[]>([]);
const certificates = ref<any[]>([]);

const stats = computed(() => [
  {
    label: "Projects",
    count: projects.value.length,
    icon: "mdi:folder-multiple-outline",
    tab: "projects" as TabName,
    bg: "rgba(99,102,241,0.12)",
    color: "#818cf8",
  },
  {
    label: "Experiences",
    count: experiences.value.length,
    icon: "mdi:briefcase-outline",
    tab: "experience" as TabName,
    bg: "rgba(16,185,129,0.12)",
    color: "#34d399",
  },
  {
    label: "Skill Categories",
    count: skills.value.length,
    icon: "mdi:code-tags",
    tab: "skills" as TabName,
    bg: "rgba(245,158,11,0.12)",
    color: "#fbbf24",
  },
  {
    label: "Certificates",
    count: certificates.value.length,
    icon: "mdi:certificate-outline",
    tab: "certificates" as TabName,
    bg: "rgba(236,72,153,0.12)",
    color: "#f472b6",
  },
]);

const splitItems = (str: string) =>
  (str || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const fetchAll = async () => {
  const headers = { Authorization: `Bearer ${token.value}` };
  const [p, e, s, c] = await Promise.allSettled([
    $fetch<any[]>(`${API_BASE}/projects`),
    $fetch<any[]>(`${API_BASE}/experiences`),
    $fetch<any[]>(`${API_BASE}/skills`),
    $fetch<any[]>(`${API_BASE}/certificates`),
  ]);
  if (p.status === "fulfilled") projects.value = p.value || [];
  if (e.status === "fulfilled") experiences.value = e.value || [];
  if (s.status === "fulfilled") skills.value = s.value || [];
  if (c.status === "fulfilled") certificates.value = c.value || [];
};

onMounted(() => {
  if (isLoggedIn.value) fetchAll();
});

// ── Auth logic ──
const handleLogin = async () => {
  error.value = "";
  isLoading.value = true;
  console.log("Attempting login with:", {
    email: form.email,
    password: form.password,
  });
  try {
    const res = await $fetch<any>(`${API_BASE}/auth/login`, {
      method: "POST",
      body: { email: form.email, password: form.password },
    });
    console.log("Login success:", res);
    if (res.access_token) {
      token.value = res.access_token;
      isLoggedIn.value = true;
      form.password = "";
      await fetchAll();
    }
  } catch (err: any) {
    console.error("Login error details:", err);
    error.value = err.data?.message || "Invalid credentials. Please try again.";
  } finally {
    isLoading.value = false;
  }
};

const doLogout = () => {
  token.value = null;
  isLoggedIn.value = false;
  projects.value = [];
  experiences.value = [];
  skills.value = [];
  certificates.value = [];
};

// ── Modal ──
const modal = reactive({
  open: false,
  type: "" as string,
  editing: false,
  editId: null as number | null,
});
const form2 = reactive<Record<string, any>>({});
const isSaving = ref(false);

const modalTitle = computed(() => {
  const titles: Record<string, string> = {
    project: "Project",
    experience: "Experience",
    skill: "Skill Category",
    certificate: "Certificate",
  };
  return titles[modal.type] || "";
});

// Helper functions for Date Parsing
const parsePeriodStrToForm = (periodStr: string, formObj: any) => {
  if (!periodStr) return;
  // Expected format: "Jan 2024 - Jun 2024 · 6 mos" or "Oct 2025 - Present · 6 mos"
  try {
    const parts = periodStr.split(' · ')[0];
    if (!parts) return;
    const [startStr, endStr] = parts.split(' - ');
    
    // Parse "Jan 2024" to "2024-01"
    const toMonthYear = (str: string | undefined) => {
      if (!str || str === 'Present') return '';
      const d = new Date(str + ' 1'); 
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    };

    formObj.startDate = toMonthYear(startStr?.trim());
    if (endStr?.trim() === 'Present') {
      formObj.endDate = '';
      formObj.currentJob = true;
    } else {
      formObj.endDate = toMonthYear(endStr?.trim());
      formObj.currentJob = false;
    }
  } catch (err) {
    console.error('Error parsing period string', err);
  }
};

const compileFormToPeriodStr = (formObj: any) => {
  if (!formObj.startDate) return "";
  
  const start = new Date(formObj.startDate + "-01");
  const startStr = start.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  
  let endStr = "Present";
  let end = new Date(); // Use today for "Present" math
  
  if (!formObj.currentJob && formObj.endDate) {
    end = new Date(formObj.endDate + "-01");
    endStr = end.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }

  // Calculate duration in months
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1; // inclusive
  if (months < 1) months = 1;
  const durationStr = months >= 12 
    ? (months % 12 === 0 ? `${months / 12} yr${months/12 > 1 ? 's' : ''}` : `${Math.floor(months / 12)} yr ${months % 12} mos`)
    : `${months} mos`;

  return `${startStr} - ${endStr} · ${durationStr}`;
};

const openModal = (type: string) => {
  modal.type = type;
  modal.editing = false;
  modal.editId = null;
  Object.keys(form2).forEach((k) => delete form2[k]);
  
  if (type === "experience") {
    Object.assign(form2, { startDate: "", endDate: "", currentJob: false });
  } else if (type === "certificate") {
    Object.assign(certForm, {
      title: "",
      description: "",
      credentialUrl: "",
      previewUrl: "",
      fileName: "",
      isPdf: false,
      file: null,
    });
  }
  modal.open = true;
};

const editItem = (type: string, item: any) => {
  modal.type = type;
  modal.editing = true;
  modal.editId = item.id;
  Object.keys(form2).forEach((k) => delete form2[k]);
  Object.assign(form2, { ...item });
  
  if (type === "experience") {
    parsePeriodStrToForm(item.period, form2);
  }
  
  modal.open = true;
};

const closeModal = () => {
  modal.open = false;
};

const saveItem = async () => {
  isSaving.value = true;
  const headers = { Authorization: `Bearer ${token.value}` };
  const isEdit = modal.editing;
  const id = modal.editId;

  try {
    if (modal.type === "certificate") {
      if (!modal.editing) {
        if (!form2.title?.trim() || !certForm.file) {
          alert("Title and file are required!");
          return;
        }
        const fd = new FormData();
        fd.append("title", form2.title);
        if (form2.description) fd.append("description", form2.description);
        if (form2.credentialUrl)
          fd.append("credentialUrl", form2.credentialUrl);
        fd.append("isPdf", certForm.isPdf ? "true" : "false");
        fd.append("file", certForm.file);
        await $fetch(`${API_BASE}/certificates`, {
          method: "POST",
          headers,
          body: fd,
        });
      }
    } else {
      let payload = { ...form2 };
      
      if (modal.type === "experience") {
        if (!form2.startDate) {
          alert("Start Date is required!");
          isSaving.value = false;
          return;
        }
        payload.period = compileFormToPeriodStr(form2);
        delete payload.startDate;
        delete payload.endDate;
        delete payload.currentJob;
      }
      
      const url = isEdit
        ? `${API_BASE}/${modal.type}s/${id}`
        : `${API_BASE}/${modal.type}s`;
      const method = isEdit ? "PATCH" : "POST";
      await $fetch(url, {
        method,
        headers: { ...headers, "Content-Type": "application/json" },
        body: payload,
      });
    }
    closeModal();
    await fetchAll();
  } catch (err: any) {
    alert(err.data?.message || "Save failed. Check console.");
    console.error(err);
  } finally {
    isSaving.value = false;
  }
};

const deleteItem = async (type: string, id: number) => {
  if (!confirm(`Delete this ${type}?`)) return;
  try {
    await $fetch(`${API_BASE}/${type}s/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token.value}` },
    });
    await fetchAll();
  } catch (err) {
    console.error(err);
  }
};

const onReorder = async (type: string) => {
  let list: any[] = [];
  if (type === "project") list = projects.value;
  else if (type === "experience") list = experiences.value;
  else if (type === "skill") list = skills.value;
  else if (type === "certificate") list = certificates.value;

  const payload = list.map((item, index) => ({ id: item.id, order: index }));

  try {
    await $fetch(`${API_BASE}/${type}s/reorder`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
      body: payload,
    });
    // No need to refetch all, dragging already handles local state update
  } catch (err: any) {
    console.error("Reorder failed:", err);
    alert("Failed to save order on server.");
    await fetchAll(); // revert
  }
};

// ── Certificate file upload ──
const fileInput = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);
const certForm = reactive({
  title: "",
  description: "",
  credentialUrl: "",
  previewUrl: "",
  fileName: "",
  isPdf: false,
  file: null as File | null,
});

const clearFile = () => {
  certForm.previewUrl = "";
  certForm.fileName = "";
  certForm.isPdf = false;
  certForm.file = null;
  if (fileInput.value) fileInput.value.value = "";
};

const processFile = (file: File) => {
  certForm.file = file;
  certForm.fileName = file.name;
  certForm.isPdf = file.type === "application/pdf";
  if (!certForm.isPdf) {
    const reader = new FileReader();
    reader.onload = (e) => {
      certForm.previewUrl = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  } else {
    certForm.previewUrl = URL.createObjectURL(file);
  }
};

const handleFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (input.files?.[0]) processFile(input.files[0]);
};

const handleDrop = (e: DragEvent) => {
  isDragging.value = false;
  const file = e.dataTransfer?.files[0];
  if (file) processFile(file);
};
</script>

<style scoped>
/* Force Vite HMR rebuild */
/* ── Page shell ── */
.admin-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
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
@keyframes bgRotate {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(30deg);
  }
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.45;
  top: 50%;
  left: 50%;
}
.blob-1 {
  width: 560px;
  height: 560px;
  margin: -280px 0 0 -280px;
  background: radial-gradient(circle, #7c3aed, #4f46e5);
  animation: orbit1 18s linear infinite;
}
.blob-2 {
  width: 440px;
  height: 440px;
  margin: -220px 0 0 -220px;
  background: radial-gradient(circle, #06b6d4, #3b82f6);
  animation: orbit2 14s linear infinite;
}
.blob-3 {
  width: 320px;
  height: 320px;
  margin: -160px 0 0 -160px;
  background: radial-gradient(circle, #ec4899, #a855f7);
  animation: orbit3 10s linear infinite;
}
.blob-4 {
  width: 260px;
  height: 260px;
  margin: -130px 0 0 -130px;
  background: radial-gradient(circle, #10b981, #14b8a6);
  animation: orbit4 22s linear infinite;
}

@keyframes orbit1 {
  0% {
    transform: translate(-38vw, -28vh) scale(1);
  }
  25% {
    transform: translate(35vw, -22vh) scale(1.1);
  }
  50% {
    transform: translate(32vw, 30vh) scale(0.95);
  }
  75% {
    transform: translate(-32vw, 25vh) scale(1.05);
  }
  100% {
    transform: translate(-38vw, -28vh) scale(1);
  }
}
@keyframes orbit2 {
  0% {
    transform: translate(32vw, 26vh) scale(1);
  }
  25% {
    transform: translate(-28vw, 22vh) scale(1.08);
  }
  50% {
    transform: translate(-30vw, -24vh) scale(0.92);
  }
  75% {
    transform: translate(28vw, -20vh) scale(1.04);
  }
  100% {
    transform: translate(32vw, 26vh) scale(1);
  }
}
@keyframes orbit3 {
  0% {
    transform: translate(18vw, -32vh) scale(1);
  }
  25% {
    transform: translate(30vw, 18vh) scale(1.12);
  }
  50% {
    transform: translate(-20vw, 28vh) scale(0.9);
  }
  75% {
    transform: translate(-28vw, -18vh) scale(1.06);
  }
  100% {
    transform: translate(18vw, -32vh) scale(1);
  }
}
@keyframes orbit4 {
  0% {
    transform: translate(-20vw, 18vh) scale(1);
  }
  25% {
    transform: translate(14vw, 22vh) scale(1.1);
  }
  50% {
    transform: translate(22vw, -16vh) scale(0.95);
  }
  75% {
    transform: translate(-16vw, -22vh) scale(1.05);
  }
  100% {
    transform: translate(-20vw, 18vh) scale(1);
  }
}

/* ── Login ── */
.glass-wrapper {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(64px) saturate(1.4) brightness(1);
  -webkit-backdrop-filter: blur(64px) saturate(1.4) brightness(1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.dark .glass-wrapper {
  background: rgba(10, 8, 30, 0.45);
  backdrop-filter: blur(64px) saturate(1.4) brightness(0.9);
  -webkit-backdrop-filter: blur(64px) saturate(1.4) brightness(0.9);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1) inset;
}

/* ── Dashboard layout ── */
.dashboard-layout {
  position: relative;
  z-index: 10;
  display: flex;
  width: 100%;
  min-height: 100vh;
}

/* ── Sidebar ── */
.sidebar {
  width: 220px;
  min-height: 100vh;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(32px);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}
.dark .sidebar {
  background: rgba(7, 7, 24, 0.85);
  border-right: 1px solid rgba(255, 255, 255, 0.07);
}

.sidebar-brand {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  padding: 0 0.5rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 1.25rem;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.6rem 0.75rem;
  border-radius: 0.6rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: rgba(180, 180, 220, 0.55);
  transition: all 0.2s;
  text-align: left;
  width: 100%;
  border: 1px solid transparent;
}
.nav-item:hover {
  color: rgba(200, 200, 240, 0.9);
  background: rgba(255, 255, 255, 0.04);
}
.nav-item--active {
  color: #a78bfa;
  background: rgba(139, 92, 246, 0.12);
  border-color: rgba(139, 92, 246, 0.2);
}

.sidebar-footer {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.sidebar-action {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.4rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(180, 180, 220, 0.5);
  transition: all 0.2s;
}
.sidebar-action:hover {
  color: rgba(220, 220, 250, 0.9);
  border-color: rgba(139, 92, 246, 0.3);
}
.sidebar-logout:hover {
  color: #fca5a5;
  border-color: rgba(239, 68, 68, 0.3);
}

/* ── Main content ── */
.dashboard-main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  max-height: 100vh;
}

.tab-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tab-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}
.tab-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;
}
.dark .tab-title {
  color: #fff;
}
.tab-subtitle {
  font-size: 0.78rem;
  color: rgba(180, 180, 220, 0.5);
  margin-top: 0.2rem;
  font-mono: monospace;
}

/* ── Stats ── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(32px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 1.1rem 1.2rem;
  cursor: pointer;
  transition: all 0.25s;
}
.dark .stat-card {
  background: rgba(10, 8, 30, 0.5);
  border-color: rgba(255, 255, 255, 0.09);
}
.stat-card:hover {
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateY(-2px);
}

.stat-icon-wrap {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.65rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-count {
  font-size: 1.6rem;
  font-weight: 800;
  color: #fff;
  line-height: 1;
}
.stat-label {
  font-size: 0.7rem;
  color: rgba(180, 180, 220, 0.55);
  margin-top: 0.15rem;
}

.dash-welcome {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(10, 8, 30, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  backdrop-filter: blur(32px);
}

/* ── List table ── */
.list-table {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(32px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  overflow: hidden;
}
.dark .list-table {
  background: rgba(10, 8, 30, 0.5);
  border-color: rgba(255, 255, 255, 0.09);
}
.list-head {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  padding: 0.65rem 1.25rem;
  background: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(15, 23, 42, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.dark .list-head {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.07);
  color: rgba(180, 180, 220, 0.4);
}
.list-head--exp {
  grid-template-columns: 2fr 2fr 1.5fr 0.7fr;
}
.list-head--skill {
  grid-template-columns: 1.5fr 3fr 0.7fr;
}

.list-row {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  padding: 0.75rem 1.25rem;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background 0.2s;
}
.list-row:last-child {
  border-bottom: none;
}
.list-row:hover {
  background: rgba(255, 255, 255, 0.025);
}
.list-row--exp {
  grid-template-columns: 2fr 2fr 1.5fr 0.7fr;
}
.list-row--skill {
  grid-template-columns: 1.5fr 3fr 0.7fr;
}

.empty-state {
  color: rgba(180, 180, 220, 0.35);
  font-size: 0.85rem;
  text-align: center;
  padding: 2.5rem 1rem;
}

/* ── Tags / chips ── */
.tag {
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 9999px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  color: #a78bfa;
  font-family: monospace;
}
.link-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.4rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(200, 200, 240, 0.6);
  transition: all 0.2s;
}
.link-chip:hover {
  background: rgba(139, 92, 246, 0.15);
  color: #a78bfa;
  border-color: rgba(139, 92, 246, 0.3);
}

/* ── Icon buttons ── */
.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  border-radius: 0.4rem;
  transition: all 0.2s;
}
.icon-btn--edit {
  color: rgba(180, 180, 220, 0.4);
}
.icon-btn--edit:hover {
  color: #93c5fd;
  background: rgba(59, 130, 246, 0.1);
}
.icon-btn--del {
  color: rgba(180, 180, 220, 0.4);
}
.icon-btn--del:hover {
  color: #fca5a5;
  background: rgba(239, 68, 68, 0.1);
}

/* ── Add button ── */
.add-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  border-radius: 0.65rem;
  color: #fff;
  white-space: nowrap;
  transition: all 0.25s;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.25);
  flex-shrink: 0;
}
.add-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
}

/* ── Certificate grid ── */
.cert-grid {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.cert-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(10, 8, 30, 0.5);
  backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  transition: border-color 0.2s;
}
.cert-card:hover {
  border-color: rgba(139, 92, 246, 0.25);
}
.cert-thumb {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.5rem;
  overflow: hidden;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}
.cert-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cert-info {
  flex: 1;
  min-width: 0;
}

/* ── Modal ── */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.modal-box {
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(64px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.25rem;
}
.dark .modal-box {
  background: rgba(10, 8, 30, 0.95);
  border-color: rgba(255, 255, 255, 0.12);
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}
.dark .modal-header {
  border-color: rgba(255, 255, 255, 0.07);
}
.modal-title {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}
.modal-close {
  padding: 0.35rem;
  border-radius: 0.4rem;
  color: rgba(180, 180, 220, 0.4);
  transition: all 0.2s;
}
.modal-close:hover {
  color: #fca5a5;
  background: rgba(239, 68, 68, 0.1);
}
.modal-body {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal-footer {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.cancel-btn {
  padding: 0.55rem 1.1rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(180, 180, 220, 0.6);
  transition: all 0.2s;
}
.cancel-btn:hover {
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(220, 220, 250, 0.9);
}

/* ── Upload zone ── */
.upload-zone {
  position: relative;
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  min-height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  transition:
    border-color 0.2s,
    background 0.2s;
}
.upload-zone:hover,
.upload-zone--active {
  border-color: rgba(139, 92, 246, 0.5);
  background: rgba(139, 92, 246, 0.05);
}
.upload-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
}
.upload-preview {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.upload-preview-img {
  width: 100%;
  max-height: 160px;
  object-fit: contain;
}
.upload-pdf-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
}
.upload-remove {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.35);
  border-radius: 0.4rem;
  color: #fca5a5;
  padding: 0.25rem;
  transition: all 0.2s;
}
.upload-remove:hover {
  background: rgba(239, 68, 68, 0.35);
}

/* ── Shared form styles ── */
.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}
.field-label {
  font-size: 0.68rem;
  font-weight: 600;
  color: rgba(180, 180, 220, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.glass-input {
  width: 100%;
  padding: 0.6rem 0.9rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.65rem;
  color: #fff;
  font-size: 0.85rem;
  outline: none;
  transition: all 0.2s;
}
.glass-input::placeholder {
  color: rgba(200, 200, 230, 0.25);
}
.glass-input:focus {
  border-color: rgba(139, 92, 246, 0.6);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.12);
  background: rgba(255, 255, 255, 0.08);
}

.logo-text {
  font-size: 1.5rem;
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

.error-msg {
  font-size: 0.75rem;
  color: #fca5a5;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 0.6rem;
  padding: 0.5rem 0.75rem;
}

.submit-btn {
  padding: 0.6rem 1.25rem;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  border-radius: 0.65rem;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.25s;
  cursor: pointer;
}
.submit-btn:hover:not(:disabled) {
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
}
.submit-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

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
.back-link {
  font-size: 0.75rem;
  color: rgba(180, 180, 220, 0.45);
  transition: color 0.2s;
}
.back-link:hover {
  color: rgba(200, 200, 240, 0.8);
}

/* ── Modal transition ── */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
