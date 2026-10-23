import { splitLastPair } from "../../../lib/utils";

/**
 * Título sem palavra sozinha na última linha: a partir de sm as duas últimas palavras não se separam.
 * O text-wrap: balance resolve no Chromium; o Firefox nem sempre equilibra. No celular a quebra fica
 * livre, porque um par longo ("customer support.") não cabe a 320 px.
 */
export function NoOrphan({ text }: { text: string }) {
  const parts = splitLastPair(text);
  if (!parts) return text;
  return (
    <>
      {parts[0]}
      <span className="sm:whitespace-nowrap">{parts[1]}</span>
    </>
  );
}
