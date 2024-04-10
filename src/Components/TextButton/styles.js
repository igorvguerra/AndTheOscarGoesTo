import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    font-size: 16px;

    > svg {
        margin: 0 15px 0;
    }
`;