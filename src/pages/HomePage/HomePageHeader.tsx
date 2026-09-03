import { ButtonTemplate } from "../../shared/ui/ButtonTemplate";
import { SignOutIcon, PlusIcon } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/providers/store/store";
import { signOut } from "../../features/auth/login";

interface IHomePageHeaderProps {
  handleAddSlideModal: () => void;
}

export const HomePageHeader = ({
  handleAddSlideModal,
}: IHomePageHeaderProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="flex gap-2 mb-2 justify-between">
      <ButtonTemplate
        type="button"
        variant="outline"
        color="red"
        leftSection={<SignOutIcon size={16} />}
        onClick={handleSignOut}
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
