import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { getState } from '../../../../Utilities/localStorage'
import {
    FormControl,
    Input,
    Button,
  ButtonGroup
} from "@chakra-ui/core";

export function TaskForm({ addTask, onHide, onSubmit, isLoading }) {
    let { id } = useParams();
    const { id: userId } = getState() && getState().data;

    const [taskValue, setTaskValue] = useState("");

    function handleChange(event) {
        setTaskValue(event.target.value);
    }

    console.log(id, userId)

    return (
        <form
            style={{
                padding:"1rem 2rem",
                border:"1px solid #c4c4c4",
                borderRadius:"5px",
                width: "70%",
                marginLeft: "1rem"
    
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
                    onClick={() => onSubmit(
                        { 
                            userId: userId, 
                            project_id: id, 
                            task_name: taskValue 
                        }
                    )}
                    isLoading={isLoading}
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