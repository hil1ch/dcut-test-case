import { useForm } from "@mantine/form";
import { SignInIcon, AtIcon } from "@phosphor-icons/react";
import { Input, Button, PasswordInput } from "@mantine/core";
import { InputTemplate } from "../../shared/ui/InputTemplate";

export const LoginForm = () => {
  const form = useForm({
    mode: "controlled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Некорректная почта",
      password: (value: string) =>
        value.length >= 3
          ? null
          : "Пароль должен содержать не менее 3-х символов",
    },
  });

  return (
    <form
      noValidate
      onSubmit={form.onSubmit((values) => console.log(values))}
      className="mt-4"
    >
      <div className="flex flex-col items-center gap-2 mb-3 w-full">
        <Input.Wrapper label="Почта">
          <InputTemplate
            placeholder="your@email.com"
            type="email"
            value={""}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
            leftSection={<AtIcon size={16} />}
            required
          />
        </Input.Wrapper>
        <PasswordInput
          label="Пароль"
          placeholder="Введите пароль"
          className="w-full"
          required
        />
      </div>
      <Button
        fullWidth
        // disabled
        // loading
        loaderProps={{ type: "dots" }}
        leftSection={<SignInIcon size={14} />}
        type="submit"
      >
        Войти
      </Button>
    </form>
  );
};
