import styled from '@emotion/styled';

export const StyledNavLabel = styled.div`
    width: 100%;
    // border: 1px solid black;
    max-height: 40px;
    padding: 8px;

    h3 {
        margin: 0;
        color: #212242;
    }

`

export const StyledNav = styled.nav`
    // border: 1px solid #f8f8f8;
    min-height: 25px;
    background: #3c4858;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1002;
    padding: 10px 15px;

    .navbar-brand {
        display: flex;
        align-items: center;
        // margin-left: 5px;
            // width: 15px;
            // height: 10px;
            color: #fff;
       
    }
}
`