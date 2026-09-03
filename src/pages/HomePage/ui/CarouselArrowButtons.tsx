import { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { ActionIcon } from "@mantine/core";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

interface IUsePrevNextButtonsType {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): IUsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const onNextButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = useCallback((api: EmblaCarouselType) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const CarouselArrowButtons = ({
  onPrevButtonClick,
  prevBtnDisabled,
  onNextButtonClick,
  nextBtnDisabled,
}: IUsePrevNextButtonsType) => {
  return (
    <div className="grid grid-cols-2 items-center gap-2">
      <ActionIcon
        variant="default"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      >
        <CaretLeftIcon />
      </ActionIcon>
      <ActionIcon
        variant="default"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        <CaretRightIcon />
      </ActionIcon>
    </div>
  );
};
