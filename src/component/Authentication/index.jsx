import { Box } from "grommet";
import React from "react";
import { useStore } from "../../store";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Authentication = () => {
  const { needRegister } = useStore();
  return (
    <Box fill align="center" justify="center">
      <Box width="medium">
        {needRegister ? <RegisterForm /> : <LoginForm />}
      </Box>
    </Box>
  );
};

export default Authentication;
