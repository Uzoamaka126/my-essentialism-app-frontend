import React from 'react';
import { Box } from '@chakra-ui/core';

export function ToastBox({ message }) {
    return (
        <Box
            m={3}
            p={3}
            bg="#d2eef3"
            color="#007489"
            roundedLeft="4px"
            roundedRight="4px"
        >
            {message}
        </Box>
    );
}
