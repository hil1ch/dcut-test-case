import { useForm } from "@mantine/form";
import { SignInIcon, AtIcon, PasswordIcon } from "@phosphor-icons/react";
import { Input, Button } from "@mantine/core";

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
          <Input
            placeholder="your@email.com"
            leftSection={<AtIcon size={16} />}
            type="email"
          ></Input>
        </Input.Wrapper>
        <Input.Wrapper label="Пароль">
          <Input
            placeholder="Введите пароль"
            leftSection={<PasswordIcon size={16} />}
            type="password"
          ></Input>
        </Input.Wrapper>
      </div>
      <Button
        fullWidth
        // disabled
        // loading
        // loaderProps={{ type: "dots" }}
        leftSection={<SignInIcon size={14} />}
        type="submit"
      >
        Войти
      </Button>
    </form>
  );
};
