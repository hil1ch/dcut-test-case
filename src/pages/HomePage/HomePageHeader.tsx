import { ButtonTemplate } from "../../shared/ui/ButtonTemplate";
import { SignOutIcon, PlusIcon } from "@phosphor-icons/react";

interface IHomePageHeaderProps {
  handleAddSlideModal: () => void;
}

export const HomePageHeader = ({
  handleAddSlideModal,
}: IHomePageHeaderProps) => {
  return (
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
        onClick={handleAddSlideModal}
      >
        Добавить
      </ButtonTemplate>
    </div>
  );
};
