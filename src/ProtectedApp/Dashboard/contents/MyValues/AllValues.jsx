import React from "react";
import { Flex, Box, Text, Stack, Image } from "@chakra-ui/core";
import { valuesList } from "../../../../dummyData/values";
import { valuesIcons } from "../../../../dummyData/valuesIcons";

export function AllValues({ values }) {
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
            {valuesList &&
              valuesList.map((item, index) => (
                <Flex
                  borderRadius="5px"
                  // boxShadow="0 6px 12px 0 rgba(51,51,51,0.1)"
                  marginX="0.625rem"
                  border="1px solid #e8f5f9"
                  height="200px"
                  maxHeight="200px"
                  padding="15px 20px 5px"
                  marginBottom="1.5rem"
                  minWidth="400px"
                  background="#fff"
                  key={index}
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box
                    style={{
                      //   background: item.url ? `url(${item.url})` : "",
                      background:
                        'url("../../../../../src/Components/assets/Quill.svg")',
                    }}
                  ></Box>

                  <Box flex={4}>
                    <Flex alignItems="center">
                      {/* <Text color="#717789" fontSize="14px">
                        Name:
                      </Text> */}
                      <Text
                        fontSize="1.15rem"
                        marginBottom="0"
                        fontWeight="medium"
                        color="#30333d"
                      >
                        {item.value_name}
                      </Text>
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
