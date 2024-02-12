import { twMerge } from "tailwind-merge";
import classNames from "classnames";

export function cn(...inputs: unknown[]) {
  return twMerge(classNames(inputs));
}
