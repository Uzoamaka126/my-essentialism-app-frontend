import React from "react";
import { connect } from "react-redux";
import { OnboardingComponent } from "./Onboarding/onboarding.component";
import { Box } from "@chakra-ui/core";
import { fetchUserProfile, logout } from "../../../../redux-store/actions/";

function DashboardHome(props) {
  const { user, auth, logout, fetchUserProfile } = props;
  console.log(user, auth, logout, fetchUserProfile);

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
    profile: store.user.profile,
  }
}

export default connect(mapStateToProps, { fetchUserProfile, logout })(DashboardHome)