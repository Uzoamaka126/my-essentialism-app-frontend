import React from "react";
import { Box } from "@chakra-ui/core";
import { SignupForm } from "./SignupForm";
import { useToast, useDisclosure } from "@chakra-ui/core";
import { ToastBox } from "../../../Components";
// import { RegistrationSuccess } from "./RegistrationSuccess";
// import bg from '../../../Components/assets/auth_background.svg'

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
    // <>
     <Box height="100%">
        <Box border="1px solid blue">
          <Box
            width="450px"
            position="relative"
            right="0"
            left="0"
            max-width="95%"
            margin="5rem auto"
            perspective="1000px"
            border="1px solid red"
          >
            <SignupForm
              isLoading={isLoading}
              onSubmit={handleSubmit}
              // error_message={error_message}
            />
          </Box>
        </Box>
     </Box>
    //   {/* <RegistrationSuccess
    //     isOpen={isOpen}
    //     history={history}
    //   /> */}
    // {/* </> */}
  );
}
