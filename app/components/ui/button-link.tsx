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

const variants: Record<Variant, string> = {
  primary:
    "h-12 px-7 bg-accent text-on-accent no-underline hover:text-on-accent hover:underline hover:brightness-90 active:brightness-75",
  secondary:
    // brightness sobre o quase-preto não aparece: o hover troca o fundo para o cinza do token (6:1 com o texto).
    "h-12 px-4 bg-foreground text-background no-underline hover:bg-muted hover:text-background hover:underline active:bg-foreground",
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
        "inline-flex items-center gap-3 whitespace-nowrap text-base font-medium leading-none",
        variants[variant],
        className,
      )}
    >
      {children}
      <Icon />
    </a>
  );
}
