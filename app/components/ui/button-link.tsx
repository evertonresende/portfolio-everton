import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";
import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "./icons";

type Variant = "primary" | "secondary" | "text";
type Icon = "right" | "down" | "download" | "external";

const icons: Record<Icon, () => ReactNode> = {
  right: ArrowRight,
  down: ArrowDown,
  download: Download,
  external: ArrowUpRight,
};

// No hover e no foco, a seta anda 4–6px na direção dela.
const nudge: Record<Icon, string> = {
  right: "group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5",
  down: "group-hover:translate-y-1 group-focus-visible:translate-y-1",
  download: "group-hover:translate-y-1 group-focus-visible:translate-y-1",
  external: "group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1",
};

// O fundo mais escuro do próprio botão entra da esquerda para a direita (pseudo-elemento escalado, sem
// gradiente). Cada botão fica com a sua cor no hover, e o texto não muda: primário azul → azul fundo,
// secundário preto → cinza (no tema escuro, branco → cinza claro). Toque: o wipe entra no pressionar.
const wipe =
  "relative isolate overflow-hidden before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100 focus-visible:before:scale-x-100 active:before:scale-x-100 active:brightness-90 motion-reduce:before:transition-none";

const variants: Record<Variant, string> = {
  // max-sm:px-4: no celular os botões ocupam a largura toda e os rótulos alinham na mesma margem.
  primary: cn(wipe, "h-12 px-7 max-sm:px-4 bg-accent text-on-accent no-underline before:bg-accent-deep hover:text-on-accent"),
  secondary: cn(wipe, "h-12 px-4 bg-foreground text-background no-underline before:bg-muted hover:text-background"),
  text: "min-h-11 -mx-1 px-1 underline",
};

interface Props {
  readonly href: string;
  readonly variant?: Variant;
  readonly icon?: Icon;
  readonly external?: boolean;
  readonly className?: string;
  readonly ariaLabel?: string;
  readonly children: ReactNode;
}

/** Botão é sempre um link (toda ação do site é navegação). Quadrado, 48px de altura. */
export function ButtonLink({ href, variant = "text", icon = "right", external, className, ariaLabel, children }: Props) {
  const Icon = icons[icon];
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-3 whitespace-nowrap text-base font-medium leading-none",
        variants[variant],
        className,
      )}
    >
      {children}
      <span className={cn("flex transition-transform duration-300 ease-out motion-reduce:transition-none", nudge[icon])}>
        <Icon />
      </span>
    </a>
  );
}
