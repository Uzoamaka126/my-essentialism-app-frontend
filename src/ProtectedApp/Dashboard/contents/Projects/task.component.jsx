import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Checkbox,
  useDisclosure
} from "@chakra-ui/core";
import { EditTaskModal } from "./edit.task";


export function CustomCheckbox({ 
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

  function handleCheckAndDelete(event, id) {
    setChecked(!checked);
    console.log(event)
    // if(checked) {
    //   onDelete(id);
    // }
  }

  function handleDeleteTask(id) {
    alert(id)
    onDelete(id);
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
            onChange={(e) => handleCheckAndDelete(e, id)}
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
        <Flex>
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
            onClick={() => handleDeleteTask(id)}
          />
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
        </Flex>
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