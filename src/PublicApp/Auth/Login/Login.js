import React from "react";
import { connect } from "react-redux";
import { useToast } from "@chakra-ui/core";
import { login } from "../../../redux-store/actions/auth";
import { LoginComponent } from "./Login.component";
import { ToastBox } from "../../../Components";

function Login(props) {
  const {
    isLoading,
    login,
    history,
  } = props;
  const toast = useToast();

  function handleSubmit(values) {
    login(values)
      .then((response) => {
         toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Welcome"} />,
      });
      history.push("/dashboard/home");
      })
      .catch((err) => {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={err} />,
      });
    })
  }

  return (
    <LoginComponent
      // error_message={error_message}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      {...props}
    />
  );
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.auth.isLoading,
    login_success: store.auth.login_success,
    login_error: store.auth.login_error,
    user: store.auth.user,
    error_message: store.auth.error_message,
    isAuthUser: store.auth.isAuthUser
  };
};
export default connect(mapStateToProps, { login })(Login);
