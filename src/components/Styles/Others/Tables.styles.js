import styled from 'styled-components';

export const StyledTable = styled.table`
    table {
        border-collapse: collapse;
        width: 100%;
    }
    
    th, td {
        text-align: left;
        padding: 8px;
    }
    
    tr:nth-child(even) {background-color: #f2f2f2;
    }
`;