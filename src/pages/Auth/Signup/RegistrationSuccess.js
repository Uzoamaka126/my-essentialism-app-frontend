import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import checkmark from "../assets/images/check.png";
import {
  StyledRegistrationSuccessModal
} from "../../../Components/Styles/StyledRegistrationSuccessful";
import Button from '../components/_buttons_/Button';

function RegistrationSuccess(props) {
  return (
    <StyledRegistrationSuccessModal>
      <div className="regstr-modal-top">
        {/* <img alt="success" src={checkmark} /> */}
        <h1>Awesome!</h1>
        <p>You have successfully signed up!</p>
      </div>
      <div className="regstr-modal-border">
        <Link to="/dashboard">
          <Button className="button" label="Dashboard" />
        </Link>
      </div>
    </StyledRegistrationSuccessModal>
  );
}

export default connect(state => state, {})(RegistrationSuccess);
