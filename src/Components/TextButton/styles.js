import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    border: none;
    color: ${({ theme, $isActive }) => $isActive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};

    font-size: 16px;

    > svg {
        margin: 0 15px 0;
    }
`;