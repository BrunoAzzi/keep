import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    * {
        font-family: 'Noto Sans', sans-serif !important;
        box-sizing: border-box;
    }

    #__next {
        height: 100vh;
    }
`;

export const GlobalStyle = () => (
    <>
        <Reset />
        <Global />
    </>
);
