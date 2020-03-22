import styled from 'styled-components';

export const StyledSidebarItems = styled.li`
    height: 50px;
    width: 50px;
    text-align: center;

    a {
        font-size: 16px;
        color: ${(props) => props.active ? "orange" : "grey"};
        background: ${(props) => props.active ? "light orange": "transparent"}  
        
        :hover {
            background: skyblue;
            color: darkblue
        }
    }




`;