import { Modal } from "@mantine/core";
import { AddSlideForm } from "../../../features/add-slide";

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
      <AddSlideForm onClose={onClose} />
    </Modal>
  );
};
