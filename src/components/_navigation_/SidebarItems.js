import React from './node_modules/react';
import { NavLink } from './node_modules/react-router-dom';
import { StyledSidebarItems } from '../Styles/Navigation/SidebarItems.styles'

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