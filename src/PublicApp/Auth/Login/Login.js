import React from "react";
import { connect } from "react-redux";
import { login } from "../../../redux-store/actions/auth";
import { LoginComponent } from "./Login.component";

function Login({ loading, login, login_success, ...props }) {
  return (
    <LoginComponent
      loading={loading}
      login_success={login_success}
      login={login}
      {...props}
    />
  );
}

const mapStateToProps = (store) => {
  return {
    loading: store.auth.loading,
    login_success: store.auth.login_success,
  };
};
export default connect(mapStateToProps, { login })(Login);
