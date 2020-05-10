import React from "react";
import { Box, Text } from "@chakra-ui/core";

export function StepThree(props) {
  return (
    <Box>
      <Text fontSize="24px" fontWeight="semibold">
        Create projects to do under a particular value.
      </Text>
      <Text fontSize="20px" fontWeight="normal">
       After selecting a value, create as many projects as you would like under the selected value.
      </Text>
    </Box>
  );
}
