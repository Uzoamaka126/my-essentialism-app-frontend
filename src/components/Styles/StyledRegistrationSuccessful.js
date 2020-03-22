import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  
  .laptop_man {
    max-width: 20%;
    max-height: 25vh;
  }
`;

export const StyledRegistrationSuccessModal = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
  color: #646f79;
  .regstr-modal-top {
    position: absolute;
    text-align: center;
    height: 70%;
    padding: 0 10%;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h1 {
      font-size: 2rem;
      color: #205284;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      color: #646F79;
    }
    img {
      width: 28%;
      height: 30%;
    }
  }

  .regstr-modal-border {
    width: 100%;
    height: 30%;
    background-color: #6f85fd;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .button {
    background: #323C5C;
    margin-left: 2.0rem;
    margin-top: 1.4rem;
  }
  a {
    width: 30%;
    height: 50%;
  }
`;
