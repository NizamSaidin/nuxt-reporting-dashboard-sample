<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import { getReport } from '~/features/reports/api/get-report';
import HeroSection from '~/features/reports/components/ui/HeroSection.vue';

const route = useRoute();
const id = route.params.id as string;

const { data } = await getReport({ id });

</script>

<template>
  <div>
    <Button class="flex gap-4 items-center my-4 cursor-pointer" variant="ghost" @click="$router.back()">
      <ArrowLeft class="w-4 h-4 cursor-pointer" />
      <span>Back</span>
    </Button>

    <div v-if="data">
      <HeroSection :data="data" />
      <!--More Sections -->
    </div>

    <div v-else class="flex items-center justify-center h-screen">
      <p class="text-gray-500">Resource not found.</p>
    </div>
  </div>
</template>