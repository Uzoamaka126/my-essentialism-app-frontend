import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
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
  Link,
} from "@chakra-ui/core";
import { ModalSingleValue } from "./components/values.modal";

export function CurrentValuesComponent({ values, history }) {
  const [myValuesList, setMyValuesList] = useState(values);
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure();

  function handleValuesSearch(event) {
    const value = event.target.value;
    setSearchQuery(value);

    if (value) {
      const searchResult = myValuesList.filter((item) => item === value);
      setMyValuesList(searchResult);
    } else {
      setMyValuesList(values);
    }
  }

  return (
    <Box background="#fff">
      <Box>
        <Box borderBottom="1px solid rgba(0,0,0,.05)">
          <Flex
            padding="1rem 0"
            justifyContent="space-between"
            paddingLeft="1.25rem"
            paddingRight="1.25rem"
          >
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
        </Box>
              <Box marginTop="1.75rem" paddingLeft="1.25rem"
                  paddingRight="1.25rem"
>
          <Text>No of Values: {myValuesList.length}</Text>
          <Stack
            flexWrap="wrap"
            width="fit-content"
            padding="1rem 1rem 3rem"
            spacing={6}
            isInline
          >
            {myValuesList.map((item, index) => (
              <Flex
                borderRadius="5px"
                // boxShadow="0 6px 12px 0 rgba(51,51,51,0.1)"
                marginX="0.625rem"
                border="1px solid #e8f5f9"
                //   alignItems="center"
                height="auto"
                maxHeight="200px"
                padding="15px 20px 5px"
                marginBottom="1.5rem"
                minWidth="400px"
                background="#fff"
                key={index}
                //   justifyContent="flex-start"
              >
                <Box alignItems="center" flex={1}>
                  <Image src={item.src} alt="" width="50px" height="50px" />
                </Box>
                <Box flex={4}>
                  <Text
                    fontSize="1.2rem"
                    marginBottom="0"
                    fontWeight="medium"
                    lineHeight="1.5"
                    marginTop="0.625rem"
                  >
                    {item.name}
                  </Text>
                  <Flex
                    justifyContent="space-between"
                    alignItems="flex-end"
                    marginTop="1.5rem"
                  >
                    <Link
                      variant="link"
                      color="#3bb75e"
                      fontSize="14px"
                      fontWeight="medium"
                      padding="0"
                      paddingBottom="0"
                      as={RouterLink}
                      to={`/dashboard/values/me/current/${index}`}
                    >
                      View Projects
                    </Link>
                    <IconButton
                      aria-label="delete"
                      variant="ghost"
                      icon="delete"
                      height="fit-content"
                      color="#e91e63"
                    />
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>
        <ModalSingleValue history={history} isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
}
