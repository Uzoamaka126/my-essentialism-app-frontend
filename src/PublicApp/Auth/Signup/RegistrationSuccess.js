import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import checkmark from "../assets/images/check.png";
import { Button, Box } from "@chakra-ui/core";

function RegistrationSuccess(props) {
  return (
    <Box>
      <div className="regstr-modal-top">
        {/* <img alt="success" src={checkmark} /> */}
        <h1>Awesome!</h1>
        <p>You have successfully signed up!</p>
      </div>
      <div className="regstr-modal-border">
        {/* <Link to="/dashboard"> */}
          <Button>Dashboard</Button>
        {/* </Link> */}
      </div>
    </Box>
  );
}

export default connect(state => state, {})(RegistrationSuccess);
