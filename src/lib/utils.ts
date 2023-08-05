import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

/**
 * Tailwind css helper function to merge class names,
 * remove duplicates and have conditional classes.
 *
 * @example
 * ```jsx
 * import { cn } from "src/lib/utils"
 *
 * const Button = ({ variant, className, ...props }) => (
 *  <button
 *    className={cn(
 *      "bg-blue-500",
 *      {
 *        "text-white": variant === "neutral",
 *        "text-red": variant === "danger",
 *      },
 *      className
 *    )}
 *    {...props}
 *  />
 * );
 * ```
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
