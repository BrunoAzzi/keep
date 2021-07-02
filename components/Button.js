import styled from 'styled-components';

export const Button = styled.button`
    appearance: none;
    border: none;
    margin: 0;
    background: #595cff;
    border-radius: 5px;
    text-decoration: none;
    line-height: 1em;

    font-weight: bold;
    font-size: 16px;
    color: white;

    padding: 16px 18px;
    cursor: pointer;

    &:disabled {
        background: #f5f6ff;
    }
`;
