<script setup lang="ts">
import { Calendar, ChevronRight, Tag } from 'lucide-vue-next';
import type { ReportItem } from '~/features/shared/models/report-item';

defineProps<{
  report: ReportItem
}>()

</script>

<template>
  <Card
    class="relative bg-white dark:bg-card pt-0 group duration-500 transition-all hover:shadow-lg overflow-hidden h-full">
    <div class="relative h-48 overflow-hidden bg-gray-100">
      <NuxtImg
        v-if="report.backgroundImageUrl" 
        v-slot="{ src, isLoaded, imgAttrs }" :src="report.backgroundImageUrl"
        :alt="report.title || 'Report Image'"
        class="z-10 object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500" 
        :custom="true"
        >
          <img v-if="isLoaded" v-bind="imgAttrs" :src="src">
          <div v-else class="bg-primary/10 h-full w-full" />
      </NuxtImg>

      <div
        v-if="report.tag"
        class="absolute top-4 left-4 transform transition-transform duration-300 group-hover:scale-105">
        <Badge variant="secondary" class="bg-white/95 text-gray-900 backdrop-blur-sm shadow-sm">
          <Tag class="w-3 h-3 mr-1" />
          {{ report.tag }}
        </Badge>
      </div>

    </div>

    <div class="flex flex-col gap-2 justify-between flex-1">
      <CardContent class="flex flex-col gap-2 mb-4">
        <div class="text-xs text-gray-600 uppercase">
          {{ report.theme }}
        </div>
        <div class="flex text-xs items-center gap-1 text-gray-600">
          <Calendar class="w-3 h-3 flex-shrink-0" />
          <span class="truncate">
            Published: {{ formatDate(report.datePublished) || '-' }}
          </span>
        </div>
        <h3
          class="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {{ report.title }}

        </h3>

        <p
          v-if="report.subtitle"
          class="text-slate-700 text-md line-clamp-3 group-hover:line-clamp-3 transition-all duration-300">
          {{ report.subtitle }}
        </p>
      </CardContent>
      <CardFooter class="flex items-center justify-end w-full">
        <NuxtLink :to="`/reports/${report.id}`" class="flex gap-2 items-center">
          <span class="text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
            {{ report.cta || "View Report" }}
          </span>
          <ChevronRight class="text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
        </NuxtLink>
      </CardFooter>
    </div>

  </Card>
</template>