import React, { useState } from "react";
import { ModalContainer } from "../../../../../Components/ModalContainer";
import { ModalBody, Box, Button, Text } from "@chakra-ui/core";
import Select from "react-select";
import randomColor from "randomcolor";
import PrimaryButton from "../../../../../Components/Buttons/PrimaryButton";

export function AddValueModal({ isOpen, onClose, handleAddValues, values }) {
  const [optionValues, setOptionValues] = useState([]);
  const [warning, setWarning] = useState("");

  function handleSelectChange(options) {
    setOptionValues(options);
  }

  function handleAddTopValue(data) {
    if (optionValues.length > 3) {
      setWarning("Please select a maximum of 3 values");
    }
    handleAddValues(data);
  }

  const options = values.map((item, index) => {
    let updatedItem = {
      value: item?.value_name,
      label: item?.value_name,
      color: randomColor(),
    };
    return updatedItem;
  });

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
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          value={optionValues}
          onChange={handleSelectChange}
        />
        <Box marginY="1rem">
          <Text color="#ed6486" fontSize="14px">
            {warning}Please select a maximum of 3 values
          </Text>
        </Box>
        <Box margin="1.25rem 0 2rem">
          <PrimaryButton
            onClick={handleAddTopValue}
            condition={optionValues.length <= 0 ? true : false}
            label="Add Values"
          />
        </Box>
      </ModalBody>
    </ModalContainer>
  );
}
