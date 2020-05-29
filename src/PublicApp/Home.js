import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/core";
// Import assets
import BgImg from "../Components/assets/bg-img-2.svg";
import Park from "../Components/assets/Video park.svg";
// Import Components
import { Navbar } from "../Components";

//#53f, rgb(110, 214, 154), #6772e5;, #319795
export default function Home(props) {
  return (
    <Box>
      <Navbar />
      <Flex>
        <Box>
          <Box>
            <Text>Gain more control of your life as you go</Text>
            <Text>
              There is so much noise in the world today and it takes so little
              to get us distracted. We are here to help you discover values that
              helps cultivate your life
            </Text>
            {/* {token
                            ?
                            <Link to="/signup">
                            <Button>Get Started</Button>
                            </Link>
                            :
                            // <Link>
                            <Button>Start Now</Button>
                            </Link>}
                        } */}
          </Box>
          <Box>
            <Image src={BgImg} alt="background" />
          </Box>
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        border="1px solid red"
      >
        <Box>
          <Box>
            <Text>YOU CAN CHOOSE YOUR VALUES</Text>
            <Text>Choose What Matters To You</Text>
            <Text>
              With Essentialism, you get to list your values and what is most
              important to you as a person. We are here to help you discover
              values that helps cultivate your life
            </Text>
          </Box>
        </Box>
      </Flex>
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
