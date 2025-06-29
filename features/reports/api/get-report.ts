import type { ReportItem } from "~/features/shared/models/report-item";

export const getReport = async ({ id }: { id: string }) => {
  const config = useRuntimeConfig();

  // TODO: Replace with actual API call
  const response = await useFetch<ReportItem[]>(
    `${config.public.appUrl}/data/reports.json`
  );

  return {
    ...response,
    data: response.data.value?.find((report) => report.id === id) || null,
  };
};
