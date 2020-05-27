import React from "react";
// import { Link as RouterLink } from "react-router-dom";
import checkmark from "../../../Components/assets/tick.svg";
import {
  Button,
  Box,
  Image,
  Text,
  Heading,
  // Link,
  ModalBody,
} from "@chakra-ui/core";
import { ModalContainer } from "../../../Components/ModalContainer";

export function RegistrationSuccess({ history, isOpen, onClose }) {
  function goToDashboard() {
    // const targetRoute = localStorage.getItem("target-route");
    // console.log(targetRoute);
    // const goToLocation = targetRoute ? targetRoute : "/dashboard/home";
    // history.push(goToLocation);
    history.push("/dashboard/home");
  }
  return (
    <ModalContainer
      title=" What kind of values do you wish to have?"
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef
    >
      <ModalBody>
        <Box>
          <Box>
            <Image alt="success" src={checkmark} />
          </Box>
          <Heading>Awesome!</Heading>
          <Text>You have successfully signed up!</Text>
        </Box>
        <Box margin="1.25rem 0 2rem">
          {/* <Link as={RouterLink} to="/dashboard/home"> */}
          <Button onClick={goToDashboard} variant="ghost" variantColor="pink">
            Go to Dashboard
          </Button>
          {/* </Link> */}
        </Box>
      </ModalBody>
    </ModalContainer>
  );
}
