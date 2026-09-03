import { useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import { useSelector } from "react-redux";
import { Carousel } from "./ui/Carousel";
import { AddSlideModal } from "../../widgets/AddSlideModal";
import { DeleteSlideModal } from "../../widgets/DeleteSlideModal";
import { HomePageHeader } from "./ui/HomePageHeader";
import type { Slide } from "../../entities/Slide";

const OPTIONS: EmblaOptionsType = { dragFree: true };

export const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [slideIdToDelete, setSlideIdToDelete] = useState<number | null>(null);
  const slides = useSelector((state: { slides: Slide[] }) => state.slides);

  const openAddSlideModal = () => setIsOpenModal(true);
  const closeAddSlideModal = () => setIsOpenModal(false);
  const openDeleteSlideModal = (slideId: number) => setSlideIdToDelete(slideId);
  const closeDeleteSlideModal = () => setSlideIdToDelete(null);

  return (
    <div>
      <HomePageHeader onAddSlide={openAddSlideModal} />
      <Carousel
        slides={slides}
        options={OPTIONS}
        onDelete={openDeleteSlideModal}
      />

      {isOpenModal && (
        <AddSlideModal isOpenModal={isOpenModal} onClose={closeAddSlideModal} />
      )}
      {slideIdToDelete !== null && (
        <DeleteSlideModal
          isOpenModal
          slideId={slideIdToDelete}
          onClose={closeDeleteSlideModal}
        />
      )}
    </div>
  );
};
