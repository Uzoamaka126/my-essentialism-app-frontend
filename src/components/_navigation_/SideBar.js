import React, { useState } from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import { StyledSidebar } from '../Styles/Navigation/sidebar.styles';
import Values from '../../pages/Values/Values';
import MyValues from '../../pages/Values/MyValues';
import SidebarItems from './SidebarItems';

function SideBar(props) {
    const [state, setState] = useState({
        activePath: '/dashboard',
        items: [
            {
                path: '/dashboard',
                name: 'Home',
                key: 1
            },
            {
                path: '/values',
                name: 'Values',
                key: 2
            },
            {
                path: '/values/me',
                name: 'My Values',
                key: 3
            },            
        ]
    }) 

    function onItemClick(path) {
        setState({ 
            ...state,
            activePath: path
         });
    }
    
    const { items, activePath } = state;
    console.log(items);

    return (
        <StyledSidebar>
            <ul>
                {
                    items.map(item => {
                        return (
                            <SidebarItems
                                path={item.path}
                                name={item.name}
                                onItemClick={onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        )
                    })
                }
        </ul>
        </StyledSidebar>
    );
}

export default SideBar;