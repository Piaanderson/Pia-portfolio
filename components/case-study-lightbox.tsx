"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type CaseStudyLightboxProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function CaseStudyLightbox({
  src,
  alt,
  caption,
}: CaseStudyLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setOrigin({ x, y });
  };

  return (
    <Dialog>
      <figure className="mt-4">
        <DialogTrigger asChild>
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl cursor-zoom-in">
            <Image src={src} alt={alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity hover:opacity-100" />
          </div>
        </DialogTrigger>
        {caption && (
          <figcaption className="mt-3 text-sm text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </figure>
      <DialogContent className="max-w-5xl p-4 sm:p-6">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black/5"
          onMouseMove={handleMouseMove}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={cn(
              "object-contain transition-transform duration-200",
              isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
            )}
            style={{ transformOrigin: `${origin.x}% ${origin.y}%` }}
            onClick={() => setIsZoomed((value) => !value)}
            onContextMenu={(event) => event.preventDefault()}
          />
          <div className="pointer-events-none absolute inset-0 bg-black/5" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
