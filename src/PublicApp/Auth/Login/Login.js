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
    login_success,
    login_error,
    error_message,
  } = props;
  const toast = useToast();

  function handleSubmit(values) {
    login(values);
    console.log(!!login_error)

    if (login_success) {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Welcome"} />,
      });
      history.push("/dashboard/home");
    } else if (!!login_error) {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={error_message} />,
      });
    }
  }

  return (
    <LoginComponent
      error_message={error_message}
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
  };
};
export default connect(mapStateToProps, { login })(Login);
