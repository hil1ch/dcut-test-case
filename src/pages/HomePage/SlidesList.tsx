import { SlideCard } from "../../entities/Slide";
import { type Slide } from "../../entities/Slide";

interface ISlidesList {
  slides: Slide[];
}

export const SlidesList = ({ slides }: ISlidesList) => {
  return (
    <div className="flex items-stretch gap-2">
      {slides.map((slide) => (
        <div className="min-w-0 flex-[0_0_calc(50%-0.25rem)]" key={slide.id}>
          <SlideCard slide={slide} />
        </div>
      ))}
    </div>
  );
};
