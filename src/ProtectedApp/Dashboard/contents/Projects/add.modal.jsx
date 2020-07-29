import React, { useState } from "react";
import { ModalContainer } from "../../../../Components/ModalContainer";
import {
  ModalFooter,
  Flex,
  FormLabel,
  FormControl,
  Input,
  Button,
  ModalBody,
  Switch,
  Select
} from "@chakra-ui/core";
import { getState } from "../../../../Utilities/localStorage";

export function AddProjectModal({ 
  history, 
  isOpen, 
  onClose, 
  values, 
  onSubmit,
  // onSwitchChange,
  // switchValue,
  addSuccess,
  addError,
  addLoading
}) {

  const { id } = getState() && getState().data;

  const[value, setValue] = useState("");
  const[projectName, setProjectName] = useState("");
  
  function handleProjectNameChange(event) {
    setProjectName(event.target.value)
  };

  function handleSelectValueChange(event) {
    setValue(event.target.value);
  }

  function combinedValues() {
    if (!!value && !!projectName && !!id) {
      const newValues = {
        user_id: id,
        value_id: value,
        project_name: projectName
      };
      return newValues;
    }
  }
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
          <Input value={projectName} onChange={handleProjectNameChange} />
        </FormControl>
        <FormControl marginTop="0.875rem">
          <FormLabel fontSize="0.8rem">Associated Value</FormLabel>
          <Select value={value} onChange={handleSelectValueChange}>
            {values && values.map((item, index) => (
              <option key={index} value={item.id}>{item.value_name}</option>
            ))}
          </Select>
        </FormControl>
        {/* <Flex align="center" marginTop="1.25rem">
          <Switch
            size="sm"
            color="teal"
            id="email-alerts"
            value={switchValue}
            onChange={onSwitchChange}
          />
          <FormLabel
            marginLeft="0.625rem"
            htmlFor="email-alerts"
            fontSize="0.8rem"
          >
            Mark as important
          </FormLabel>
        </Flex> */}
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
          variantColor="teal"
          fontSize="0.8rem"
          variant="solid"
          isLoading={addLoading}
          mr={3}
          onClick={() => onSubmit(combinedValues())}
        >
          Add
        </Button>
      </ModalFooter>
    </ModalContainer>
  );
}
