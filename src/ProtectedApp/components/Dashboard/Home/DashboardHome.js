import React from "react";
import { connect } from "react-redux";
import { OnboardingComponent } from "./Onboarding/onboarding.component";
import { Box } from "@chakra-ui/core";

function DashboardHome(props) {
  return (
    <Box width="100%">
      <OnboardingComponent {...props} />
    </Box>
  );
}

const mapStateToProps = (store) => {
  console.log(store.auth);

  return {
    user: store.auth.user,
    profile: store.user,
  }
}

export default connect(mapStateToProps, null)(DashboardHome)