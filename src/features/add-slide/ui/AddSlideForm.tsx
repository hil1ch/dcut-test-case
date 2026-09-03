import type { ChangeEvent } from "react";
import { useForm } from "@mantine/form";
import { Checkbox, Textarea } from "@mantine/core";
import { InputTemplate } from "../../../shared/ui/InputTemplate";
import { ButtonTemplate } from "../../../shared/ui/ButtonTemplate";
import { useDispatch } from "react-redux";
import { addSlide } from "../../../entities/Slide";

interface IAddSlideFormProps {
  onClose: () => void;
}

export const AddSlideForm = ({ onClose }: IAddSlideFormProps) => {
  const dispatch = useDispatch();
  const form = useForm({
    mode: "controlled",
    initialValues: { title: "", annotation: "", isChecked: false },
    validate: {
      title: (value: string) =>
        value.trim().length > 0 ? null : "Заголовок не должен быть пустым",
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    dispatch(addSlide(values));
    form.reset();
    onClose();
  };

  const handleInputChange =
    <Field extends keyof typeof form.values>(field: Field) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const input = event.currentTarget;
      const value =
        input instanceof HTMLInputElement && input.type === "checkbox"
          ? input.checked
          : input.value;
      form.setFieldValue(field, value as never);
    };

  return (
    <form
      className="flex flex-col gap-2"
      noValidate
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <InputTemplate
        placeholder="Введите заголовок (обязательное поле)"
        type="text"
        value={form.values.title}
        required
        onChange={handleInputChange("title")}
        error={form.errors.title}
      />
      <Textarea
        placeholder="Введите текст (необязательное поле)"
        value={form.values.annotation}
        onChange={handleInputChange("annotation")}
      />
      <Checkbox
        label="Отметить проверенным"
        checked={form.values.isChecked}
        onChange={handleInputChange("isChecked")}
      />
      <div className="flex gap-2 justify-end mt-3">
        <ButtonTemplate
          type="button"
          variant="default"
          onClick={() => {
            form.reset();
            onClose();
          }}
        >
          Отмена
        </ButtonTemplate>
        <ButtonTemplate type="submit" variant="filled">
          Добавить
        </ButtonTemplate>
      </div>
    </form>
  );
};
