import React, { useState } from 'react';

export function useSearch({ initialValue, onChange }) {
    const [searchInputValue, setSearchInputValue] = useState(initialValue);

    function handleChange(event) {
        let value = event.target.value;
        setSearchInputValue(value)
        onChange && onChange(value)
    }
    return { searchInputValue, handleChange}
}