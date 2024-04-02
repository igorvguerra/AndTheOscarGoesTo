import styled from 'styled-components';


export const Container = styled.div`
    height: 116px;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 16px;
    padding: 24px 123px;
    grid-area: header;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 80px;

    
    

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Logo = styled.div`
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    
    align-items: center;
    justify-content: start;
    
    > h1 {
        font-size: 24px;
        margin-left: 21px;
        width: 160px;
    }

`;

export const Search = styled.input`
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

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 198px;

    > img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
    }

    > div {
        width: 134px;
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-right: 5px;

        strong {
            font-weight: 700;
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
           
        }
    }
`;

