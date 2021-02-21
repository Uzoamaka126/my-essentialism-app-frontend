import React from "react";
import { connect } from "react-redux";
import { useToast, Box } from "@chakra-ui/core";
import { login } from "../../../redux-store/actions/auth";
import { LoginComponent } from "./Login.component";
import { ToastBox } from "../../../Components";
import bg from "../../../Components/assets/auth_background.svg";
import { useHistory } from "react-router-dom";

function Login(props) {
  const toast = useToast();
  const history = useHistory()

  async function handleSubmit(values) {
    const result = await login(values);
    if (result) {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Login successful!"} />,
      });
      history.push("/dashboard/home");
    } else {
      toast({
        position: "bottom-left",
        render: () => (
          <ToastBox message="An error occured. Please, try again" />
        ),
      });
    }
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
      <LoginComponent onSubmit={handleSubmit} {...props} />
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    loginState: state.auth.loginState,
  };
};
export default connect(mapStateToProps, { login })(Login);
