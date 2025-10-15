<<<<<<< HEAD
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
=======
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
>>>>>>> f2e65fe0 (Initial commit)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
