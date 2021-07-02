import styled from 'styled-components';

export const Button = styled.button`
    appearence: none;
    border: none;
    background: #595cff;
    border-radius: 5px;
    text-decoration: none;

    font-weight: bold;
    font-size: 16px;
    color: white;

    padding: 16px 18px;
    cursor: pointer;

    &:disabled {
        background: #f5f6ff;
    }
`;
