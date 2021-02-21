import React from "react";
import { Box, Flex, Text, Image, Link, Stack } from "@chakra-ui/core";
import BgImg from "../Components/assets/big-shoes.png";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Logo from "../Components/assets/Logo.svg";
import Select from "../Components/assets/select_values.svg";
import Create from "../Components/assets/create.svg";
import Tick from "../Components/assets/Tick_Off.svg";
import Family from "../Components/assets/family-values.svg";
import FooterBg from "../Components/assets/footer_bg.svg";
import NavBar from "./Landing/components/NavBar";
import ImageAndText from "./Landing/components/ImageAndText";
import PrimaryButton from "../Components/Buttons/PrimaryButton";

export default function Home(props) {
  const history = useHistory();

  return (
    <Box width="100%" background="#fff" height="100%">
      <NavBar />
      <Box
        minHeight="calc(100vh - 100px)"
        position="relative"
        marginTop="70px"
        transform="translateY(18px)"
        transition="transform .8s"
      >
        <Flex
          alignItems="center"
          background="#fff"
          height="auto"
          maxWidth="1400px"
          paddingX="60px"
          paddingY="70px"
          marginX="auto"
          overflow="hidden"
        >
          <Flex width="100%">
            <Box maxWidth="500px" width="50%">
              <Text
                fontSize="50px"
                color="#2D3335"
                fontWeight="semibold"
                lineHeight="50px"
              >
                Smart way to easily cultivate values
              </Text>
              <Text
                lineHeight="35px"
                color="#585858"
                fontSize="24px"
                marginTop="20px"
                marginBottom="24px"
              >
                Put in time to improve the quality of your life
              </Text>
              <PrimaryButton label="Get Started" onClick={() => history.push("/signup")} />
            </Box>
            <Box width="calc(100% - 530px)" alignSelf="flex-start">
              <Image
                objectFit="cover"
                src={BgImg}
                alt="background"
                width="100%"
                height="100%"
              />
            </Box>
          </Flex>
        </Flex>
        <Box paddingY="70px" bg="#F5FAFF">
          <Flex
            maxWidth="80%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="0 auto"
          >
            <Text
              fontSize="30px"
              color="#2D3335"
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
              marginY="70px"
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
          </Flex>
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
                <Image
                  objectFit="cover"
                  src={Logo}
                  width="100%"
                  height="100%"
                />
              </Box>
              <Text fontSize="0.8rem">Copyright @2020</Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
