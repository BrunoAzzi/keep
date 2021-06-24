import styled from 'styled-components';
import Notch from '../../public/notch.svg';
import { FlexColumn, FlexRow } from '../styles/flex';

const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    right: 0;

    ${({ image }) => image && `background-image: url(${image});`}
`;

const LayoutWrapper = styled(FlexRow)`
    box-sizing: border-box;
    position: relative;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
`;

const FormContainer = styled(FlexColumn)`
    box-sizing: border-box;
    padding: 50px 50px 0 100px;
    z-index: 9;
    margin-right: -5%;
    min-width: 550px;
    max-width: 50vw;
    height: 100%;
    background-color: #f5f9f9;
`;

const FullHeight = styled.div`
    z-index: 1;
    position: relative;
    height: 100%;
    min-width: 256px;
`;

const Content = styled(FlexRow)`
    z-index: 1;
`;

export const ImageLayout = props => (
    <LayoutWrapper>
        <BackgroundImage image="/images/login.png" />
        <Content>
            <FormContainer {...props} />
            <FullHeight>
                <Notch />
            </FullHeight>
        </Content>
    </LayoutWrapper>
);
