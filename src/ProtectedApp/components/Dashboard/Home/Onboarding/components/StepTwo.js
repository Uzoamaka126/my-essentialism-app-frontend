import React from "react";
import { Box, Text } from "@chakra-ui/core";

export function StepTwo(props) {
  return (
    <Box>
      <Text fontSize="24px" fontWeight="semibold">
        You can select from a pre-defined list of 20 values.
      </Text>
      <Text fontSize="20px" fontWeight="normal">
        These values have been carefully picked and fit into neat categories.
      </Text>
    </Box>
  );
}
