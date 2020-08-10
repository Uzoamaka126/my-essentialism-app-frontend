import React, { useState } from "react";
import { Box, Flex, Text, Image, IconButton } from "@chakra-ui/core";
import BgImg from "../Components/assets/bg-img-2.svg";
import Park from "../Components/assets/progress.svg";
import { Navbar } from "../Components";

//#53f, rgb(110, 214, 154), #6772e5;, #319795

function CutOutText() {
  const [step, setStep] = useState(1);

  function Value({ label }) {
    return (
      <Box
        color="#333"      
        fontSize="5vw" 
        fontWeight="bold"
        margin="0 auto"      
        width="50%"
        textAlign="center"
        padding="1.5rem 0"
      >{label}</Box>
    )
  }
  function nextStep() {
    setStep(step + 1);
  }

  function previousStep() {
    setStep(step - 1);
  }

  function renderSteps() {
    switch (step) {
      case 1:
        return <Value 
          previousStep={previousStep} 
          nextStep={nextStep} 
          label="Career"
        />;
      case 2:
        return <Value 
          previousStep={previousStep} 
          nextStep={nextStep} 
          label="Communication"
        />;      
      case 3:
        return <Value 
          previousStep={previousStep} 
          nextStep={nextStep} 
          label="Creativity"
        />;
      case 4:
        return <Value 
          previousStep={previousStep} 
          nextStep={nextStep} 
          label="Friendship"
        />;
        case 5:
          return <Value 
            previousStep={previousStep} 
            nextStep={nextStep} 
            label="And many more..."
          />;
      default:
        return <Value 
        previousStep={previousStep} 
        nextStep={nextStep} 
        label="Athletics"
      />;
    }
  }
  return (
    <Box marginBottom="-1px">
     <Box 
      padding="1.5rem 0"
      >
        {renderSteps()}
        </Box>
     <Flex
          marginTop="0.625rem"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton
            variant="ghost"
            color="#e91e63"
            _focus={{ border: "none" }}
            isDisabled={step === 1 ? true : false}
            onClick={previousStep}
            aria-label="go to previous"
            icon="chevron-left"
            size="lg"
            fontSize="30px"
          >
            Prev
          </IconButton>
          <IconButton
            variant="ghost"
            color="#e91e63"
            _focus={{ border: "none" }}
            aria-label="go to next"
            icon="chevron-right"
            isDisabled={step === 5 ? true : false}
            onClick={nextStep}
            size="lg"
            fontSize="30px"
          >
            Next
          </IconButton>
        </Flex>
    </Box>
  )
}

export default function Home(props) {
  return (
    <Box width="100%" background="#fff">
      <Box
        background="#025559"
        height="auto"
        paddingLeft="20px"
        paddingRight="20px"
      >
        <Navbar />
        <Flex
          paddingLeft="20px"
          paddingRight="20px"
          justifyContent="space-between"
          paddingTop="1rem"
          paddingBottom="1.5rem"
        >
          <Box width="40%" alignSelf="center">
            <Text 
              fontSize="45px" 
              color="#fefefe" 
              fontWeight="semibold"
              lineHeight="43px"
              >
              Cultivate the values you want.
            </Text>
            <Text paddingTop="1rem" color="#e1ebec" fontSize="20px">
              Outline values that are important to you and stick to them as you live your life
            </Text>
          </Box>
          <Flex width="40%">
            <Image src={BgImg} alt="background" />
          </Flex>
        </Flex>
      </Box>
      <Box
        marginTop="3.5rem"
        width="60%"
        marginLeft="auto"
        marginRight="auto"
        rounded="lg"
        overflow="hidden"
        textAlign="center"
        background="#fff"
        padding="1rem 0"
      >
        <Box>
          <Text 
            color="#22373a" 
            fontSize="36px" 
            marginBottom="1rem" 
            fontWeight="semibold"
            >
              You can choose your values
            </Text>
          <Text 
            fontSize="1.3125rem" 
            lineHeight="1.5" 
            letterSpacing="-.01em"
            >
            You get to list your values and what is most
            important to you as a person. We are here to help you discover
            values that helps cultivate your life as you go.
          </Text>
        </Box>
      </Box>
      <Box marginTop="4rem" height="auto">
        <CutOutText />
      </Box>
      <Flex alignItems="center" marginTop="4rem">
        <Box width="50%" marginLeft="4rem">
          <Text
            color="#22373a" 
            fontSize="36px" 
            marginBottom="1rem" 
            fontWeight="semibold"
          >
            You can manage your time
          </Text>
          <Text
            fontSize="1.3125rem" 
            lineHeight="1.5" 
            letterSpacing="-.01em"
          >
            Wherever we are, we should always find the time to sit down and relax.
          </Text>
          <Text
            fontSize="1.3125rem" 
            lineHeight="1.5" 
            letterSpacing="-.01em"
          >
            There is so much noise in the world today and it takes so little to
            get us distracted. We are here to help you discover values that
            help cultivate your life.
          </Text>
        </Box>
        <Box width="40%" maxWidth="495px" maxHeight="470px">
          <Image src={Park} alt="background" />
        </Box>
      </Flex>
    </Box>
  );
}
