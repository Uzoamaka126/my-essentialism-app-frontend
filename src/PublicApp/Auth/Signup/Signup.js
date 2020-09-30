import React from "react";
import { connect } from "react-redux";
import { register } from "../../../redux-store/actions/auth";
import { SignupComponent } from "./Signup.component";
import { Box } from "@chakra-ui/core";
import bg from '../../../Components/assets/auth_background.svg'

function Signup(props) {
  const {
    isLoading,
    register,
    register_success,
    error_message,
    register_error,
    history,
  } = props;

  return (
   <Box bgImage={`url(${bg})`} 
      minHeight="100%" 
      margin="0"
      backgroundSize="cover"
      position="fixed"
      left="0"
      right="0"
      top="0"
      bottom="0"
      // overflow="auto"
  >
      <SignupComponent
      isLoading={isLoading}
      error_message={error_message}
      register={register}
      register_error={register_error}
      history={history}
      register_success={register_success}
      {...props}
    />
   </Box>
  );
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.auth.isLoading,
    register_success: store.auth.register_success,
    register_error: store.auth.register_error,
    error_message: store.auth.error_message,
  };
};

export default connect(mapStateToProps, { register })(Signup);
