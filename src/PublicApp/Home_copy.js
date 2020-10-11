import React from "react";
import { Box, Flex, Text, Image, Link, Stack } from "@chakra-ui/core";
import BgImg from "../Components/assets/big-shoes.png";
import { Link as RouterLink } from "react-router-dom";
import { getToken } from "../Utilities/localStorage";
import Logo from "../Components/assets/Logo.svg";
import Select from "../Components/assets/select_values.svg";
import Create from "../Components/assets/create.svg";
import Tick from "../Components/assets/Tick_Off.svg";
import Family from "../Components/assets/family-values.svg";
import FooterBg from "../Components/assets/footer_bg.svg";

function NavLink({ to, label }) {
  return (
    <Link
      fontSize="1rem"
      fontWeight="normal"
      color="#5A5A5A"
      _hover={{
        borderBottom: "2px solid #025559",
        fontWeight: "medium",
        textDecoration: "none",
        color: "#025559",
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
      <Box width="25%">
        {token ? (
          <NavLink border="none" to="/dashboard/home" label="Go to Dashboard" />
        ) : (
          <>
            <NavLink border="none" to="/login" label="Login" />
            <Link
              as={RouterLink}
              to="/signup"
              bg="#025559"
              color="#fff"
              _hover={{
                background: "teal",
                color: "#fff",
                textDecoration: "none",
              }}
              padding="10px 1rem"
              marginLeft="20px"
              display="inline-block"
              textAlign="center"
              borderRadius="5px"
              fontSize="1rem"
              transition="ease-in-out 0.3s all"
              border="none"
            >
              Get Started
            </Link>
          </>
        )}
      </Box>
    </Flex>
  );
}

function ImageAndText({ src, label, alt, imageWidth }) {
  return (
    <Box>
      <Box width={imageWidth} maxWidth="280px" height="160px" marginX="auto">
        <Image width="100%" height="100%" src={src} alt={alt} />
      </Box>
      <Text marginTop="40px" fontSize="22px" color="#585858" textAlign="center">
        {label}
      </Text>
    </Box>
  );
}
export default function Home(props) {
  return (
    <Box width="100%" background="#fff">
      <Navbar />
      <Box
        background="#fff"
        height="auto"
        paddingX="20px"
        maxWidth="1400px"
        paddingY="100px"
      >
        <Flex>
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
              lineHeight="60px"
            >
              Smart way to easily cultivate values
            </Text>
            <Text
              lineHeight="35px"
              color="#585858"
              fontSize="27px"
              marginY="24px"
            >
              Put in time to improve the quality of your life
            </Text>
            <Link
              as={RouterLink}
              to="/signup"
              bg="#fff"
              color="#025559"
              border="1px solid #025559"
              _hover={{ bg: "#025559", color: "#fff", textDecoration: "none" }}
              padding="1.2rem 0.5rem"
              maxWidth="211px"
              textAlign="center"
              borderRadius="5px"
            >
              Get Started
            </Link>
          </Flex>
          <Box width="45%" paddingTop="1rem">
            <Image
              objectFit="cover"
              src={BgImg}
              alt="background"
              width="100%"
              height="100%"
            />
          </Box>
        </Flex>
      </Box>
      <Box paddingY="100px" bg="#F5FAFF">
        <Text
          fontSize="30px"
          color="#585858"
          fontWeight="semibold"
          lineHeight="60px"
          textAlign="center"
        >
          How Essentialism Works
        </Text>
        <Stack
          isInline
          spacing={10}
          align="center"
          paddingX="50px"
          marginTop="40px"
        >
          <ImageAndText
            alt="woman selecting stuff"
            src={Select}
            imageWidth="280px"
            label="Select areas of your life that you’d like to improve"
          />
          <ImageAndText
            alt="woman selecting stuff"
            src={Create}
            imageWidth="250px"
            label="Create projects and tasks to be done around those areas"
          />
          <ImageAndText
            alt="woman selecting stuff"
            src={Tick}
            imageWidth="280px"
            label="Tick off projects when you are done with them"
          />
        </Stack>
      </Box>
      <Box>
        <Flex paddingY="100px" paddingX="100px">
          <Flex width="40%" flexDirection="column">
            <Text
              fontSize="30px"
              color="#585858"
              fontWeight="semibold"
              // lineHeight="60px"
              textAlign="left"
            >
              A task manager for cultivating your values
            </Text>
            <Link
              as={RouterLink}
              to="/signup"
              bg="#025559"
              marginTop="30px"
              color="#fff"
              _hover={{
                background: "teal",
                color: "#fff",
                textDecoration: "none",
              }}
              transition="ease-in-out 0.3s all"
              padding="1.2rem 0.5rem"
              textAlign="center"
              borderRadius="5px"
              maxWidth="250px"
            >
              Sign up
            </Link>
          </Flex>
          <Box width="40%">
            <Image
              width="100%"
              height="auto"
              src={Family}
              alt="picture of a family"
            />
          </Box>
        </Flex>
      </Box>
      <Box width="100%">
        <Box width="100%" bgImage={`url(${FooterBg})`} backgroundSize="cover">
          <Flex
            justifyContent="space-between"
            padding="50px"
            alignItems="flex-end"
          >
            <Box maxHeight="50px" height="50px">
              <Image objectFit="cover" src={Logo} width="100%" height="100%" />
            </Box>
            <Text fontSize="0.8rem">Copyright @2020</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
