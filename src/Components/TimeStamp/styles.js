import styled from 'styled-components';

export const Container = styled.div`
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 16px;
    display: flex;
    align-items: center;
    

    > svg {
        margin: 0 15px;
        
    }
`;