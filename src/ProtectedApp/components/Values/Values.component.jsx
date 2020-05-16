import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Checkbox,
  Text,
  Image,
  Spinner,
  Stack,
} from "@chakra-ui/core";
export function ValuesComponent({ values }) {
  const [list, setList] = useState([]);
  const [checkboxValue, setCheckboxValue] = useState("");

  function addToList() {}

    function handleChange(event) {
        setCheckboxValue(event.target.checked)
    }
  if (!values) return <Spinner />;

  return (
    <Box>
      <Box>
        <Text>Hi there!</Text>
        <Text>Choose your list of values</Text>
      </Box>

      <Stack
        flexWrap="wrap"
        width="fit-content"
        padding="3rem 1rem"
        spacing={6}
        isInline
      >
        {values.map((item, index) => (
          <Box
            borderRadius="5px"
            // boxShadow="0 6px 12px 0 rgba(51,51,51,0.1)"
            marginX="0.625rem"
            border="1px solid #e8f5f9"
            display="flex"
            flexDirection="column"
            alignItems="center"
            height="auto"
            maxHeight="200px"
            padding="15px 20px"
            marginBottom="1.5rem"
            background="#fff"
            key={index}
          >
            <Image alt="" />
            <Flex alignItems="center">
              <Checkbox
                marginBottom="0"
                size="sm"
                value={checkboxValue}
                marginRight="0.625rem"
              ></Checkbox>
              <Text
                fontSize="1.125rem"
                marginBottom="0"
                fontWeight="normal"
                lineHeight="1.5"
              >
                {item.name}
              </Text>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Box>
    // {/* // <li key={key}>
    //     <input
    //     onChange={handleChange}
    //     type="checkbox"
    //     id={`checkbox${key}`}
    //     value={name}
    //     />
    //     <label htmlFor={`checkbox${key}`}>{name}</label>
    // </li> */}
  );
}
