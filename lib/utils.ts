import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// As utilidades tipográficas do globals.css são "tamanho de fonte": sem isto, o twMerge
// trata `text-mono-sm` e `text-muted` como conflito e descarta uma das duas.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-mono-xs",
        "text-mono-sm",
        "text-mono-md",
        "text-display-1",
        "text-display-2",
        "text-display-3",
        "text-display-closing",
        "text-heading",
        "text-heading-lg",
        "text-lead",
        "text-sub",
        "text-body",
        "text-numeral",
        "text-numeral-sm",
        "text-index",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** "A · B · C": o "·" fica preso ao item anterior, então nenhuma linha começa com ele. */
export function glueSeparators(text: string): string {
  return text.replaceAll(" · ", "\u00a0· ");
}
