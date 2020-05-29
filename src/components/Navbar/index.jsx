import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { getToken } from "../../Utilities/authenticationChecker";
import { Flex, Box, Stack, Link, Text } from "@chakra-ui/core";

function NavLink({ to, label }) {
  return (
    <Link
      _hover={{
        borderBottom: "3px solid #e91e63",
        textDecoration: "none",
        color: "#333",
      }}
      as={RouterLink}
      to={to}
    >
      {label}
    </Link>
  )
}
export function Navbar(props) {
  const token = getToken();

  return (
    <Flex justifyContent="space-between" padding="1rem 1.5rem">
      <Box>
        <Text>Essentialism</Text>
      </Box>
      <Stack isInline spacing={10} paddingRight="1rem">
        <NavLink to="/" label="Home" />
        <NavLink to="/about" label="About Us" />
        {token ? (
          <NavLink to="/dashboard/home" label="Go to Dashboard" />
        ) : (
            <Flex>
              <NavLink to="/login" label="Login" />
              <NavLink to="/signup" label="Sign Up" />
          </Flex>
        )}
      </Stack>
    </Flex>
  );
}
