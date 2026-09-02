import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { SlideCard, type Slide } from "../../entities/Slide";
import { usePrevNextButtons } from "./CarouselArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./CarouselSelectedSnapDisplay";
import { ActionIcon } from "@mantine/core";

import { CaretRightIcon, CaretLeftIcon } from "@phosphor-icons/react";

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <div className="max-w-3xl m-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-stretch gap-2">
          {slides.map((slide) => (
            <div className="min-w-0 flex-1" key={slide.id}>
              <SlideCard slide={slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between mt-2">
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

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
