import React from "react";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/core";
import { useSearch } from "../../Utilities/_hooks/useSearch";

export function Search({ value, onChange, placeholder, minWidth = "300px" }) {
    const { searchInputValue, handleChange } = useSearch({ initialValue: value, onChange });
    
    return (
        <InputGroup size="sm" display="flex" minWidth={minWidth} alignItems="center">
            <InputLeftElement>
                <Icon name="search" color="#c0c3cc" />
            </InputLeftElement>
            <Input
                type="search"
                value={searchInputValue}
                onChange={handleChange}
                placeholder={placeholder}
                background="#f6f8fc"
                border="1px solid #eee"
                _focus={{ backgroundColor: 'transparent' }}
            />
        </InputGroup>
    )
}
