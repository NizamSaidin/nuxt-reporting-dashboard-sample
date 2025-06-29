import type { ReportItem } from "~/features/shared/models/report-item";

export const getOverviewReports = async () => {
  const config = useRuntimeConfig();

  // TODO: Replace with actual API call
  return await useFetch<ReportItem[]>(
    `${config.public.appUrl}/data/reports.json`
  );
};
