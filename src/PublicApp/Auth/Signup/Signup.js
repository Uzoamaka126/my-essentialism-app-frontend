import React from "react";
import { connect } from "react-redux";
import { register } from "../../../redux-store/actions/auth.actions";
import { Box } from "@chakra-ui/core";
// import bg from "../../../Components/assets/auth_background.svg";
import { SignupForm } from "./SignupForm";
import bg from "../../../Components/assets/blue-auth-bg.svg";

function Signup(props) {
  return (
    <Box
      bgImage={`url(${bg})`}
      minHeight="100%"
      margin="0"
      backgroundSize="cover"
      position="fixed"
      left="0"
      right="0"
      top="0"
      bottom="0"
    >
      <Box height="100%">
        <Box>
          <Box
            width="450px"
            position="relative"
            right="0"
            left="0"
            max-width="95%"
            margin="5rem auto 1rem"
          >
            <SignupForm {...props} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    registerState: state.auth.registerState,
  };
};

export default connect(mapStateToProps, { register })(Signup);
