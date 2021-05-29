import styled, { css, createGlobalStyle } from 'styled-components';
import NotchGradiente from '../public/notchgradient.svg';
import NotchWhiteSpace from '../public/notchwhitespace.svg';
import Notch from '../public/notch.svg';
import { FlexColumnFullCentered, FlexRow } from './styles/flex';

export const Container = styled.div`
    max-width: 1232px;
    margin: 0 auto;
`;

const ResponsiveImage = styled.img`
    width: 100%;
    height: auto;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('/images/login.png');
    background-size: cover;
    position: absolute;
    right: 0;
`;

const LayoutWrapper = styled(FlexRow)`
    box-sizing: border-box;
    position: relative;
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
`;

const FormContainer = styled(FlexColumnFullCentered)`
    box-sizing: border-box;
    padding: 0 50px 0 100px;
    z-index: 9;
    margin-right: -5%;
    width: 550px;
    height: 100%;
    background-color: #f5f9f9;
`;

const StyledNotchGradiente = styled(NotchGradiente)`
    height: 100%;
    width: auto;
    position: absolute;
    left: 0;
    top: 0;
`;

const StyledNotchWhiteSpace = styled(NotchWhiteSpace)`
    height: 100%;
    width: auto;
    position: absolute;
    left: 0;
    top: 0;
`;

const FullHeight = styled.div`
    z-index: 1;
    position: relative;
    height: 100%;
    width: 256px;
`;

export const LoginLayout = props => (
    <LayoutWrapper>
        <BackgroundImage>
            {/* <ResponsiveImage src="/images/login.png" /> */}
        </BackgroundImage>
        <FlexRow
            css={css`
                z-index: 1;
            `}
        >
            <FormContainer {...props} />
            <FullHeight>
                <Notch />
                {/* <StyledNotchGradiente />
                <StyledNotchWhiteSpace /> */}
            </FullHeight>
        </FlexRow>
    </LayoutWrapper>
);
