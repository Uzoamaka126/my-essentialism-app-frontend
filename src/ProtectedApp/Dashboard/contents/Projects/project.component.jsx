import React, { useEffect, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
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
  useToast,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Divider,
} from "@chakra-ui/core";
import { AddProjectModal } from "../../../../Components/Modals/AddNewProject";
import { EmptyPage, ToastBox } from "../../../../Components";
import PrimaryButton from "../../../../Components/Buttons/PrimaryButton";
import EmptyImage from "../../../../Components/assets/empty.svg";

const id = "1";

export function EditProjectText({ name, onSubmit, projectId, value_id }) {
  const toast = useToast();
  const [nameValue, setNameValue] = useState(name || "");

  function handleChange(value) {
    setNameValue(value);
  }

  function EditableControls({
    isEditing,
    onSubmit,
    onCancel,
    onRequestEdit,
    nameValue,
    value_id,
    projectId,
  }) {
    const [isLoading, setIsLoading] = useState(false);

    function handleUpdateProject(data, id) {
      // setIsLoading(true);
      // onSubmit(data, id)
      //   .then((response) => {
      //     toast({
      //       position: "bottom-left",
      //       render: () => <ToastBox message={"Project updated"} />,
      //     });
      //     setIsLoading(false);
      //     onCancel();
      //   })
      //   .catch(() => {
      //     toast({
      //       position: "bottom-left",
      //       render: () => <ToastBox message={"Unable to update project"} />,
      //     });
      //     setIsLoading(false);
      //   });
    }

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <Button
          variant="ghost"
          variantColor="teal"
          fontSize="14px"
          padding="0"
          paddingBottom="0"
          onClick={() =>
            handleUpdateProject(
              {
                user_id: id,
                value_id: value_id,
                project_name: nameValue,
              },
              projectId
            )
          }
          isLoading={isLoading}
        >
          Save
        </Button>
        <Button
          variant="ghost"
          variantColor="teal"
          fontSize="14px"
          padding="0"
          paddingBottom="0"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </ButtonGroup>
    ) : (
      <Flex justifyContent="flex-end">
        <IconButton
          variant="ghost"
          variantColor="gray"
          fontSize="14px"
          fontWeight="medium"
          padding="0"
          aria-label="edit"
          paddingBottom="0"
          icon="edit"
          onClick={onRequestEdit}
        />
      </Flex>
    );
  }

  return (
    <Editable
      textAlign="center"
      value={nameValue}
      onChange={handleChange}
      fontSize="14px"
      isPreviewFocusable={false}
      submitOnBlur={false}
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      width="100%"
      marginTop="14px"
    >
      {(props) => (
        <>
          <EditablePreview marginLeft="0" marginRight="0" />
          <EditableInput marginLeft="0" marginRight="0" />
          <EditableControls
            onSubmit={onSubmit}
            nameValue={nameValue}
            value_id={value_id}
            projectId={projectId}
            {...props}
          />
        </>
      )}
    </Editable>
  );
}

export function ProjectsComponent({
  addUserProject,
  fetchProjectsState,
  values,
  projects,
  addProjectState,
  fetchSingleProject,
  updateUserProject,
  deleteUserProject,
  user,
  setSelectedProjValue,
  selectedProjectValueObj,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const toast = useToast();

  function handleDeleteProject(id) {
    deleteUserProject(id)
      .then((response) => {
        toast({
          position: "bottom-left",
          render: () => <ToastBox message={"Project has been deleted"} />,
        });
      })
      .catch((error) => {
        toast({
          position: "bottom-left",
          render: () => <ToastBox message={"Unable to add project"} />,
        });
      });
  }

  function handleOpenAddModal() {
    onOpen();
  }

  async function handleAddProject(data) {
    const result = await addUserProject(data);
    if (!result) {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Unable to add project"} />,
      });
    } else {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"New project added"} />,
      });
      onClose();
    }
  }

  return (
    <Box>
      <Box>
        <Box borderBottom="1px solid rgba(0,0,0,.05)" paddingLeft="15px">
          <Flex
            padding="1rem 0"
            justifyContent="space-between"
            paddingLeft="1.25rem"
            paddingRight="1.25rem"
          >
            <Text color="#153e75" fontSize="1.2rem" fontWeight="medium">
              My Projects
            </Text>
          </Flex>
        </Box>
        {projects.length === 0 ? (
          <Box width="100%" marginTop="10rem">
            <EmptyPage
              height="auto"
              width="500px"
              image={EmptyImage}
              imageSize="50%"
              heading="You don't have any projects yet"
              subheading="What kind of projects do you want to do?"
            >
              <PrimaryButton
                label="Add a project"
                marginTop="1rem"
                onClick={handleOpenAddModal}
                leftIcon="add"
              />
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
              <Button
                variant="ghost"
                variantColor="teal"
                fontSize="0.875rem"
                fontWeight="medium"
                leftIcon="add"
                borderColor="teal"
                _hover={{ background: "none" }}
                onClick={onOpen}
                marginRight="1.3rem"
              >
                Add a project
              </Button>
            </Flex>
            {/* Project List */}
            <Stack
              flexWrap="wrap"
              width="100%"
              spacing={6}
              isInline
              marginTop="1rem"
            >
              {projects.map((item, index) => (
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
                    <Flex justifyContent="center">
                      <Badge
                        variantColor="purple"
                        fontSize="0.8rem"
                        textTransform="capitalize"
                        borderRadius="10px"
                      >
                        {item.value_name}
                      </Badge>
                    </Flex>
                    <Flex marginBottom="0.625rem">
                      <EditProjectText
                        name={item.project_name}
                        onSubmit={updateUserProject}
                        projectId={item.id}
                        value_id={item.value_id}
                      />
                    </Flex>
                    <Divider />
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      marginBottom="0.625rem"
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
                        onClick={() => handleDeleteProject(item.id)}
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
          values={values}
          onSubmit={handleAddProject}
          addProjectState={addProjectState}
          user={user}
          setSelectedProjValue={setSelectedProjValue}
          selectedProjectValueObj={selectedProjectValueObj}
        />
      </Box>
    </Box>
  );
}
