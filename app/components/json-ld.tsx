/** <script> de JSON-LD (dados de lib/json-ld.ts). `<` vira < para o JSON não fechar o <script>. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
