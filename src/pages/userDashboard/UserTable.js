import React from 'react';
import { StyledTable } from '../../components/Styles/Others/Tables.styles'

function UserTable(props) {
    return (
        <StyledTable>
            <tr>
                <th>Values</th>
                <th>No. of Projects</th>
            </tr>
            <tr>
                <td>Peter</td>
            </tr>  
        </StyledTable>
    );
}

export default UserTable;