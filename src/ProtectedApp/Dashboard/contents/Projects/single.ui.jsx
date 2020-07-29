import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Stack,
  ListItem,
  Link,
  Icon,
  VisuallyHidden,
  ControlBox,
  Button,
  useToast
} from "@chakra-ui/core";
import { EmptyPage, FullPageSpinner, ToastBox } from "../../../../Components";


function CustomCheckbox({ label, date }) {
  return (
    <label style={{ display: "flex" }}>
      <VisuallyHidden as="input" type="checkbox" />
      <ControlBox
        borderWidth="1px"
        size="16px"
        rounded="sm"
        borderRadius="20px"
        padding="10px"
        _checked={{ bg: "white", color: "teal", borderColor: "teal" }}
        _focus={{ borderColor: "teal", boxShadow: "none" }}
      >
        <Icon name="check" size="16px" />
      </ControlBox>
      <Flex width="100%" as="span" verticalAlign="top" ml={3}>
        <Box>
          <Text as="span" color="#333" fontSize="0.875rem" fontWeight="normal">
            {label}
          </Text>
          <Box>
            <Text fontSize="0.75rem" color="#f44336">
              {date}
            </Text>
          </Box>
        </Box>
        <Box>{/* Action Buttons here */}</Box>
      </Flex>
    </label>
  );
}
export function SingleProjectComponent({
  fetchSingleProject,
  project,
  project_success,
  project_error,
  isLoading,
  addTask,
  deleteTask,
  updateTask,
  fetchTasks,
  error_message,
  tasks
}) {
  let { id } = useParams();
  const toast = useToast();

  function handleFetchProjectData(id) {
    fetchSingleProject(id);

    if (project_error && isLoading === false) {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Unable to fetch project"} />,
      });
    }
  }

  function handleFetchTasks(id) {
    fetchTasks(id);
     if (project_error && isLoading === false) {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Unable to fetch project"} />,
      });
    }
  }
  
  useEffect(() => {
    handleFetchProjectData(id);
    handleFetchTasks(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

    if (isLoading) return <FullPageSpinner />

  if (project_error || !project) {
    return (
      <Flex 
        width="100%"
        height="100%" 
        justifyContent="center"
        alignItems="center"
      >
        <Box
          margin="10rem auto"
          padding="1rem"
        >
          <Text fontSize="1.5rem">
            Unable to load project and tasks.
          </Text>
          <Text fontSize="1.15rem" marginTop="0.625rem">Please try again!</Text>
          <Button
            rightIcon="repeat"
            variantColor="teal"
              variant="solid"
              marginTop="1rem"
            onClick={handleFetchProjectData}
          >
            Reload
          </Button>
      </Box>
      </Flex>
    )
  }
  return (
    <Box>
      <Box>
        {/* Project Heading */}
        {!!project ? (
           <Flex
            padding="1rem 0"
            paddingLeft="1.25rem"
            paddingRight="1.25rem"
            justifyContent="space-between"
            borderBottom="1px solid #eee"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Link
                marginRight="0.625rem"
                as={RouterLink}
                to="/dashboard/projects"
                _focus={{ borderColor: "none", border: "none" }}
                _selected={{ borderColor: "none", border: "none" }}
              >
                <Icon name="arrow-back" />
              </Link>
              <Text color="#333" fontSize="1.2rem" fontWeight="medium">
                {project.project_name}
              </Text>
            </Flex>
            <Text fontSize="0.8rem" fontWeight="normal" color="red">
              Date Created here
            </Text>
          </Flex>
       ): null}
        {tasks && tasks.length === 0 ? (
          <Box width="100%" marginTop="3rem">
            <EmptyPage
              height="auto"
              width="500px"
                // image={EmptyImage}
              imageSize="50%"
              heading="You don't have any tasks yet"
              subheading="What kind of projects do you want to do?"
            >
            </EmptyPage>
          </Box>
        ) : (
            <Stack marginTop="2rem" paddingX="1.25rem">
              <ListItem
                listStyleType="none"
                borderBottom="1px solid #f0f0f0"
                paddingY="10px"
              >
                <CustomCheckbox
                  label="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                  date="Nov 2019"
                />
              </ListItem>
        </Stack>
        )}
      </Box>
    </Box>
  );
}
