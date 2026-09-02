import { Modal } from "@mantine/core";
import { ModalForm } from "../ModalForm";

interface IAddSlideModal {
  isOpenModal: boolean;
}

export const AddSlideModal = ({ isOpenModal }: IAddSlideModal) => {
  return (
    <Modal
      opened={isOpenModal}
      onClose={function (): void {
        throw new Error("Function not implemented.");
      }}
      title="Добавить слайд"
      centered
    >
      <ModalForm />
    </Modal>
  );
};
