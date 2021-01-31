import React from "react";
import { Box } from "@chakra-ui/core";
import { Header } from "./Header";

export function Content({ children, logout, ...props }) {
  return (
    <Box as="main" flex="1" width="calc(100% - 215px)" {...props}>
      <Header logout={logout} />
      <Box
        minH="calc(100vh - 100px)"
        background="#fff"
        width="100%"
        overflow="auto"
        position="fixed"
        paddingLeft="215px"
      >
        <Box height="100%" overflow="auto">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
