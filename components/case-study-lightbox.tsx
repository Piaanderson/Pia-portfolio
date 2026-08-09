"use client";

import { useState, type CSSProperties, type KeyboardEvent, type MouseEvent } from "react";
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
  flexHeight?: boolean;
  objectPosition?: string;
};

function CaseStudyImage({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}) {
  if (src.endsWith(".svg")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={cn("absolute inset-0 h-full w-full", className)}
        style={style}
      />
    );
  }

  return <Image src={src} alt={alt} fill className={className} style={style} />;
}

export function CaseStudyLightbox({
  src,
  alt,
  caption,
  flexHeight,
  objectPosition,
}: CaseStudyLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const isSvg = src.endsWith(".svg");

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setOrigin({ x, y });
  };

  function handleZoomKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsZoomed((v) => !v);
    }
  }

  return (
    <Dialog>
      <figure className="mt-4">
        <DialogTrigger asChild>
          <button
            type="button"
            className={cn(
              "relative block w-full overflow-hidden rounded-xl cursor-zoom-in text-left",
              isSvg
                ? "aspect-[4/3] bg-muted/20 p-6"
                : flexHeight
                  ? ""
                  : "aspect-[16/9]"
            )}
            aria-label={`View larger image: ${alt}`}
          >
            {flexHeight && !isSvg ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt}
                className="w-full h-auto rounded-xl"
              />
            ) : (
              <CaseStudyImage
                src={src}
                alt={alt}
                className={
                  isSvg
                    ? "relative h-full w-full object-contain"
                    : objectPosition
                      ? "object-cover"
                      : "object-cover object-top"
                }
                style={objectPosition ? { objectPosition } : undefined}
              />
            )}
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100" />
          </button>
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
          <div
            role="button"
            tabIndex={0}
            aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            onClick={() => setIsZoomed((v) => !v)}
            onKeyDown={handleZoomKeyDown}
            className="relative h-full w-full"
          >
            <CaseStudyImage
              src={src}
              alt={alt}
              className={cn(
                "object-contain transition-transform duration-200",
                isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
              )}
              style={{ transformOrigin: `${origin.x}% ${origin.y}%` }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-black/5" aria-hidden="true" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
