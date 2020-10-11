import React from "react";
import { Box, Flex, Text, Image, Link, Button } from "@chakra-ui/core";
import BgImg from "../Components/assets/big-shoes-1.svg";
import Park from "../Components/assets/progress.svg";
import { Link as RouterLink } from "react-router-dom";
import { getToken } from "../Utilities/localStorage";
import Logo from "../Components/assets/Logo.svg";

function NavLink({ to, label }) {
  return (
    <Link
      fontSize="1rem"
      fontWeight="normal"
      color="#5A5A5A"
      _hover={{
        borderBottom: "2px solid #5a5a5a",
        fontWeight: "medium",
        textDecoration: "none",
        color: "#5A5A5A",
      }}
      as={RouterLink}
      to={to}
      padding="8px 10px"
    >
      {label}
    </Link>
  );
}
function Navbar(props) {
  const token = getToken();

  return (
    <Flex
      justifyContent="space-between"
      padding="1rem 20px"
      minHeight="60px"
      alignContent="center"
      width="100%"
      marginRight="-1px"
      marginBottom="-1px"
      height="auto"
    >
      <Box maxHeight="50px">
        <Image src={Logo} visibility="inherit" width="100%" height="100%" />
      </Box>
      <Flex width="25%">
        {token ? (
          <NavLink border="none" to="/dashboard/home" label="Go to Dashboard" />
        ) : (
          <>
            <NavLink border="none" to="/login" label="Login" />
            <Button bg="#2D7992" color="#fff" _hover={{ bg: "teal" }} size="md">
              <Link textDecoration="none" as={RouterLink} to="/signup">
                Signup
              </Link>
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default function Home(props) {
  return (
    <Box width="100%" background="#fff">
      <Navbar />
      <Flex
        background="#fff"
        height="auto"
        paddingLeft="20px"
        paddingRight="20px"
        maxWidth="1400px"
        paddingTop="100px"
      >
        <Flex
          paddingLeft="20px"
          paddingRight="20px"
          paddingTop="1rem"
          width="50%"
          alignSelf="center"
          flexDirection="column"
        >
          <Text
            fontSize="50px"
            color="#2D3335"
            fontWeight="semibold"
            lineHeight="61px"
          >
            Smart way to easily cultivate values
          </Text>
          <Text
            lineHeight="35px"
            paddingTop="0.625rem"
            color="#585858"
            fontSize="27px"
            marginTop="0.8rem"
          >
            Put in time to improve the quality of your life
          </Text>
            <Link
              as={RouterLink}
              to="/signup"
              marginTop="2.5rem"
              bg="#fff"
              color="#2D7992"
              border="1px solid #2D7992"
              _hover={{ bg: "#2D7992", color: "#fff", textDecoration: "none" }}
              padding="1.2rem 0.5rem"
              maxWidth="211px"
              textAlign="center"
              borderRadius="5px"
            >
              Get Started
            </Link>
        </Flex>
        <Box
          width="45%"
          paddingTop="1rem"
        >
          <Image src={BgImg} alt="background" width="100%" height="100%" />
        </Box>
      </Flex>
    </Box>
  );
}
