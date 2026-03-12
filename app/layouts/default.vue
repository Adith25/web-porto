<template>
  <div class="min-h-screen flex flex-col bg-dark">
    <AnnouncementBanner />
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
