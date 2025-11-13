// VerticalCarousel - static vertical stack (no scroll)

import { RefObject } from "react";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, idx: number, firstRef: RefObject<HTMLDivElement | null>) => React.ReactNode;
  gapPx?: number;
  title?: string;
};

export default function VerticalCarousel<T>({
  items,
  renderItem,
  gapPx = 24,
}: CarouselProps<T>) {
  const firstCardRef = (null as unknown) as RefObject<HTMLDivElement | null>;

  return (
    <div className="w-full">
      <div
        className="flex flex-col"
        style={{ gap: `${gapPx}px`, padding: "0 0" }}
      >
        {items.map((it, idx) => (
          <div key={idx} ref={idx === 0 ? firstCardRef : null} className="shrink-0">
            {renderItem(it, idx, firstCardRef)}
          </div>
        ))}
      </div>
    </div>
  );
}

