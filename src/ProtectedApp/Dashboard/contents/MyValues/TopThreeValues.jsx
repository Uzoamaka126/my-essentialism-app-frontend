import React from "react";
import {
  Flex,
  Box,
  Text,
  Stack,
  useDisclosure,
  IconButton,
  Button,
} from "@chakra-ui/core";
import { AddValueModal } from "../../../../Components/Modals/AddTopThreeValues";
import { EmptyPage } from "../../../../Components/EmptyPage";
import EmptyImage from "../../../../Components/assets/empty.svg";
import PrimaryButton from "../../../../Components/Buttons/PrimaryButton";

export function TopThreeValues({ topThreeValues, createTopValues, values }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
      <Box>
        <Box
          borderBottom="1px solid #E0E2E2"
          paddingBottom="1.25rem"
          paddingX="2rem"
        >
          <Flex paddingX="1rem" justifyContent="space-between">
            <Text color="#34403E" fontSize="20px" fontWeight="medium">
              Top Three Values
            </Text>
            <Text color="#34403E" fontSize="1.2rem" fontWeight="medium">
              Week 45
            </Text>
          </Flex>
          <Flex paddingX="1rem" justifyContent="space-between">
            <Text color="#556663" fontSize="0.8rem">
              (select three values you’d like to cultivate this week)
            </Text>
            <Text
              color="rgb(167,23,23,1)"
              fontSize="0.8rem"
              fontWeight="medium"
            >
              Sun 20th - Sat 27th
            </Text>
          </Flex>
        </Box>
        {topThreeValues && !topThreeValues.length ? (
          <Box width="100%" marginTop="3rem" paddingLeft="2rem">
            <EmptyPage
              height="auto"
              width="500px"
              image={EmptyImage}
              imageSize="50%"
              heading="You don't have any personal values yet"
              subheading="Click on the button below to add values to your list"
            >
              <PrimaryButton
                onClick={onOpen}
                label="Add values"
                leftIcon="add"
              />
            </EmptyPage>
          </Box>
        ) : (
          <Box marginTop="1.75rem" paddingLeft="1.25rem" paddingRight="1.25rem">
            <Flex
              width="100%"
              justifyContent="flex-end"
              marginBottom="1.5rem"
              paddingRight="1.25rem"
              paddingTop="1rem"
            >
              <Button
                variant="outline"
                color="#e91e63"
                fontSize="0.875rem"
                fontWeight="medium"
                leftIcon="add"
                borderColor="#e91e63"
                _hover={{ background: "none" }}
                onClick={onOpen}
                _disabled={topThreeValues.length >= 3 ? true : false}
              >
                Add values
              </Button>
            </Flex>
            <Stack
              flexWrap="wrap"
              width="fit-content"
              padding="1rem 1rem 3rem"
              spacing={6}
              isInline
            >
              {topThreeValues &&
                topThreeValues.map((item, index) => (
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
        )}
        <AddValueModal
          handleAddValues={createTopValues}
          values={values}
          isOpen={isOpen}
          onClose={onClose}
        />
      </Box>
    </Box>
  );
}
