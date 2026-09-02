import { Title } from "@mantine/core";
// import { useNavigate } from "react-router";
// import { PATHS } from "../../shared/constants/paths";
import { LoginForm } from "../../widgets/LoginForm";

export const LoginPage = () => {
  // const navigate = useNavigate();

  // const handleFormSubmit = () => {
  //   navigate(PATHS.route.home);
  //   form.reset();
  // };

  return (
    <div className="border border-gray-300 rounded-3xl p-12">
      <Title order={3} className="text-center">
        Вход
      </Title>
      <LoginForm />
    </div>
  );
};
