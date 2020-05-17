import React, { useState } from "react";
import {
  Button,
  Box,
  Flex,
  Checkbox,
  Text,
  Image,
  Spinner,
  Stack,
  useDisclosure,
} from "@chakra-ui/core";
import { ModalValue } from "./ModalValue";
export function ValuesComponent({ values, history }) {
  const [list, setList] = useState([]);
  const [checkboxValue, setCheckboxValue] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const checkboxRef = React.useRef();

  console.log(checkboxRef);
  function addToList({ id, name }) {
    const valueObject = {
      id: id,
      name: name,
    };

    setList([...list, valueObject]);
  }

  function handleChange(event) {
    setCheckboxValue(event.target.checked);
    // setCheckboxValue([event.target.value]: event.target.name)
    console.log(checkboxValue);
  }

  if (!values) return <Spinner />;

  return (
    <Box>
      <Flex
        padding="1.5rem 1rem 1rem"
        marginBottom="5rem"
        justifyContent="space-between"
      >
        <Text fontSize="1.5rem" color="#2e2642" fontWeight="medium">
          What kind of values do you like?
        </Text>
        <Box>
          <Button color="#fff" background="#e91e63" onClick={onOpen}>
            Add Selected Values
          </Button>
        </Box>
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
            <Checkbox
              marginBottom="1rem"
              size="sm"
              value={checkboxValue}
              onChange={(e) => {
                console.log(e);
              }}
              marginRight="0.625rem"
              variantColor="blue"
              ref={checkboxRef}
              onClick={() => addToList({ id: index, name: item.name })}
            />
            <Image src={item.src} alt="" width="50px" height="50px" />
            <Text
              fontSize="1rem"
              marginBottom="0"
              fontWeight="normal"
              lineHeight="1.5"
              marginTop="0.625rem"
            >
              {item.name}
            </Text>
          </Box>
        ))}
      </Stack>
      <ModalValue isOpen={isOpen} onClose={onClose} history={history} />
    </Box>
  );
}
