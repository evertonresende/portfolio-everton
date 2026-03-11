"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImagePlaceholderProps {
  aspect: "16:9" | "4:3"
  label?: string
  className?: string
}

export function ImagePlaceholder({ aspect, label, className = "" }: ImagePlaceholderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const aspectClass = aspect === "16:9" ? "aspect-video" : "aspect-[4/3]";

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const anim = gsap.fromTo(
      inner,
      { y: "-5%" },
      {
        y: "5%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${aspectClass} ${className}`}
    >
      <div
        ref={innerRef}
        className="w-full h-[110%] bg-[#e0e0e0] flex items-center justify-center"
      >
        {label && (
          <span className="swiss-label text-[#767676]">{label}</span>
        )}
      </div>
    </div>
  );
}
