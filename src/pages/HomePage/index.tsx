import { useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import { type Slide } from "../../entities/Slide";
import EmblaCarousel from "./Carousel";
import { ButtonTemplate } from "../../shared/ui/ButtonTemplate";
import { AddSlideModal } from "../../widgets/AddSlideModal";
import { PlusIcon, SignOutIcon } from "@phosphor-icons/react";

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

  const handleAddModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <div>
      <div className="flex gap-2 mb-2 justify-between">
        <ButtonTemplate
          type="button"
          variant="outline"
          color="red"
          leftSection={<SignOutIcon size={16} />}
          // onClick={handleAddModal}
        >
          Выйти
        </ButtonTemplate>
        <ButtonTemplate
          type="button"
          variant="default"
          leftSection={<PlusIcon size={16} />}
          onClick={handleAddModal}
        >
          Добавить
        </ButtonTemplate>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      {isOpenModal && <AddSlideModal isOpenModal={isOpenModal} />}
    </div>
  );
};
