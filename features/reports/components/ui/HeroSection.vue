<script setup lang="ts">
import { Calendar, Tag } from 'lucide-vue-next';
import type { ReportItem } from '~/features/shared/models/report-item';

defineProps<{
  data: ReportItem
}>()

</script>

<template>
  <Card class="flex flex-col gap-4 p-0 group shadow-md bg-clip-border overflow-hidden">
    <div class="relative h-[350px] md:h-[250px] overflow-hidden bg-gray-100">
      <NuxtImg 
        v-if="data.backgroundImageUrl" 
        v-slot="{ src, isLoaded, imgAttrs }" :src="data.backgroundImageUrl"
        :alt="data.title || 'Report Image'" class="z-10 absolute inset-0 h-full w-full object-cover" 
        :custom="true"
        >
          <img v-if="isLoaded" v-bind="imgAttrs" :src="src">
          <div v-else class="bg-primary/10 h-full w-full" />
      </NuxtImg>


      <div
        class="z-20 absolute inset-0 flex flex-col justify-center items-start p-6 gap-4 bg-black/60 backdrop-blur-xs text-white">

        <div class="flex items-center justify-between gap-2 w-full">
          <div class="text-sm text-gray-100 uppercase">
            {{ data.theme }}
          </div>
          <Badge v-if="data.tag" variant="secondary" class="bg-white/95 text-gray-900 backdrop-blur-sm shadow-sm">
            <Tag class="w-3 h-3 mr-1" />
            {{ data.tag }}
          </Badge>
        </div>

        <div class="space-y-2">
          <h2 class="font-bold text-4xl line-clamp-4">{{ data.title }}</h2>
          <p class="text-gray-100">{{ data.subtitle || '' }}</p>
        </div>

        <div class="flex flex-wrap">
          <div class="flex text-xs items-center gap-1 text-gray-100 mr-4">
            <Calendar class="w-3 h-3 flex-shrink-0" />
            <span class="truncate">
              Published: {{ formatDate(data.datePublished) || '-' }}
            </span>
          </div>
          <div class="flex text-xs items-center gap-1 text-gray-100">
            <Calendar class="w-3 h-3 flex-shrink-0" />
            <span class="truncate">
              Updated At: {{ formatDate(data.dateUpdated, 'yyyy-MM-dd') || '-' }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </Card>
</template>