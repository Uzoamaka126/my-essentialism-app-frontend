import React, { useState } from "react";
import { ModalContainer } from "../../../../Components/ModalContainer";
import {
  ModalFooter,
  FormLabel,
  FormControl,
  Input,
  Button,
  ModalBody,
} from "@chakra-ui/core";
import { getState } from "../../../../Utilities/localStorage";

export function EditTaskModal({ 
  isOpen,
  onClose,
  id,
  label,
  onEdit,
  projectId,
  isLoading,
}) {

  const { id: userId } = getState() && getState().data;
  const[value, setValue] = useState(label || '');

  function handleChange(event, data) {
      setValue(event.target.value);
  }
 
  return (
    <ModalContainer
      title="Update this task"
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef
    >
      <ModalBody>
        <FormControl marginTop="1rem">
          <FormLabel fontSize="0.8rem">Name of Project</FormLabel>
          <Input 
            value={value} 
            onChange={handleChange} 
          />
        </FormControl>
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
          mr={3}
          isLoaidng={isLoading}
          onClick={() => onEdit({
            id: id,
            userId: userId,
            project_id: projectId,
            task_name: value
          })}
        >
          Update
        </Button>
      </ModalFooter>
    </ModalContainer>
  );
}
