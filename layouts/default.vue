<template>
    <div class="w-full">
      <MainNavbar />
      <div class="flex min-h-screen pt-[4rem] w-full">
        <main class="p-6 w-full max-w-[92rem] mx-auto">
          <slot />
        </main>
      </div>
    </div>
</template>
