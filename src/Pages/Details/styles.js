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
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    padding: 60px 100px 100px 120px;
    
   > div:nth-child(2) {
    
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 24px 0;
    
    h1 {
        margin-right: 20px;
    }

    svg {
        margin: 0 5px 0;
    }

   }

   > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;

    img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 10px;
    }

    span {
        margin-right: 10px;
    }

    
   }

   > div:nth-child(7) {
    margin-top: 40px;
   }


`;