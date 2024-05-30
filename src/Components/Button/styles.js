import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    height: 56px;
    border: 0;
    padding: 20px 20px 20px 12px;
    border-radius: 10px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        opacity: 0.5;
    }

    svg {
        margin-right: 10px;
    }
`;