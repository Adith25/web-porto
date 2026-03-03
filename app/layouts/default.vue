<template>
  <div class="min-h-screen flex flex-col bg-dark">
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
