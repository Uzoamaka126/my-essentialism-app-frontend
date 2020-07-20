import React from "react";
// import { Link as RouterLink } from "react-router-dom";
import checkmark from "../../../Components/assets/tick.svg";
import {
  Button,
  Box,
  Image,
  Text,
  Heading,
  Flex,
  ModalBody,
} from "@chakra-ui/core";
import { ModalContainer } from "../../../Components/ModalContainer";

export function RegistrationSuccess({ history, isOpen }) {
  function goToDashboard() {
    history.push("/dashboard/home");
  }

  return (
    <ModalContainer isOpen={isOpen} initialFocusRef title="Registration Successful">
      <ModalBody>
        <Flex
          width="fit-content"
          margin="2rem auto"
          flexDirection="column"
          justifyContent="center"
        >
          <Box width="80px" margin="1rem auto">
            <Image alt="success" src={checkmark} />
          </Box>
          <Heading textAlign="center">Awesome!</Heading>
          <Text textAlign="center">You have successfully signed up!</Text>
          <Button
            marginX="auto"
            marginTop="0.875rem"
            onClick={goToDashboard}
            variant="outline"
            variantColor="pink"
          >
            Go to Dashboard
          </Button>
        </Flex>
      </ModalBody>
    </ModalContainer>
  );
}
