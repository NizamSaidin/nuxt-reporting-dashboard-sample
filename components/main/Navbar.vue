<template>
  <nav class="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-4 z-50 border-b-1">
    <div class="flex items-center justify-between gap-4 w-full">
      <div class="flex max-md:flex-1 items-center flex-shrink-0 gap-4">
        <NuxtLink to="/">
          <NuxtImg src="/images/logo/logo.webp" width="40" height="40" alt="Kaya Logo" />
        </NuxtLink>
      </div>

      <div class="flex-shrink-0 items-center flex gap-4">
        <MainImageProfile />
      </div>
    </div>
  </nav>
</template>