import React from "react";
import { Box } from "@chakra-ui/core";
import { LoginForm } from "./LoginForm";
export function LoginComponent({ isLoading, onSubmit }) {
  return (
    <Box height="100%">
      <Box>
        <Box
          width="450px"
          position="relative"
          right="0"
          left="0"
          max-width="95%"
          margin="5rem auto 1rem"
        >
          <LoginForm isLoading={isLoading} onSubmit={onSubmit} />
        </Box>
      </Box>
    </Box>
  );
}
