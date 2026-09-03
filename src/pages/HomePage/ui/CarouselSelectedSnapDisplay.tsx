import { useCallback, useLayoutEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectedSnapDisplay = (emblaApi: EmblaCarouselType | undefined) => {
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState<number | null>(null);
  const updateScrollSnapState = useCallback((api: EmblaCarouselType) => {
    setSnapCount(api.scrollSnapList().length);
    setSelectedSnap(api.selectedScrollSnap());
  }, []);

  useLayoutEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateScrollSnapState(emblaApi);
    emblaApi.on("select", updateScrollSnapState).on("reInit", updateScrollSnapState);
    return () => {
      emblaApi.off("select", updateScrollSnapState);
      emblaApi.off("reInit", updateScrollSnapState);
    };
  }, [emblaApi, updateScrollSnapState]);

  return { selectedSnap, snapCount };
};

type SelectedSnapDisplayProps = {
  selectedSnap: number;
  snapCount: number | null;
};

export const SelectedSnapDisplay = ({ selectedSnap, snapCount }: SelectedSnapDisplayProps) => (
  <div className={`justify-self-end self-center min-w-14 text-right font-semibold ${snapCount === null ? "invisible" : ""}`}>
    {selectedSnap + 1} / {snapCount ?? 0}
  </div>
);