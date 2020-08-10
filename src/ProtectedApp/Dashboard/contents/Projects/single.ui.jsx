import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
// import format from 'date-fns/esm/format'
import {
  Box,
  Flex,
  Text,
  Stack,
  ListItem,
  Link,
  Icon,
  IconButton,
  Button,
  useToast,
  Checkbox,
  useDisclosure
} from "@chakra-ui/core";
import { EmptyPage, FullPageSpinner, ToastBox } from "../../../../Components";
import { TaskForm } from "./add.task";
import { EditTaskModal } from "./edit.task";


function CustomCheckbox({ 
  label, 
  date, 
  id, 
  onDelete, 
  onEdit, 
  projectId,
  isLoading
}) {
  const [checked, setChecked] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // var formattedDate = format(date, 'DD/MMMM/YYYY')

  console.log(date);

  function handleCheckAndDelete(event) {
    setChecked(true);
    console.log(event)
    // if(checked) {
    //   onDelete(id);
    // }
  }
  
  return (
    <>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <Checkbox 
            size="md" 
            variantColor="teal"
            isChecked={checked}
            textDecoration={checked ? "line-through" : "none"}
            onChange={handleCheckAndDelete}
            fontSize="1rem" 
            fontWeight="normal"
            id="task"
            name="task"
            value={id}
          >
            {label}
          </Checkbox>
          <Box>
            {date && (
              <Text fontSize="0.75rem" color="#f44336">
                {/* {formattedDate} */}
              </Text>
            )}
          </Box>
        </Flex>
        <Box>
          <IconButton
            aria-label="delete"
            variant="ghost"
            icon="edit"
            height="fit-content"
            variantColor="gray"
            _selected={{
              border: "none",
              background: "transparent",
            }}
            _focus={{
              border: "none",
              background: "transparent",
            }}
            onClick={onOpen}
          />
        </Box>
        </Flex>
      <EditTaskModal 
        id={id} 
        label={label} 
        isOpen={isOpen} 
        onClose={onClose}
        onEdit={onEdit}
        projectId={projectId}
        isLoading={isLoading}
      />
  </>
  )
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
  tasks,
  isTaskLoading,
  task_error,
  task_success
}) {
  let { id } = useParams();
  const toast = useToast();

  const [showTaskForm, setShowTaskForm] = useState(false);
  const [hideAddBtn, setHideAddBtn] = useState(false);

  function handleShowTaskForm() {
    setShowTaskForm(true);
    setHideAddBtn(true);
  }

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
     if (task_error && isLoading === false) {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Unable to fetch project"} />,
      });
    }
  }

  function handleAddTask(data) {
    addTask(data)
      .then((response) => {
        toast({
          position: "bottom-left",
          render: () => <ToastBox message={"New task added"} />,
        });
        setShowTaskForm(false);
      })
      .catch(() => {
        toast({
          position: "bottom-left",
          render: () => <ToastBox message={"Unable to add new task"} />,
        });
      })
  }

  function handleDeleteTask(id) {
    deleteTask(id)
  }

  function handleUpdateTask(data) {
    updateTask(data)
    .then((response) => {
      handleFetchTasks(id);
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Task update successful"} />,
      });
    })
    .catch(() => {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Task update failed"} />,
      });
    })
  }
  
  useEffect(() => {
    handleFetchProjectData(id);
    handleFetchTasks(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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

  console.log(tasks);

  if (isLoading) return <FullPageSpinner />
  if (isTaskLoading) return <FullPageSpinner />

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
            {tasks && tasks.map((item, index) => (
              <ListItem
                listStyleType="none"
                borderBottom="1px solid #f0f0f0"
                paddingY="10px"
                key={index}
              >
                <CustomCheckbox
                  label={item.task_name}
                  date={item.createdAt}
                  onDelete={handleDeleteTask}
                  id={item.id}
                  onEdit={handleUpdateTask}
                  projectId={id}
                  isLoading={isLoading}
                />
              </ListItem>
              ))}
              </Stack>
          )}
          
        {!hideAddBtn && (
          <Button
          leftIcon="add"
          variantColor="teal"
          variant="ghost"
          onClick={handleShowTaskForm}
            marginLeft="10px"
            marginTop="10px"
        >
          Add task
        </Button>
        )}
        {!!showTaskForm && (
          <TaskForm
            addTask={addTask}
            onHide={() => { setShowTaskForm(false); setHideAddBtn(false); }}
            onSubmit={handleAddTask}
            isLoading={isLoading}
          />
        )}
      </Box>
    </Box>
  );
}
