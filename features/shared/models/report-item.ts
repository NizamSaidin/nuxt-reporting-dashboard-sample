export interface ReportItem {
  id: string;
  title: string;
  subtitle?: string;
  backgroundImageUrl: string;
  cta?: string;
  path?: string;
  tag?: string;
  theme: string;
  datePublished: string;
  dateUpdated?: string;
}
