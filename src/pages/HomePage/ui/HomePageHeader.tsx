import { ButtonTemplate } from "../../../shared/ui/ButtonTemplate";
import { SignOutIcon, PlusIcon } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { signOut } from "../../../features/auth";

type HomePageHeaderProps = {
  onAddSlide: () => void;
};

export const HomePageHeader = ({ onAddSlide }: HomePageHeaderProps) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 mb-2 justify-between">
      <ButtonTemplate type="button" variant="outline" color="red" leftSection={<SignOutIcon size={16} />} onClick={() => dispatch(signOut())}>
        Выйти
      </ButtonTemplate>
      <ButtonTemplate type="button" variant="default" leftSection={<PlusIcon size={16} />} onClick={onAddSlide}>
        Добавить
      </ButtonTemplate>
    </div>
  );
};