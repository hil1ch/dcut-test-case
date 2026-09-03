import { Modal } from "@mantine/core";
import { ButtonTemplate } from "../../shared/ui/ButtonTemplate";
import { useDispatch } from "react-redux";
import { deleteSlide } from "../../features/add-slide/slices/slideSlice";
import type { AppDispatch } from "../../app/providers/store/store";

interface IDeleteSlideModalProps {
  isOpenModal: boolean;
  slideId: number;
  onClose: () => void;
}

export const DeleteSlideModal = ({
  isOpenModal,
  slideId,
  onClose,
}: IDeleteSlideModalProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteSlide = () => {
    dispatch(deleteSlide(slideId));
    onClose();
  };

  return (
    <Modal
      centered
      opened={isOpenModal}
      onClose={onClose}
      title="Действительно удалить слайд?"
      closeOnEscape
    >
      <div className="flex gap-2 justify-end">
        <ButtonTemplate type="button" variant="default" onClick={onClose}>
          Отмена
        </ButtonTemplate>
        <ButtonTemplate
          type="button"
          color="red"
          variant="filled"
          onClick={handleDeleteSlide}
        >
          Удалить
        </ButtonTemplate>
      </div>
    </Modal>
  );
};
