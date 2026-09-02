import { InputTemplate } from "../../shared/ui/InputTemplate";
import { Checkbox } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { ButtonTemplate } from "../../shared/ui/ButtonTemplate";

export const ModalForm = () => {
  return (
    <form className="flex flex-col gap-2" noValidate>
      <InputTemplate
        placeholder="Введите заголовок (обязательное поле)"
        type="text"
        value={""}
        required
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Textarea placeholder="Введите текст (необязательное поле)" />
      <Checkbox label="Отметить проверенным" />

      <div className="flex gap-2 justify-end mt-3">
        <ButtonTemplate type="reset" variant="default">
          Отмена
        </ButtonTemplate>
        <ButtonTemplate type="submit" variant="filled">
          Добавить
        </ButtonTemplate>
      </div>
    </form>
  );
};
