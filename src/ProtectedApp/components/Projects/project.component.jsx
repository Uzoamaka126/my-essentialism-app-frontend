import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  IconButton,
  Button,
  Badge,
} from "@chakra-ui/core";
import { EmptyPage } from "../../../Components/EmptyPage";
export function ProjectsComponent({ projects }) {
  return (
    <Box>
      <Box>
        <Box borderBottom="1px solid rgba(0,0,0,.05)">
          <Flex
            padding="1rem 0"
            justifyContent="space-between"
            paddingLeft="1.25rem"
            paddingRight="1.25rem"
          >
            <Text color="" fontSize="1.2rem" fontWeight="medium">
              My Projects
            </Text>
            {/* <Search
              value={searchQuery}
              placeholder="Search for values"
              onChange={handleValuesSearch}
            /> */}
          </Flex>
        </Box>
        {projects && !projects.length ? (
          <Box width="100%" marginTop="3rem">
            <EmptyPage
              height="auto"
              width="500px"
              //   image={EmptyImage}
              imageSize="50%"
              heading="You don't have any projects yet"
              subheading="What kind of projects do you want to do?"
            >
              <Button
                variant="outline"
                color="#e91e63"
                fontSize="0.875rem"
                fontWeight="medium"
                borderColor="#e91e63"
                _hover={{ background: "none" }}
              >
                Add a project
              </Button>
            </EmptyPage>
          </Box>
        ) : (
          <Box marginTop="1.75rem" paddingLeft="1.25rem" paddingRight="1.25rem">
            <Flex
              width="100%"
              justifyContent="space-between"
              marginBottom="1.5rem"
              paddingRight="1.25rem"
              paddingTop="1rem"
            >
              <Text>Total no. of Projects: {projects && projects.length}</Text>
              <Button
                variant="outline"
                color="#e91e63"
                fontSize="0.875rem"
                fontWeight="medium"
                leftIcon="add"
                borderColor="#e91e63"
                _hover={{ background: "none" }}
              >
                Add a project
              </Button>
            </Flex>
            <Stack
              flexWrap="wrap"
              width="fit-content"
              padding="1rem 1rem 3rem"
              spacing={6}
              isInline
            >
              {projects &&
                projects.map((item, index) => (
                  <Flex
                    borderRadius="5px"
                    marginX="0.625rem"
                    border="1px solid #e8f5f9"
                    height="auto"
                    // maxHeight="50px"
                    padding="5px"
                    marginBottom="1.5rem"
                    maxWidth="100%"
                    width="100%"
                    background="#fff"
                    key={index}
                  >
                    <Box>
                      <Badge>{item.valueName}</Badge>
                    </Box>
                    <Box flex={4}>
                      <Text
                        fontSize="1rem"
                        marginBottom="0"
                        fontWeight="normal"
                        lineHeight="1.5"
                      >
                        {item.name}
                      </Text>
                      <Flex
                        justifyContent="space-between"
                        alignItems="flex-end"
                        marginTop="0.3rem"
                      >
                        <Link
                          variant="link"
                          color="#3bb75e"
                          fontSize="14px"
                          fontWeight="medium"
                          padding="0"
                          paddingBottom="0"
                          as={RouterLink}
                          to={`/dashboard/values/me/current/${item.value}`}
                        >
                          View Tasks
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
        )}
      </Box>
    </Box>
  );
}
