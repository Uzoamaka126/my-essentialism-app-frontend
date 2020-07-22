import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledSidebarItems } from '../../../Components/Styles/Navigation/SidebarItems.styles'

export default function SidebarItems({ active, name, onItemClick, path, }) {
    function handleClick() { 
        return onItemClick(path);
    }
    
    return (
        <StyledSidebarItems active={active}>
            <NavLink to={path} onClick={handleClick}>{name}</NavLink>
        </StyledSidebarItems>
    );
}