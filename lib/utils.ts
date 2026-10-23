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

/** Divide um título em [começo, duas últimas palavras]; null com menos de 3 palavras (ver NoOrphan). */
export function splitLastPair(text: string): readonly [string, string] | null {
  const words = text.trim().split(/\s+/);
  if (words.length < 3) return null;
  return [`${words.slice(0, -2).join(" ")} `, words.slice(-2).join(" ")];
}
