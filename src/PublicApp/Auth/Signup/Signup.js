import React from "react";
import { connect } from "react-redux";
import { register } from "../../../redux-store/actions/auth";
import { SignupComponent } from "./Signup.component";

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
    <SignupComponent
      isLoading={isLoading}
      error_message={error_message}
      register={register}
      register_error={register_error}
      history={history}
      register_success={register_success}
      {...props}
    />
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
