import styled from 'styled-components';

export const StyledAuthNavbar = styled.nav`
    min-height: 60px;
    box-shadow: 3px 3px 3px 3px #ccc;
    // border: 1px solid red;
    
    .nav-brand {
        border: 1px solid blue;

        &::before {
            // content:
        }
    }



`;

export const StyledDefaultNavbar = styled(StyledAuthNavbar)`
    box-shadow: none;


`