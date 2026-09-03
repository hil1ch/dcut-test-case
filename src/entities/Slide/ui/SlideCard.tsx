import { Card, Text, Badge, Group } from "@mantine/core";
import type { Slide } from "../model/types";
import { ButtonTemplate } from "../../../shared/ui/ButtonTemplate";
import { TrashIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { DeleteSlideModal } from "../../../widgets/DeleteSlideModal";

type SlideCardProps = {
  slide: Slide;
};

export const SlideCard = ({ slide }: SlideCardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openDeleteModal = () => setIsOpenModal(true);
  const closeDeleteModal = () => setIsOpenModal(false);

  return (
    <>
      <Card padding="lg" withBorder className="h-full flex flex-col">
        <Group justify="space-between" mb="xs">
          <Text fw={500}>{slide.title}</Text>
          <Badge color={`${!slide.isChecked ? "pink" : "green"}`}>
            {slide.isChecked ? "Проверено" : "Не проверено"}
          </Badge>
        </Group>

        <Text size="sm" c="dimmed" mb="md" className="flex-1">
          {slide.annotation}
        </Text>
        <ButtonTemplate
          variant="filled"
          color="red"
          type="button"
          size="xs"
          leftSection={<TrashIcon size={16} />}
          onClick={openDeleteModal}
        >
          Удалить
        </ButtonTemplate>
      </Card>

      {isOpenModal && (
        <DeleteSlideModal
          isOpenModal={isOpenModal}
          slideId={slide.id}
          onClose={closeDeleteModal}
        />
      )}
    </>
  );
};
