"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

type Props = {
  candidates: readonly string[];
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function FallbackImage({
  candidates,
  alt,
  className,
  sizes,
  priority,
  fill,
  width,
  height,
}: Props) {
  const [index, setIndex] = useState(0);
  const src = candidates[index] ?? candidates[candidates.length - 1];

  const onError = useCallback(() => {
    setIndex((i) => Math.min(i + 1, candidates.length - 1));
  }, [candidates.length]);

  if (fill) {
    return (
      <Image
        key={src}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        onError={onError}
      />
    );
  }

  return (
    <Image
      key={src}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
      onError={onError}
    />
  );
}
