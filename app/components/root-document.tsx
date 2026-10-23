import type { ReactNode } from "react";

/** <html> de cada idioma: cada grupo de rotas tem seu root layout para o lang ficar certo. */
export function RootDocument({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang}>
      <head>
        <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        {children}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "179fdff39ebf42cab633d8ef1b46ca4e"}'
        />
      </body>
    </html>
  );
}
