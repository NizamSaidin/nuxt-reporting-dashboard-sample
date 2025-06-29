import { useDateFormat } from "@vueuse/core";
import { type ClassValue, clsx } from "clsx";
import { parse } from "date-fns";
import { twMerge } from "tailwind-merge";

export function formatDate(date: string | undefined | null, format?: string) {
  if (!date) {
    return null;
  }

  const parsedDate = parse(date, format || "dd/MM/yyyy", new Date());
  const formattedDate = useDateFormat(parsedDate, "MMM DD, YYYY");
  return formattedDate;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
