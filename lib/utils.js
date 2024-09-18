import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const JOBS_DEMO = [
  {
    id: "1",
    title: "Job Title 1",
    description: "Job description 1",
  },
  {
    id: "2",
    title: "Job Title 2",
    description: "Job description 2",
  },
  {
    id: "3",
    title: "Job Title 3",
    description: "Job description 3",
  },
  {
    id: "4",
    title: "Job Title 4",
    description: "Job description 4",
  },
  {
    id: "5",
    title: "Job Title 5",
    description: "Job description 5",
  },
];
