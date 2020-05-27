import React from "react";
// import { connect } from "react-redux";
import { OnboardingComponent } from "./Onboarding/onboarding.component";
import { Box } from "@chakra-ui/core";

export function DashboardHome(props) {
  return (
    <Box width="100%">
      <OnboardingComponent {...props} />
    </Box>
  );
}
