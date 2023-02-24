import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function clsxm(...args) {
  // Combine clsx and twMerge to merge Tailwind classes conditionally
  return twMerge(clsx(...args));
}
