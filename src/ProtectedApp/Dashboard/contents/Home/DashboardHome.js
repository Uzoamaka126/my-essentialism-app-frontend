import React from "react";
import { connect } from "react-redux";
import { OnboardingComponent } from "./onboarding.component";
import { fetchUserProfile, logout } from "../../../../redux-store/actions/";

function DashboardHome(props) {
  return <OnboardingComponent {...props} />;
}

const mapStateToProps = (store) => {
  console.log(store.auth);

  return {
    user: store.auth.user,
    profile: store.user.profile,
  };
};

export default connect(mapStateToProps, { fetchUserProfile, logout })(
  DashboardHome
);
