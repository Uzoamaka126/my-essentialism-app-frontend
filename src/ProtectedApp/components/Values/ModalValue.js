import React from "react";
import { ModalContainer } from "../../../Components/ModalContainer";
import {
  Box,
  Text,
  Flex,
  Alert,
  AlertIcon,
  AlertDescription,
  Button,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";

export function ModalValue({ history, isOpen, onClose }) {
  return (
    <ModalContainer
      title="Value(s) successfully added"
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef
    >
      <ModalCloseButton />
      <ModalBody>
        <Alert
          marginBottom="2rem"
          marginTop="1rem"
          status="success"
          padding="1.5rem 1rem"
        >
          <AlertIcon />
          <AlertDescription>
            <Text fontSize="0.875rem">
              You have added your values. Please click <strong>"Next"</strong>
              to go to go to your value list page
            </Text>
          </AlertDescription>
        </Alert>
        <Flex marginBottom="1.5rem" width="100%" justifyContent="flex-end">
          <Button
            rightIcon="chevron-right"
            color="#fff"
                      background="#e91e63"
            fontSize="1rem"
            onClick={() => {
              history.push("/dashboard/values/me/current");
            }}
          >
            Next
          </Button>
        </Flex>
      </ModalBody>
    </ModalContainer>
  );
}
