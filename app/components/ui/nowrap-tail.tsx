import { glueSeparators } from "../../../lib/utils";

/**
 * Mantém o último trecho depois de " · " (o período, como "jul 2026 – hoje") inteiro na mesma linha.
 * O traço quebra depois dele mesmo com NBSP (UAX #14), então o trecho vai num span sem quebra.
 */
export function NowrapTail({ text }: { text: string }) {
  const cut = text.lastIndexOf(" · ");
  if (cut < 0) return text;
  return (
    <>
      {glueSeparators(text.slice(0, cut + 3))}
      <span className="whitespace-nowrap">{text.slice(cut + 3)}</span>
    </>
  );
}
