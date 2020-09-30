import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { getToken } from "../../Utilities/localStorage";
import { Flex, Box, Link, Text } from "@chakra-ui/core";

function NavLink({ to, label, border }) {
  return (
    <Link
      marginRight="1.25rem"
      // color="#659893"
      color="#b3cbcd"
      fontSize="1rem"
      fontWeight="normal"
      _hover={{
        borderBottom: "2px solid #fff",
        fontWeight: "medium",
        textDecoration: "none",
        color: "#fff",
      }}
      as={RouterLink}
      border={border}
      to={to}
      padding="8px 10px"
    >
      {label}
    </Link>
  )
}
export function Navbar(props) {
  const token = getToken();

  return (
    <Flex 
      justifyContent="space-between" 
      padding="2rem 1.5rem" 
      minHeight="60px" 
      alignContent="center"
      width="100%"
    >
      <Box>
        <Text color="#b3cbcd" fontSize="1.5rem">Essentialism</Text>
      </Box>
      <Flex width="25%" justifyContent="space-between" paddingRight="1rem">
        <NavLink border="none" to="/" label="Home" />
        {/* <NavLink to="/about" label="About Us" /> */}
        {token ? (
          <NavLink border="none" to="/dashboard/home" label="Go to Dashboard" />
        ) : (
            <>
              <NavLink border="none" to="/login" label="Login" />
              <Link 
                border="1px solid #b3cbcd" 
                to="/signup"
                marginRight="1.25rem"
                color="#b3cbcd"
                fontSize="1rem"
                fontWeight="normal"
                as={RouterLink}
                padding="8px 10px"
                _hover={{
                  textDecoration: "none",
                  color: "#fff",
                  border:"1px solid #fff" 
                }}
                borderRadius="3px"
              >Sign Up</Link>
          </>
        )}
      </Flex>
    </Flex>
  );
}
