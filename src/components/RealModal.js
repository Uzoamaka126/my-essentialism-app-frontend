import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000000;
`;
const ModalInner = styled.div`
  padding: 0;
  background: #fff;
  display: inline-block;
  margin: 1rem;
  position: relative;
  min-width: 300px;
  box-shadow: 0px 1.88px 6.26px rgba(0, 0, 0, 0.25);
  justify-self: center;
  width: ${props => props.width ? props.width : '550px'};
  height: ${props => props.height ? props.height : '450px'};
  border-radius: 3px;

  @media (max-width: 750px) {
    width: 90%;
    margin: auto;
    border-radius: 10px;
    margin-top: 23rem;
  }
`;

function Modal(props) {
  return ReactDOM.createPortal(
    <ModalWrapper onClick={() => props.handleOpen ? props.handleOpen(false) : null} id="modal-wrapper">
      <ModalInner height={props.height} width={props.width} onClick={e => e.stopPropagation()}>
        {props.children}
      </ModalInner>
    </ModalWrapper>,
    document.querySelector("#modal")
  );
}

export default Modal;
