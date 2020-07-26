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
  addLoading
}) {

  const id = getState() && getState().data.id;
  const [important, setImportant] = useState("unimportant")
  const[isSwitch, setIsSwitch] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const toast = useToast();

  console.log(id, projects);
  console.log(isSwitch);

  function handleSwitchChange(event) {
    setIsSwitch(!isSwitch);
  }

  function markProjectAsImportant() {
    if(isSwitch) {
      setImportant("important")
    }
  }

  function handleAddProject(data) {
    addUserProject(data);
    if (addError) {
      // toast notification here
       toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Unable to add project"} />,
      });
    }
    if (addSuccess) {
      // toast notification here
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Project added"} />,
      });
      fetchUserProjects();
      onClose();
    }
  }

  useEffect(() => {
    markProjectAsImportant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSwitch]);

  useEffect(() => {
    fetchValues()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  
  useEffect(() => {
      fetchUserProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {projects && projects.length < 0 ? (
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
              marginBottom="1.5rem"
              paddingRight="1.25rem"
              paddingTop="1rem"
            >
              <Text fontSize="0.875rem">
                Total no. of Projects: {projects && projects.length}
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
            {/* Project List */}
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
                          {important === "important" ? (
                             <Badge
                            variantColor="purple"
                            fontSize="0.8rem"
                            textTransform="capitalize"
                            borderRadius="10px"
                          >
                            {important}
                          </Badge>
                         ): null}
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
          onSwitchChange={handleSwitchChange}
          switchValue={isSwitch}
          addError={addError}
          addSuccess={addSuccess}
          addLoading={addLoading}
        />
      </Box>
    </Box>
  );
}
