import { Modal } from "@mantine/core";
import { ButtonTemplate } from "../../shared/ui/ButtonTemplate";

interface IDeleteSlideModalProps {
  isOpenModal: boolean;
}

export const DeleteSlideModal = ({ isOpenModal }: IDeleteSlideModalProps) => {
  return (
    <Modal
      centered
      opened={isOpenModal}
      onClose={function (): void {
        throw new Error("Function not implemented.");
      }}
      title="Действительно удалить слайд?"
      closeOnEscape
    >
      <div className="flex gap-2 justify-end">
        <ButtonTemplate type="button" variant="default">
          Отмена
        </ButtonTemplate>
        <ButtonTemplate type="button" color="red" variant="filled">
          Удалить
        </ButtonTemplate>
      </div>
    </Modal>
  );
};
