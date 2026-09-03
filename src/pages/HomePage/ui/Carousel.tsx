import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { type Slide } from "../../../entities/Slide";
import {
  CarouselArrowButtons,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./CarouselSelectedSnapDisplay";
import { SlidesList } from "./SlidesList";

type CarouselProps = {
  slides: Slide[];
  options?: EmblaOptionsType;
  onDelete: (slideId: number) => void;
};

export const Carousel = ({ slides, options, onDelete }: CarouselProps) => {
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
        <SlidesList slides={slides} onDelete={onDelete} />
      </div>
      <div className="grid grid-cols-[auto_1fr] justify-between mt-2">
        <CarouselArrowButtons
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
          onPrevButtonClick={onPrevButtonClick}
          onNextButtonClick={onNextButtonClick}
        />
        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </div>
  );
};
