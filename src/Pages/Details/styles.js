import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";
    height: 100vh;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
    background-color: green;

    > sgv {
        height: 60px;
        width: 60px;
        color: ${({ theme }) => theme.COLORS.YELLOW};
    }

`;