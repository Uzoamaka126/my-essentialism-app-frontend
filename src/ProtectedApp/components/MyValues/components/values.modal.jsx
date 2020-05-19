import React, { useState } from "react";
import { ModalContainer } from "../../../../Components/ModalContainer";
import { ModalBody } from "@chakra-ui/core";
import Select from "react-select";
export function AddValueModal({ valuesList, label, isOpen, onClose }) {
  const [optionValue, setOptionValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const newArr = valuesList.map((value) => ({
    label: value.name,
    value: value.name,
  }));

  return (
    <ModalContainer
      title=" What kind of values do you like?"
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef
      showCloseButton
    >
      <ModalBody>
        <Select
          name="values-form-field"
          value={optionValue}
          onChange={(value) => { setOptionValue(value); console.log(value)}}
          inputValue={inputValue}
          onInputChange={(inputValue) => setInputValue(inputValue)}
          isMulti
          options={newArr}
          isClearable={false}
          backspaceRemovesValue
          removeSelected={false}
          isSearchable
        />
      </ModalBody>
    </ModalContainer>
  );
}
