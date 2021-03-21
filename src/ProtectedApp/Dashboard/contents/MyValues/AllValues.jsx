import React from "react";
import { Flex, Box, Text, Stack, IconButton } from "@chakra-ui/core";

export function AllValues({  values }) {
  return (
    <Box background="#fff">
      <Box>
        <Box marginTop="1.75rem" paddingLeft="1.25rem" paddingRight="1.25rem">
          <Stack
            flexWrap="wrap"
            width="fit-content"
            padding="1rem 1rem 3rem"
            spacing={6}
            isInline
          >
            {values &&
              values.map((item, index) => (
                <Flex
                  borderRadius="5px"
                  // boxShadow="0 6px 12px 0 rgba(51,51,51,0.1)"
                  marginX="0.625rem"
                  border="1px solid #e8f5f9"
                  height="auto"
                  maxHeight="200px"
                  padding="15px 20px 5px"
                  marginBottom="1.5rem"
                  minWidth="400px"
                  background="#fff"
                  key={index}
                >
                  <Box flex={4}>
                    <Text
                      fontSize="1.2rem"
                      marginBottom="0"
                      fontWeight="medium"
                      lineHeight="1.5"
                      marginTop="0.625rem"
                    >
                      Name here
                    </Text>
                    <Flex
                      justifyContent="space-between"
                      alignItems="flex-end"
                      marginTop="1.5rem"
                    >
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
      </Box>
    </Box>
  );
}
