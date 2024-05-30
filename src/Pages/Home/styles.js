import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-columns: 180px auto;
    grid-template-areas: 
    "header header"
    "menu content";
    height: 100vh;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    padding: 60px 50px 100px 50px;

    > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        gap: 140px;

        > h1 {
            width: 100%;
        }

    }
`;

export const Menu = styled.ul`
    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    padding-top: 64px;
    text-align: center;

    > li {
        margin-bottom: 24px;
    }
    
`;

export const SearchBar = styled.input`
    height: 56px;
    padding: 19px 24px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
   
    

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_100};

    }
`;