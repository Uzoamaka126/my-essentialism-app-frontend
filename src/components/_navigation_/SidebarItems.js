import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledSidebarItems } from '../Styles/Navigation/SidebarItems.styles'

export default function SidebarItems({ active, name, onItemClick, path, className }) {
    function handleClick() { 
        return onItemClick(path);
    }
    
    return (
        <StyledSidebarItems active={active}>
            <NavLink to={path} className={className} onClick={handleClick}>{name}</NavLink>
        </StyledSidebarItems>
    );
}