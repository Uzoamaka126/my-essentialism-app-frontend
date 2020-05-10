import React from "react";
import { Box } from "@chakra-ui/core";

export function Content({ children, ...props }) {
  return (
    <Box as="main" flex="1" width="calc(100% - 212px)" {...props}>
      {children}
    </Box>
  );
}
