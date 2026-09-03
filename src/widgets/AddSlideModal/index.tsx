import { Modal } from "@mantine/core";
import { ModalForm } from "../ModalForm";

interface IAddSlideModal {
  isOpenModal: boolean;
  onClose: () => void;
}

export const AddSlideModal = ({ isOpenModal, onClose }: IAddSlideModal) => {
  return (
    <Modal
      opened={isOpenModal}
      onClose={onClose}
      title="Добавить слайд"
      centered
    >
      <ModalForm onClose={onClose} />
    </Modal>
  );
};
