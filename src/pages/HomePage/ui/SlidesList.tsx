import { SlideCard, type Slide } from "../../../entities/Slide";

type SlidesListProps = {
  slides: Slide[];
  onDelete: (slideId: number) => void;
};

export const SlidesList = ({ slides, onDelete }: SlidesListProps) => (
  <div className="flex items-stretch gap-2">
    {slides.map((slide) => (
      <div className="min-w-0 flex-[0_0_calc(50%-0.25rem)]" key={slide.id}>
        <SlideCard slide={slide} onDelete={onDelete} />
      </div>
    ))}
  </div>
);