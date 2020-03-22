import styled from 'styled-components';

export const StyledDashboard = styled.section`
    // background: rgb(226,226,226);
    // background: linear-gradient(90deg, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 33%, rgba(238,238,238,1) 63%);
    margin-left: 150px; /* Same as the width of the sidenav */
    border: 1px solid red;
    display: block;
    background: #fff;

    .wrapper {
        display: inline-block;
        margin-top: 50px;
        padding: 15px;
        width: 100%;

        .user-avatar {
            width: 150px;
            height: 100px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
      
`;