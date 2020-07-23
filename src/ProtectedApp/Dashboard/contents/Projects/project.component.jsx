import React, { useState, useRef, useEffect } from "react";
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
  useDisclosure,
} from "@chakra-ui/core";
import { DeleteProjectModal } from "./delete.modal";
import { AddProjectModal } from "./add.modal";
import { Search, EmptyPage, FullPageSpinner } from "../../../../Components";
import { getState } from "../../../../Utilities/localStorage";
export function ProjectsComponent({ fetchProjects,
  fetchValues,
  addProjects,
  isLoading,
  error,
  success,
  history
}) {

  const id = getState() && getState().id;
  const [isDialogOpen, setIsDialogOpen] = useState();
  const onDialogClose = () => setIsDialogOpen(false);
  const cancelRef = useRef();
  // const [searchValue, setSearchValue] = useState("");
  const [values, setValues] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleGetProjects(id) {
    setLoading(true);
    fetchProjects(id)
      .then((response) => {
        console.log(response);
        setProjectsList(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false)
        setIsError(error);
    })
  }

  function handleAddProject(data) {
    addProjects(data)
       .then((response) => {
        console.log(response);
         setLoading(false);
         handleGetProjects(id);
      })
      .catch((error) => {
        setLoading(false)
        setIsError(error);
    })
  }

  useEffect(() => {
    fetchValues()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    if (id) {
      handleGetProjects(id);
    }
  }, [id]);

  if (loading && isLoading) return <FullPageSpinner />
  
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
              value={searchValue}
              placeholder="Search for values"
              onChange={handleValuesSearch}
            /> */}
          </Flex>
        </Box>
        {projectsList && !projectsList.length ? (
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
              <Text>
                Total no. of Projects: {projectsList && projectsList.length}
              </Text>
              <Button
                variant="outline"
                color="#e91e63"
                fontSize="0.875rem"
                fontWeight="medium"
                leftIcon="add"
                borderColor="#e91e63"
                _hover={{ background: "none" }}
                onClick={onOpen}
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
              {projectsList &&
                projectsList.map((item, index) => (
                  <Flex
                    borderRadius="5px"
                    marginX="0.625rem"
                    border="1px solid #e8f5f9"
                    height="auto"
                    // maxHeight="50px"
                    marginBottom="1.5rem"
                    maxWidth="100%"
                    width="30%"
                    background="transparent"
                    key={index}
                  >
                    <Box flex={4} padding="5px 10px">
                      <Flex
                        marginBottom="0.625rem"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text
                          fontSize="1rem"
                          marginBottom="0"
                          fontWeight="normal"
                          lineHeight="1.5"
                        >
                          {item.name}
                        </Text>
                        <Box>
                          <Badge
                            variantColor="purple"
                            fontSize="0.8rem"
                            textTransform="capitalize"
                            borderRadius="10px"
                          >
                            {item.valueName}
                          </Badge>
                        </Box>
                      </Flex>
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
                          to={`/dashboard/project/${item.id}`}
                        >
                          View project
                        </Link>
                        <IconButton
                          aria-label="delete"
                          variant="ghost"
                          icon="delete"
                          height="fit-content"
                          color="#e91e63"
                          onClick={() => setIsDialogOpen(true)}
                          _selected={{
                            border: "none",
                            background: "transparent",
                          }}
                          _focus={{
                            border: "none",
                            background: "transparent",
                          }}
                        />
                      </Flex>
                    </Box>
                  </Flex>
                ))}
            </Stack>
          </Box>
        )}
        <DeleteProjectModal
          onClose={onDialogClose}
          cancelRef={cancelRef}
          isOpen={isDialogOpen}
        />
        <AddProjectModal 
          isOpen={isOpen} 
          onClose={onClose} 
          history={history} 
          values={values}
          onSubmit={handleAddProject}
        />
      </Box>
    </Box>
  );
}
