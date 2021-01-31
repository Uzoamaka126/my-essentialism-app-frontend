import React from "react";
import { Box, Text } from "@chakra-ui/core";
export function Wrapper({ children }) {
  return (
    <Box
      borderRadius="5px"
      width="fit-content"
      padding="0.625rem 1rem"
      marginX="auto"
      background="#fff"
      boxShadow=""
      maxHeight="200px"
      height="200px"
    >
      {children}
    </Box>
  );
}

export function Title({ heading }) {
  return (
    <Text
      fontSize="1.3rem"
      color="rgb(0, 54, 72)"
      fontWeight="semibold"
      padding="0 1.2rem"
    >
      {heading}
    </Text>
  );
}

export function SubTitle({ text }) {
  return (
    <Text
      color="#8f8f8f"
      fontSize="1.1rem"
      fontWeight="normal"
      marginTop="1rem"
      padding="0 1.2rem"
    >
      {text}
    </Text>
  );
}
