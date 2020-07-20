import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/core";
import BgImg from "../Components/assets/bg-img-2.svg";
import Park from "../Components/assets/Video park.svg";
import { Navbar } from "../Components";

//#53f, rgb(110, 214, 154), #6772e5;, #319795
export default function Home(props) {
  return (
    <Box width="100%" background="#f8f8f8">
      {/* color="#263b3c" f8f8f8*/}
      <Box
        background="#025559"
        height="auto"
        paddingLeft="20px"
        paddingRight="20px"
      >
        <Navbar />
        <Flex
          // border="1px solid red"
          paddingLeft="20px"
          paddingRight="20px"
          justifyContent="space-between"
          paddingTop="1rem"
          paddingBottom="1.5rem"
        >
          <Box width="40%" alignSelf="center">
            <Text fontSize="45px" color="#fefefe" fontWeight="semibold">
              Gain more control of your life as you go.
            </Text>
            <Text paddingTop="1rem" color="#e1ebec" fontSize="20px">
              There is so much noise in the world today and it takes so little
              to get us distracted. We are here to help you discover values that
              helps cultivate your life
            </Text>
          </Box>
          <Flex width="40%">
            <Image src={BgImg} alt="background" />
          </Flex>
        </Flex>
      </Box>
      <Box
        // border="1px solid #c4c4c4"
        marginTop="3.5rem"
        width="60%"
        marginLeft="auto"
        marginRight="auto"
        // borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        textAlign="center"
        background="#fff"
        padding="1rem 0"
      >
        <Box>
          <Text color="#22373a" fontSize="36px" marginBottom="1rem" fontWeight="medium">YOU CAN CHOOSE YOUR VALUES</Text>
          <Text>
            You get to list your values and what is most
            important to you as a person. We are here to help you discover
            values that helps cultivate your life as you go.
          </Text>
        </Box>
      </Box>
      <Flex border="1px solid green" alignItems="center">
        <Box flexGrow={2} width="40%">
          <Image src={Park} alt="background" />
        </Box>
        <Box flexGrow={1} width="30%" border="3px solid black" height="auto">
          <Text>YOU CAN MANAGE YOUR TIME</Text>
          <Text>Sit down and relax</Text>
          <Text>
            There is so much noise in the world today and it takes so little to
            get us distracted. We are here to help you discover values that
            helps cultivate your life
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
