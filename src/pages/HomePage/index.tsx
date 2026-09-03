import { useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/providers/store/store";
import { Carousel } from "./Carousel";
import { AddSlideModal } from "../../widgets/AddSlideModal";
import { HomePageHeader } from "./HomePageHeader";

const OPTIONS: EmblaOptionsType = { dragFree: true };

export const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const slides = useSelector((state: RootState) => state.slides);

  const openAddSlideModal = () => setIsOpenModal(true);
  const closeAddSlideModal = () => setIsOpenModal(false);

  return (
    <div>
      <HomePageHeader handleAddSlideModal={openAddSlideModal} />
      <Carousel slides={slides} options={OPTIONS} />

      {isOpenModal && (
        <AddSlideModal isOpenModal={isOpenModal} onClose={closeAddSlideModal} />
      )}
    </div>
  );
};
