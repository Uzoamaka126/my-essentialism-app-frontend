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
  useToast
} from "@chakra-ui/core";
import { AddProjectModal } from "./add.modal";
import { EmptyPage, FullPageSpinner, ToastBox } from "../../../../Components";
import { getState } from "../../../../Utilities/localStorage";
export function ProjectsComponent({
  fetchValues,
  addUserProject,
  isLoading,
  error,
  success,
  history,
  fetchUserProjects,
  values,
  projects,
  addError,
  addSuccess,
  addLoading,
  fetchSingleProject
}) {

  const id = getState() && getState().data.id; 
  const [projectsList, setProjectsList] = useState([
    {
      id: 1,
      project_name: "jaye",
      value_name: "creativity"
    },
    {
      id: 2,
      project_name: "jaye",
      value_name: "creativity"
    },
    {
      id: 3,
      project_name: "jaye",
      value_name: "creativity"
    }
  ]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const toast = useToast();

  function handleFetchProjects() {
    fetchUserProjects();
    // setProjectsList(projects);

    if (error && isLoading === false) {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Unable to fetch project"} />,
      });
    }
  }

  function handleAddProject(data) {
    addUserProject(data)
      .then((response) => {
        console.log(response);
        toast({
          position: "bottom-left",
          render: () => <ToastBox message={"New project added"} />,
        });
        onClose();
        handleFetchProjects();
        })
        .catch(() => {
          toast({
            position: "bottom-left",
            render: () => <ToastBox message={"Unable to add project"} />,
          });
        })
  }

  // useEffect(() => {
  //   markProjectAsImportant();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSwitch]);

  useEffect(() => {
    fetchValues()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  
  // useEffect(() => {
  //   handleFetchProjects();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  if (isLoading) return <FullPageSpinner />
  
  if (error) {
    return (
      <Box width="50%" margin="auto" height="auto">
        <Text>Unable to load project. Please try again!</Text>
        <Button
          rightIcon="repeat"
          variantColor="teal"
          variant="solid"
          onClick={fetchUserProjects}
        >
          Reload
        </Button>
      </Box>
  )
  }
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
        {projectsList && projectsList.length === 0 ? (
          <Box width="100%" marginTop="3rem">
            <EmptyPage
              height="auto"
              width="500px"
                // image={EmptyImage}
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
              marginBottom="2rem"
              paddingRight="1.25rem"
            >
              <Text fontSize="0.875rem">
                Total no. of Projects: {projects && projects.length}
              </Text>
              {/* <Button
                variant="outline"
                // color="#e91e63"
                  variantColor="teal"
                fontSize="0.875rem"
                fontWeight="medium"
                leftIcon="add"
                borderColor="teal"
                _hover={{ background: "none" }}
                onClick={onOpen}
              >
                Add a project
              </Button> */}
              <IconButton
                variant="outline"
                variantColor="teal"
                aria-label="Send email"
                icon="add"
                isRound
                  onClick={onOpen}
                  size="sm"
              />
            </Flex>
            {/* Project List */}
            <Stack
              flexWrap="wrap"
              width="100%"
              spacing={6}
              isInline
              border="1px solid red"
              marginTop="1rem"
            >
              {projectsList &&
                projectsList.map((item, index) => (
                  <Flex
                    borderRadius="5px"
                    border="1px solid #eee"
                    height="auto"
                    marginBottom="1.5rem"
                    maxWidth="30%"
                    width="30%"
                    background="transparent"
                    key={index}
                    rounded="md"
                    borderWidth="1px"
                  >
                    <Box flex={4} padding="5px 10px">
                      <Flex
                        marginBottom="1.5rem"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text
                          fontSize="1rem"
                          marginBottom="0"
                          fontWeight="normal"
                          lineHeight="1.5"
                        >
                          {item.project_name}
                        </Text>
                        <Box>
                          <Badge
                            variantColor="purple"
                            fontSize="0.8rem"
                            textTransform="capitalize"
                            borderRadius="10px"
                          >
                            {item.value_name}
                          </Badge>
                        </Box>
                      </Flex>
                      <Flex
                        justifyContent="space-between"
                        alignItems="flex-end"
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
        <AddProjectModal 
          isOpen={isOpen} 
          onClose={onClose} 
          history={history} 
          values={values}
          onSubmit={handleAddProject}
          // onSwitchChange={handleSwitchChange}
          // switchValue={isSwitch}
          addError={addError}
          addSuccess={addSuccess}
          addLoading={addLoading}
        />
      </Box>
    </Box>
  );
}
