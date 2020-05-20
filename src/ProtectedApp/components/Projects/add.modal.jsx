import React from "react";
import { ModalContainer } from "../../../Components/ModalContainer";
import {
  ModalFooter,
  Flex,
  FormLabel,
  FormControl,
  Input,
  Button,
  ModalBody,
  Switch,
} from "@chakra-ui/core";

export function AddProjectModal({ history, isOpen, onClose }) {
  return (
    <ModalContainer
      title="Create a new project"
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef
    >
      <ModalBody>
        <FormControl marginTop="1rem">
          <FormLabel fontSize="0.8rem">Name of Project</FormLabel>
          <Input />
        </FormControl>
        <Flex align="center" marginTop="1.25rem">
          <Switch size="md" color="pink" id="email-alerts" />
          <FormLabel
            marginLeft="0.625rem"
            htmlFor="email-alerts"
            fontSize="0.8rem"
          >
            Mark as important
          </FormLabel>
        </Flex>
      </ModalBody>
      <ModalFooter
        fontWeight="medium"
        paddingY="1rem"
        background="#fbfbfb"
        border="1px solid #eee"
      >
        <Button variant="ghost" fontSize="0.8rem" onClick={onClose}>
          Cancel
        </Button>
        <Button
          marginLeft="0.625rem"
          background="#e91e63"
                  fontSize="0.8rem"
                  color="#fff"
          mr={3}
        >
          Add
        </Button>
      </ModalFooter>
    </ModalContainer>
  );
}
