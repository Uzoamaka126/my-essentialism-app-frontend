import React from "react";
// import { Search } from "../../../Components/Search";
import {
  Image,
  Flex,
  Box,
  Text,
} from "@chakra-ui/core";

export function CurrentValuesComponent({ item }) {
  return (
    <Box paddingLeft="1.25rem" paddingRight="1.25rem">
      <Flex padding="1rem 0" border="" justifyContent="space-between">
        <Text color="" fontSize="1.2rem" fontWeight="medium">
          {item.name}
        </Text>
      </Flex>
      <Box marginTop="1rem">
        <Flex
          borderRadius="5px"
          marginX="0.625rem"
          border="1px solid #e8f5f9"
          height="auto"
          maxHeight="200px"
          padding="15px 20px"
          marginBottom="1.5rem"
          minWidth="400px"
          background="#fff"
        >
          <Box alignItems="center" flex={1}>
            <Image src={item.src} alt="" width="50px" height="50px" />
          </Box>
          <Box flex={4} paddingBottom="0">
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
        </Flex>
      </Box>
    </Box>
  );
}
