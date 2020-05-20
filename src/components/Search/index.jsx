import React from "react";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/core";
import { useSearch } from "../../Utilities/_hooks/useSearch";

export function Search({ value, onChange, placeholder, minWidth = "300px" }) {
    
    return (
        <InputGroup size="sm" display="flex" minWidth={minWidth} alignItems="center">
            <InputLeftElement>
                <Icon name="search" color="#c0c3cc" />
            </InputLeftElement>
            <Input
                type="search"
                value={value}
                onChange={(event) => onChange(event.currentTarget.value)}
                placeholder={placeholder}
                background="rgb(230, 236, 240)"
                border="1px solid #e8f5f9"
                borderRadius="5px"
                _focus={{ backgroundColor: 'transparent' }}
            />
        </InputGroup>
    )
}
