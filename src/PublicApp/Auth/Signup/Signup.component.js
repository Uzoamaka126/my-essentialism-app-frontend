import React from "react";
import { Box } from "@chakra-ui/core";
import { SignupForm } from "./SignupForm";
import { useToast, useDisclosure } from "@chakra-ui/core";
import { ToastBox } from "../../../Components";
import { RegistrationSuccess } from "./RegistrationSuccess";

export function SignupComponent({
  register,
  isLoading,
  history,
}) {
  const { isOpen, onOpen } = useDisclosure();
  const toast = useToast();

  function handleSubmit(values) {
    register(values)
    .then((response) => {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Welcome"} />,
      });
      onOpen();
      // history.push("/dashboard/home");
      })
      .catch((err) => {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={err} />,
      });
    })
  }

  return (
    <>
      <Box background="#efefef" height="100%" border="1px solid red">
        <Box width="100%" margin="0 auto" maxWidth="448px">
          <SignupForm
            isLoading={isLoading}
            onSubmit={handleSubmit}
            // error_message={error_message}
          />
        </Box>
      </Box>
      <RegistrationSuccess
        isOpen={isOpen}
        history={history}
      />
    </>
  );
}
