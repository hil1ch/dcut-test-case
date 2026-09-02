import { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

type UseSelectedSnapDisplayType = {
  selectedSnap: number;
  snapCount: number;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectedSnapDisplay = (
  emblaApi: EmblaCarouselType | undefined,
): UseSelectedSnapDisplayType => {
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
    setSnapCount(emblaApi.scrollSnapList().length);
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onUpdate = () => {
      updateScrollSnapState(emblaApi);
    };

    emblaApi.on("select", onUpdate);
    emblaApi.on("reInit", onUpdate);

    return () => {
      emblaApi.off("select", onUpdate);
      emblaApi.off("reInit", onUpdate);
    };
  }, [emblaApi, updateScrollSnapState]);

  return {
    selectedSnap,
    snapCount,
  };
};

type PropType = {
  selectedSnap: number;
  snapCount: number;
};

export const SelectedSnapDisplay = (props: PropType) => {
  const { selectedSnap, snapCount } = props;

  return (
    <div className="justify-self-end self-center font-semibold">
      {selectedSnap + 1} / {snapCount}
    </div>
  );
};
