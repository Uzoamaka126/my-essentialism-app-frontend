import React, { useState } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/core";
import { StepOne, StepTwo, StepThree } from "./components";

export function OnboardingComponent({ history }) {
  const [step, setStep] = useState(1);

  function nextStep() {
    setStep(step + 1);
  }

  function previousStep() {
    setStep(step - 1);
  }

  function renderSteps() {
    switch (step) {
      case 1:
        return <StepOne previousStep={previousStep} nextStep={nextStep} />;
      case 2:
        return <StepTwo previousStep={previousStep} nextStep={nextStep} />;
      case 3:
        return (
          <StepThree
            previousStep={previousStep}
            nextStep={history.push("/dashboard/home")}
          />
        );
      default:
        return <StepOne />;
    }
  }

  return (
    <Box>
      <Box textAlign="center">
        <Text>Welcome to Essentialism</Text>
        <Text>Let's get you started with a few tips:</Text>
      </Box>
      <Box maxWidth="600px" margin="3rem auto" borderRadius="10px">
        <Box>{renderSteps()}</Box>
        <Flex justifyContent="space-between" marginTop="0.625rem" alignItems="center">
          <Button
            variant="ghost"
            color="#636363"
            _focus={{ border: "none" }}
            isDisabled={step === 0 ? true : false}
            onClick={previousStep}
          >
            Prev
          </Button>
          <Button
            color="#53f"
            variant="ghost"
            _focus={{ border: "none" }}
            isDisabled={step > 3 ? true : false}
            onClick={nextStep}
          >
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
