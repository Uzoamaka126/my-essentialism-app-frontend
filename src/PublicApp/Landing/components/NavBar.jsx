import React from "react";
import { Link, Box, Image, Flex } from "@chakra-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { getToken } from "../../../Utilities/localStorage";
import HomeNavLink from "./NavLink";
import Logo from "../../../Components/assets/Logo.svg";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";

export default function NavBar({ to, label }) {
  const token = getToken();
  const history = useHistory();

  return (
    <Flex
      height="70px"
      alignContent="center"
      width="100%"
      // position="fixed"
      boxShadow="0 4px 13px rgb(0 0 0 / 5%)"
      left={0}
      top={0}
      zIndex={99}
    >
      <Flex
        paddingX="60px"
        maxWidth="1500px"
        margin="0 auto"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box height="100%">
          <Image src={Logo} visibility="inherit" width="100%" height="100%" />
        </Box>
        <Box>
          {token ? (
            <HomeNavLink
              border="none"
              to="/dashboard/home"
              label="Go to Dashboard"
            />
          ) : (
            <Flex alignContent="center">
              <HomeNavLink border="none" to="/login" label="Login" />
              <PrimaryButton
                label="Sign up"
                onClick={() => history.push("/signup")}
              />
            </Flex>
          )}
        </Box>
      </Flex>
    </Flex>
  );
}
