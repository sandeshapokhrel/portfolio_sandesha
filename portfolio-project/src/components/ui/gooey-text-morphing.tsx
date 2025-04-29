"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  transitionDuration?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  transitionDuration = 0.5,
  cooldownTime = 2,
  className,
  textClassName
}: GooeyTextProps) {
  const [textIndex, setTextIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % texts.length);
    }, (transitionDuration + cooldownTime) * 1000);

    return () => clearInterval(interval);
  }, [texts, transitionDuration, cooldownTime]);

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center justify-center">
        {texts.map((text, index) => (
          <span
            key={index}
            className={cn(
              "absolute inline-block select-none text-center text-6xl md:text-[60pt]",
              "text-foreground",
              textClassName,
              {
                'opacity-100': index === textIndex,
                'opacity-0': index !== textIndex
              }
            )}
            style={{
              transition: `opacity ${transitionDuration}s ease-in-out`
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}