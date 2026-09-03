import { useForm } from "@mantine/form";
import { SignInIcon, AtIcon } from "@phosphor-icons/react";
import { Input, Button, PasswordInput } from "@mantine/core";
import { InputTemplate } from "../../shared/ui/InputTemplate";
import { useDispatch } from "react-redux";
import { useState, type ChangeEvent } from "react";
import type { AppDispatch } from "../../app/providers/store/store";
import { AUTH_TOKEN_STORAGE_KEY, signIn } from "../../features/auth/login";

const MOCK_AUTH_TOKEN = "mock-auth-token";

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
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

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, MOCK_AUTH_TOKEN);
    dispatch(signIn());
    form.reset();
  };

  const handleInputChange =
    (field: keyof typeof form.values) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      form.setFieldValue(field, event.currentTarget.value);
    };

  return (
    <form
      noValidate
      onSubmit={form.onSubmit(handleSubmit)}
      className="mt-4 w-full"
    >
      <div className="flex flex-col items-center gap-2 mb-3 w-full">
        <Input.Wrapper
          label="Почта"
          error={form.errors.email}
          className="w-full"
        >
          <InputTemplate
            placeholder="your@email.com"
            type="email"
            value={form.values.email}
            onChange={handleInputChange("email")}
            leftSection={<AtIcon size={16} />}
            required
          />
        </Input.Wrapper>
        <PasswordInput
          label="Пароль"
          placeholder="Введите пароль"
          className="w-full"
          value={form.values.password}
          onChange={handleInputChange("password")}
          error={form.errors.password}
          required
        />
      </div>
      <Button
        fullWidth
        disabled={!form.isValid() || isLoading}
        loading={isLoading}
        loaderProps={{ type: "dots" }}
        leftSection={<SignInIcon size={14} />}
        type="submit"
      >
        Войти
      </Button>
    </form>
  );
};
