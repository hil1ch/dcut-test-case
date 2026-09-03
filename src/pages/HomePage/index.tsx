import { useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import { type Slide } from "../../entities/Slide";
import { Carousel } from "./Carousel";
import { AddSlideModal } from "../../widgets/AddSlideModal";
import { HomePageHeader } from "./HomePageHeader";

const OPTIONS: EmblaOptionsType = { dragFree: true };

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Построение системы",
    annotation: "Начальный этап и описание архитектуры продукта.",
    isChecked: true,
  },
  {
    id: 2,
    title: "Аналитика и данные",
    annotation: "Сбор и структурирование метрик для принятия решений.",
    isChecked: false,
  },
  {
    id: 3,
    title: "Команда и процессы",
    annotation: "Понимание ролей, задач и коммуникаций внутри команды.",
    isChecked: true,
  },
  {
    id: 4,
    title: "Запуск и рост",
    annotation: "Переход к рабочему продукту и дальнейшему масштабированию.",
    isChecked: false,
  },
];

export const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddSlideModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <div>
      <HomePageHeader handleAddSlideModal={handleAddSlideModal} />
      <Carousel slides={SLIDES} options={OPTIONS} />

      {isOpenModal && <AddSlideModal isOpenModal={isOpenModal} />}
    </div>
  );
};
