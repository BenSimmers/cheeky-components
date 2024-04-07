import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 * @param classes - Tailwind CSS classes
 * @returns 
 */
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));