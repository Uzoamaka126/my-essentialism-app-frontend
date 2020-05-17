import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getToken } from '../../Utilities/authenticationChecker';
import { Flex, Box, Stack, Link, Text } from '@chakra-ui/core';

export default function Navbar(props) {
    const token = getToken();
    
    return (
        <Flex justifyContent="space-between" padding="1rem 1.5rem">
            <Box>
                <Text>
                    Essentialism
                </Text>
            </Box>
                <Stack isInline spacing={20} border="1px solid red">
                    <Link as={RouterLink} to="/">Home</Link>
                    <Link as={RouterLink} to="/about">About Us</Link>
                    {token
                        ? 
                            <Link as={RouterLink} to="/dashbaord">Go to Dashboard</Link>
                        :
                            <Flex>
                                <Link marginRight="0.625rem" as={RouterLink} to="/login">Login</Link>
                                <Link as={RouterLink} to="/signup">SignUp</Link>
                            </Flex>
                    }
                </Stack>
        </Flex>
    )
}