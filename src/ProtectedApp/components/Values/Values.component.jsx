import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Spinner,
  Stack,
  // useDisclosure,
} from "@chakra-ui/core";
// import { ModalValue } from "./ModalValue";
export function ValuesComponent({ values, history, isLoading, error }) {
  const [list, setList] = useState([]);

  // const { isOpen, onOpen, onClose } = useDisclosure();

  function addToList({ id, name }) {
    const valueObject = {
      id: id,
      name: name,
    };

    setList([...list, valueObject]);
  }

  if (!values) return <Spinner />;

  return (
    <Box>
      <Flex
        padding="1.5rem 1rem 1rem"
        marginBottom="3rem"
      >
        <Text fontSize="1.5rem" color="#2e2642" fontWeight="medium">
          All Values
        </Text>
      </Flex>

      <Stack
        flexWrap="wrap"
        width="fit-content"
        padding="1rem 1rem 3rem"
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
            minWidth="200px"
            background="#fff"
            key={index}
          >
            <Text
              fontSize="1rem"
              marginBottom="0"
              fontWeight="normal"
              lineHeight="1.5"
              marginTop="0.625rem"
            >
              {item.value_name}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
