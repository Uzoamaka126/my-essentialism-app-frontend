import React, { useEffect, useState } from "react";
import { ModalContainer } from "../ModalContainer";
import {
  ModalFooter,
  FormLabel,
  FormControl,
  Input,
  ModalBody,
  Select,
  useToast,
} from "@chakra-ui/core";
import PrimaryButton from "../Buttons/PrimaryButton";
import GreyOutlineButton from "../Buttons/GreyOutlineButton";
import { ToastBox } from "../../Components";

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
  const toast = useToast();

  function handleProjectNameChange(event) {
    setProjectName(event.target.value);
  }

  function handleSelectValueChange(event) {
    setValue(event.target.value);
  }

  async function handleAddProject(data) {
    const payload = {
      user_id: user?.id,
      value_id: selectedProjectValueObj?.id,
      project_name: projectName,
    };
    const result = await onSubmit(payload);
    if (!result) {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Unable to add project"} />,
      });
    } else {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"New project added"} />,
      });
      onClose();
    }
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
          onClick={handleAddProject}
          label="Create"
          disabledCondition={!projectName || !value}
        />
      </ModalFooter>
    </ModalContainer>
  );
}
