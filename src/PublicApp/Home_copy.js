import React, { useState } from "react";
import { Box, Flex, Text, Image, IconButton, Link } from "@chakra-ui/core";
import BgImg from "../Components/assets/bg-img-1.svg";
import Park from "../Components/assets/progress.svg";
import { Link as RouterLink } from "react-router-dom";
import { getToken } from "../Utilities/localStorage";
import Logo from "../Components/assets/Logo.svg";

function CutOutText() {
  const [step, setStep] = useState(1);

  function Value({ label }) {
    return (
      <Box
        color="#5a5a5a"      
        fontSize="4vw" 
        fontWeight="bold"
        margin="0 auto"      
        width="50%"
        textAlign="center"
        padding="1.5rem 0"
        borderRadius="10px"
        boxShadow="0.00px 3.00px 15px 3px rgba(0,0,0,0.15)"
        background="#fff"
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
            color="#025559"
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
            color="#025559"
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
        color: "#5A5A5A"
      }}
      as={RouterLink}
      to={to}
      padding="8px 10px"
      marginRight="2rem"
    >
      {label}
    </Link>
  )
}
function Navbar(props) {
  const token = getToken();

  return (
    <Flex 
      justifyContent="center" 
      padding="2rem 1.5rem" 
      minHeight="60px" 
      alignContent="center"
      // margin-left="calc((100% - 980px) / 2)"
      width="100%"
      // width="980px"
      marginRight="-1px"
      marginBottom="-1px"
    >
      <Box height="41px">
        <Image src={Logo} 
          visibility="inherit"
          width="100%"
          height="100%"
        />
      </Box>
      <Flex width="25%" marginLeft="4rem">
        <NavLink border="none" to="/" label="Home" />
        {token ? (
          <NavLink border="none" to="/dashboard/home" label="Go to Dashboard" />
        ) : (
            <>
              <NavLink border="none" to="/login" label="Login" />
              <NavLink border="none" to="/signup" label="Sign up" />
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
        background="#f0f0f0"
        height="auto"
        paddingLeft="20px"
        paddingRight="20px"
        justifyContent="center"
      >
        <Box width="320px" height="312px" paddingTop="1rem">
          <Image src={BgImg} alt="background" width="100%" height="100%" />
        </Box>
        <Flex
          paddingLeft="20px"
          paddingRight="20px"
          justifyContent="space-between"
          paddingTop="1rem"
          paddingBottom="1.5rem"
          width="35%" alignSelf="center"
          flexDirection="column"
        >
            <Text 
              fontSize="24px" 
              color="#025559" 
              fontWeight="semibold"
              lineHeight="43px"
              >
              Create the values you like.
            </Text>
            <Text paddingTop="0.625rem" color="#414141" fontSize="20px">
              Outline values that are important to you and stick to them as you live your life
            </Text>
        </Flex>
      </Flex>
      <Box marginTop="4rem" height="auto">
        <CutOutText />
      </Box>      
      <Flex justifyContent="center" alignItems="center" marginTop="4rem">
        <Box width="320px" height="312px">
            <Image src={Park} alt="background" />
          </Box>
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
       
      </Flex>
    </Box>
  );
}
