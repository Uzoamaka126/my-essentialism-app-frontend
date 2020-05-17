import React, { useState } from "react";
// import { Search } from "../../../Components/Search";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Flex,
  Box,
  Text,
  Stack,
  useDisclosure,
  IconButton,
  Button,
} from "@chakra-ui/core";
import { ModalSingleValue } from "./components/values.modal";

export function CurrentValuesComponent({ values, history }) {
  const [myValuesList, setMyValuesList] = useState(values);
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure();

  function handleValuesSearch(event) {
    const value = event.target.value;
    setSearchQuery(value);

    if (value !== "" || value !== null) {
      const searchResult = myValuesList.filter((item) => item === value);
      setMyValuesList(searchResult);
    } else {
      return null;
    }
  }

  return (
    <Box>
      <Flex padding="1rem 0" border="" justifyContent="space-between">
        <Text color="" fontSize="1.2rem" fontWeight="medium">
          My Values
        </Text>
        {/* <Search
          value={searchQuery}
          placeholder="Search for values"
          onChange={handleValuesSearch}
        /> */}
        <Box>
          <InputGroup
            size="sm"
            display="flex"
            minWidth="300"
            alignItems="center"
          >
            <InputLeftElement>
              <Icon name="search" color="#c0c3cc" />
            </InputLeftElement>
            <Input
              type="search"
              value={searchQuery}
              onChange={handleValuesSearch}
              placeholder="Search for values"
              background="#f6f8fc"
              border="1px solid #eee"
              _focus={{ backgroundColor: "transparent" }}
            />
          </InputGroup>
        </Box>
      </Flex>
      <Box marginTop="1rem">
        <Text>No of Values: {myValuesList.length}</Text>
        <Stack
          flexWrap="wrap"
          width="fit-content"
          padding="1rem 1rem 3rem"
          spacing={6}
          isInline
        >
          {myValuesList.map((item, index) => (
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
              minWidth="400px"
              background="#fff"
                  key={index}
                  justifyContent="flex-start"
            >
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
                  <Flex>
                      <Button>View Projects</Button>
                      <IconButton name="delete" />
                  </Flex>
            </Box>
          ))}
        </Stack>
      </Box>
      <ModalSingleValue history={history} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
