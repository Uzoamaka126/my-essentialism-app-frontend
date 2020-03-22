import React from "react";
import { StyledButton } from '../Styles/Buttons/StyledButton';

export default function Button (props) {
  const clickHandler = (e) => {
    if (props.handleClick) {
      e.preventDefault();
      props.handleClick();
    }
  }
  
  return (
    <>
      <StyledButton type="button" className={props.className} onClick={clickHandler} disabled={props.disabled}>{props.label}</StyledButton>
    </>
  );
}
