import React from "react";
import { Box } from "@chakra-ui/core";
import { LoginForm } from "./LoginForm";
export function LoginComponent({ isLoading, onSubmit }) {
  return (
    <Box>
      <LoginForm
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
    </Box>
  );
}
