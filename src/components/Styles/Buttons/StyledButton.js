import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 100px;
  background: #e06045;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 10px 16px;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;

  &:focus {
    background: #5567cb;
  }
  &:hover {
    background: #fff;
    color: #e06045;
    border: 1px solid #e06045;
  }

  &:disabled, button[disabled] {
    background: #F0F3F5;
    color: #FFFFFF;
  }
`;

export const PrimaryButton = styled(StyledButton)`
  background: #e06045;
  color: #fff;
  text-transform: capitalize;
  border-radius: 20px;



`