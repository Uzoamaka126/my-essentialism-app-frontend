import React from "react";
import { Box } from "@chakra-ui/core";
import { SignupForm } from "./SignupForm";

export function SignupComponent({
  isLoading,
  onSubmit,
  error_message
}) {

  return (
    <Box>
      <Box width="100%" margin="0 auto" maxWidth="448px">
        <SignupForm
          isLoading={isLoading}
          onSubmit={(values) => onSubmit(values)}
          error_message={error_message}
        />
      </Box>
    </Box>
  );
}
