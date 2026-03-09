<template>
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >Name</label
      >
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        placeholder="Your name"
        class="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-200"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >Email</label
      >
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        placeholder="your@email.com"
        class="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-200"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >Message</label
      >
      <textarea
        id="message"
        v-model="form.message"
        rows="5"
        required
        placeholder="Tell me about your project or idea..."
        class="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-200 resize-none"
      />
    </div>

    <button type="submit" class="btn-primary w-full justify-center">
      <Icon name="mdi:send" class="w-4 h-4" />
      Send Message
    </button>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  // Placeholder — replace with API call
  console.log("Form submitted:", { ...form });
  alert("Message sent! (This is a placeholder)");
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>
