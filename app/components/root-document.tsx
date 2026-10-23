import type { ReactNode } from "react";

// Cloudflare Web Analytics (sem cookie). Entra depois do load: assim não disputa banda nem abre
// conexão com outro domínio na janela do LCP. Os web vitals vêm do buffer de performance.
const BEACON = `addEventListener("load",function(){var s=document.createElement("script");s.defer=true;s.src="https://static.cloudflareinsights.com/beacon.min.js";s.dataset.cfBeacon='{"token": "179fdff39ebf42cab633d8ef1b46ca4e"}';document.body.appendChild(s)})`;

/** <html> de cada idioma: cada grupo de rotas tem seu root layout para o lang ficar certo. */
export function RootDocument({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang}>
      <head>
        <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: BEACON }} />
      </body>
    </html>
  );
}
