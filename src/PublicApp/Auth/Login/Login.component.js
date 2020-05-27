import React from "react";
import { Box } from "@chakra-ui/core";
import { LoginForm } from "./LoginForm";
export function LoginComponent({ isLoading, login_success, onSubmit }) {
  return (
    <Box>
      <LoginForm
        isLoading={isLoading}
        onSubmit={onSubmit}
        login_success={login_success}
      />
    </Box>
  );
}
