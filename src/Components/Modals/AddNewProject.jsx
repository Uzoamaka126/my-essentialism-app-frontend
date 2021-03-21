import React, { useEffect, useState } from "react";
import { ModalContainer } from "../ModalContainer";
import {
  ModalFooter,
  FormLabel,
  FormControl,
  Input,
  Button,
  ModalBody,
  Select,
} from "@chakra-ui/core";
import PrimaryButton from "../Buttons/PrimaryButton";
import GreyOutlineButton from "../Buttons/GreyOutlineButton";

export function AddProjectModal({
  isOpen,
  onClose,
  values,
  onSubmit,
  addProjectState,
  user,
  setSelectedProjValue,
  selectedProjectValueObj,
}) {
  const [value, setValue] = useState("");
  const [projectName, setProjectName] = useState("");

  function handleProjectNameChange(event) {
    setProjectName(event.target.value);
  }

  function handleSelectValueChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit() {
    const payload = {
      user_id: user?.id,
      value_id: selectedProjectValueObj?.id,
      project_name: projectName,
    };
    onSubmit(payload);
  }

  useEffect(() => {
    if (value !== "") {
      setSelectedProjValue(value);
    }
  }, [value]);

  return (
    <ModalContainer
      title="Create a new project"
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef
    >
      <ModalBody>
        <FormControl marginTop="0.875rem">
          <FormLabel fontSize="0.8rem" color="#66748A">
            Select a value for this project
          </FormLabel>
          <Select value={value} onChange={handleSelectValueChange}>
            {values &&
              values.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.value_name}
                </option>
              ))}
          </Select>
        </FormControl>
        <FormControl marginTop="1.125rem">
          <FormLabel fontSize="0.8rem" color="#66748A">
            Give this project a name
          </FormLabel>
          <Input value={projectName} onChange={handleProjectNameChange} />
        </FormControl>
      </ModalBody>
      <ModalFooter
        fontWeight="medium"
        paddingY="1rem"
        background="#F7FAFC"
        border="1px solid #eee"
        marginTop="1.25rem"
      >
        <GreyOutlineButton onClick={onClose} label="Cancel" />
        <PrimaryButton
          marginLeft="0.625rem"
          loadingCondition={addProjectState === "loading"}
          onClick={handleSubmit}
          label="Create"
          disabledCondition={!projectName || !value}
        />
      </ModalFooter>
    </ModalContainer>
  );
}
