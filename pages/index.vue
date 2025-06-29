<script setup lang="ts">
import { getOverviewReports } from '~/features/overview/api/get-overview-reports';
import ReportCard from '~/features/overview/components/ui/ReportCard.vue';

const { data } = await getOverviewReports();
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2 class="font-bold text-4xl">Dashboard Overview</h2>

    <div class="w-full grid grid-cols-12 gap-6">
      <div v-for="report in data" :key="report.id" class="col-span-12 lg:col-span-6 xl:col-span-4">
        <ReportCard :report="report" />
      </div>

    </div>

  </div>

</template>
