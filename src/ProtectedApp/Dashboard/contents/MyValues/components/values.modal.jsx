import React, { useState } from "react";
import { ModalContainer } from "../../../../../Components/ModalContainer";
import { ModalBody, Box, Button, Select } from "@chakra-ui/core";
// import Select from "react-select";


export function AddValueModal({ isOpen, onClose, handleAddValues, values, id }) {
  const [optionValue, setOptionValue] = useState("");

  function handleChange(event) {
    setOptionValue(event.target.value)
  }
  console.log(id);

  function handleAddTopValue(data) {
    handleAddValues(data);
  }

  return (
    <ModalContainer
      title=" What kind of values do you wish to have?"
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef
      showCloseButton
    >
      <ModalBody>
        <Select placeholder="Select option" value={optionValue} onChange={handleChange}>
          {values && values.map((item, index) => (
             <option key={index} value={item.value_name}>{item.value_name}</option>
          ))}
        </Select>
        <Box margin="1.25rem 0 2rem">
          <Button
            variant="solid"
            background="#e91e63"
            color="#fff"
            fontSize="0.875rem"
            fontWeight="medium"
            borderColor="#e91e63"
            onClick={() => handleAddTopValue({value: optionValue})}
          >
            Add Values
          </Button>
        </Box>
      </ModalBody>
    </ModalContainer>
  );
}
