import React from "react";
import { connect } from "react-redux";
import { register } from "../../../redux-store/actions/auth";
import { SignupComponent } from "./Signup.component";
import { useToast, useDisclosure } from "@chakra-ui/core";
import { ToastBox } from "../../../Components";
import { RegistrationSuccess } from "./RegistrationSuccess";

function Signup(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isLoading,
    register,
    register_success,
    register_error,
    history,
  } = props;
  const toast = useToast();

  function handleSubmit(values) {
    register(values);
    if (register_success) {
      toast({
        position: 'bottom-left',
        render: () => <ToastBox message="User created" />,
      });
      onOpen();
    }
    if (register_error) {
      toast({
        position: "bottom-left",
        render: () => <ToastBox message={"Error creating user"} />,
      });
    }
  }

  return (
    <>
      <SignupComponent
        isLoading={isLoading}
        onSubmit={handleSubmit}
        {...props}
      />
      {isOpen && (
        <RegistrationSuccess
          isOpen={isOpen}
          onClose={onClose}
          history={history}
        />
      )}
    </>
  );
}

const mapStateToProps = (store) => {

  return {
    isLoading: store.auth.isLoading,
    register_success: store.auth.register_success,
    register_error: store.auth.register_error,
    auth: store.auth
  };
};

export default connect(mapStateToProps, { register })(Signup);
