export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          Everton Resende
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl max-w-md mx-auto">
          Portfolio em construção. Algo incrível está chegando.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Powered by Vinext + Cloudflare Workers
        </div>
      </div>
    </main>
  );
}
