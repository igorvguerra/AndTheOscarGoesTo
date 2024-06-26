import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
  
    }

    > div {
        display: flex;
        flex-direction: row;
        svg {
        font-size: 10px;
    }
    } 

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 14px;
        justify-self: start;
        
        
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;