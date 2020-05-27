import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { getToken } from "../../Utilities/authenticationChecker";
import { Flex, Box, Stack, Link, Text } from "@chakra-ui/core";

export default function Navbar(props) {
  const token = getToken();

  return (
    <Flex justifyContent="space-between" padding="1rem 1.5rem">
      <Box>
        <Text>Essentialism</Text>
      </Box>
      <Stack isInline spacing={10} paddingRight="1rem">
        <Link
          _hover={{
            borderBottom: "3px solid #e91e63",
            textDecoration: "none",
            color: "#333",
          }}
          as={RouterLink}
          to="/"
        >
          Home
        </Link>
        <Link
          _hover={{
            borderBottom: "3px solid #e91e63",
            textDecoration: "none",
            color: "#333"
          }}
          as={RouterLink}
          to="/about"
        >
          About Us
        </Link>
        {token ? (
          <Link
            _hover={{
              borderBottom: "3px solid #e91e63",
              textDecoration: "none",
              color: "#333"
            }}
            as={RouterLink}
            to="/dashboard/home"
          >
            Go to Dashboard
          </Link>
        ) : (
          <Flex>
            <Link
              _hover={{
                borderBottom: "3px solid #e91e63",
                textDecoration: "none",
                color: "#333",
              }}
              marginRight="0.625rem"
              as={RouterLink}
              to="/login"
            >
              Login
            </Link>
            <Link
              _hover={{
                borderBottom: "3px solid #e91e63",
                textDecoration: "none",
                color: "#333",
              }}
              as={RouterLink}
              to="/signup"
            >
              SignUp
            </Link>
          </Flex>
        )}
      </Stack>
    </Flex>
  );
}
