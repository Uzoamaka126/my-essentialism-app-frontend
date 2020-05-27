import React from "react";
import { connect } from "react-redux";
import { useToast } from '@chakra-ui/core';
import { login } from "../../../redux-store/actions/auth";
import { LoginComponent } from "./Login.component";
import { ToastBox } from '../../../Components';

function Login(props) {
  const { isLoading, login, history, login_success, login_error } = props;
  const toast = useToast();
  
  function handleSubmit(values) {
    login(values);

    if (login_success) {
      const targetRoute = localStorage.getItem('target-route');
      console.log(targetRoute);
      const goToLocation = targetRoute ? targetRoute : '/dashboard/home';
      history.push(goToLocation);
      // history.push("/dashboard/home");

    } else if(login_error){
      toast({
        position: 'bottom-left',
        render: () => <ToastBox message={"Error signing in user"} />
      })
    }
  }
  return (
    <LoginComponent
      isLoading={isLoading}
      login_success={login_success}
      onSubmit={handleSubmit}
      {...props}
    />
  );
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.auth.isLoading,
    login_success: store.auth.login_success,
    login_error: store.auth.login_error
  };
};
export default connect(mapStateToProps, { login })(Login);
