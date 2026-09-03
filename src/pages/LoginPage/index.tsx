import { Title } from "@mantine/core";
import { LoginForm } from "../../features/auth";

export const LoginPage = () => {
  return (
    <div className="w-lg max-w-[calc(100vw-2rem)] border border-gray-300 rounded-3xl p-12">
      <Title order={3} className="text-center">
        Вход
      </Title>
      <LoginForm />
    </div>
  );
};
