import React from "react";
import { connect } from "react-redux";
import { register } from "../../../redux-store/actions/auth";
import { SignupComponent } from "./Signup.component";

function Signup({ loading, register, register_success, ...props }) {
  return (
    <SignupComponent
      loading={loading}
      register_success={register_success}
      register={register}
      {...props}
    />
  );
}

const mapStateToProps = (store) => {
  return {
    loading: store.auth.loading,
    register_success: store.auth.register_success,
  };
};
export default connect(mapStateToProps, { register })(Signup);
