import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
    FormControl,
    Input,
    Button,
  ButtonGroup
} from "@chakra-ui/core";

export function TaskForm({ addTask, onHide }) {
    const [taskValue, setTaskValue] = useState("");

    function handleChange(event) {
        setTaskValue(event.target.value);
    }
    function handleAddTask(task) {
        addTask({

        })
    }
    return (
        <form
            style={{
                padding:"1rem 2rem",
                border:"1px solid #c4c4c4",
                borderRadius:"5px",
                width: "70%",
    
            }}
            >
            <FormControl marginBottom="1rem">
                <Input
                    value={taskValue}
                    onChange={handleChange}
                />
            </FormControl>
            <ButtonGroup>
                <Button
                    isDisabled={taskValue === null}
                    variant="solid"
                    variantColor="teal"
                    onClick={handleAddTask}
                >
                    Add
                </Button>
                <Button
                    variant="ghost"
                    variantColor="gray"
                    onClick={onHide}
                >
                    Cancel
                </Button>
            </ButtonGroup>
        </form>
    )
}