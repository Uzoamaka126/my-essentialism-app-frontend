import React, { useState } from "react";
import { ModalContainer } from "../../../../../Components/ModalContainer";
import { ModalBody, Box, Button } from "@chakra-ui/core";
import Select from "react-select";
export function AddValueModal({ values, isOpen, onClose, handleAddValues }) {
  const [optionValue, setOptionValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const newArr = values.map((value) => ({
    label: value.name,
    value: value.id,
  }));

  return (
    <ModalContainer
      title=" What kind of values do you wish to have?"
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef
      showCloseButton
    >
      <ModalBody>
        <Select
          name="values-form-field"
          value={optionValue}
          onChange={(value) => {
            setOptionValue(value);
          }}
          inputValue={inputValue}
          onInputChange={(inputValue) => setInputValue(inputValue)}
          isMulti
          options={newArr}
          isClearable={false}
          backspaceRemovesValue
          removeSelected={false}
          isSearchable
        />
        <Box margin="1.25rem 0 2rem">
          <Button
            variant="solid"
            background="#e91e63"
            color="#fff"
            fontSize="0.875rem"
            fontWeight="medium"
            borderColor="#e91e63"
            onClick={() => handleAddValues(optionValue)}
          >
            Add Values
          </Button>
        </Box>
      </ModalBody>
    </ModalContainer>
  );
}
