import React from "react";
import { connect } from "react-redux";
import { useToast, Box } from "@chakra-ui/core";
import { login } from "../../../redux-store/actions/auth";
import { LoginComponent } from "./Login.component";
import { ToastBox } from "../../../Components";
import bg from "../../../Components/assets/auth_background.svg";

function Login(props) {
  const { isLoading, login, history } = props;
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
      });
  }

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
      <LoginComponent
        isLoading={isLoading}
        onSubmit={handleSubmit}
        {...props}
      />
    </Box>
  );
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.auth.isLoading,
    login_success: store.auth.login_success,
    login_error: store.auth.login_error,
    user: store.auth.user,
    error_message: store.auth.error_message,
    isAuthUser: store.auth.isAuthUser,
  };
};
export default connect(mapStateToProps, { login })(Login);
