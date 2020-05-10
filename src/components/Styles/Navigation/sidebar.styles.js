import styled from '@emotion/styled';

export const StyledSidebar = styled.div`
    height: 100%;
    width: 150px;
    position: fixed;
    background-color: #f8f8f8;
    overflow: hidden;
    outline: none;
    padding-top: 60px;
    border: 1px solid #eee;


    ul {
        margin-top: 60px;
        width: 60px;
        margin: -2px 0 0;
        padding: 0;
    
        li {
           a {
                padding: 20px 16px;
                text-decoration: none;
                font-size: 16px;
                color: #818181;
                display: block;
        
                &:hover {
                    color: #f1f1f1;
                }
           }
        }
    }
    




`