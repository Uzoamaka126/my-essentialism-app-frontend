import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { getToken } from "../../Utilities/localStorage";
import { Flex, Box, Stack, Link, Text } from "@chakra-ui/core";

function NavLink({ to, label }) {
  return (
    <Link
      marginRight="1.25rem"
      // color="#659893"
      color="#b3cbcd"
      fontSize="1rem"
      fontWeight="normal"
      _hover={{
        // borderBottom: "2px solid #095c60",
        borderBottom: "2px solid #fff",
        fontWeight: "medium",
        textDecoration: "none",
        color: "#fff",
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
    <Flex justifyContent="space-between" padding="2rem 1.5rem" minHeight="60px" alignContent="center">
      <Box>
        <Text color="#b3cbcd" fontSize="1.5rem">Essentialism</Text>
      </Box>
      <Stack isInline paddingRight="1rem">
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
