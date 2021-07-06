import styled from 'styled-components';
import { Notch } from '@components/Notch';
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

// min-width: 550px;

const FormContainer = styled(FlexColumn)`
    box-sizing: border-box;
    padding: 50px;
    padding-left: 100px;
    z-index: 9;
    margin-right: -5%;
    min-width: 433px;
    max-width: 50vw;
    height: 100%;
    background-color: #f5f9f9;

    overflow-y: auto;
`;

const FullHeight = styled.div`
    z-index: 1;
    position: relative;
    height: 100%;
    min-width: 256px;
`;

const SideContent = styled(FlexRow)`
    z-index: 1;
`;

const Content = styled(FlexColumn)`
    flex: 1 1 auto;
    padding: 20px;
    padding-right: 50px;
    overflow-x: auto;
`;

export const ImageLayout = ({ image, content, ...other }) => (
    <LayoutWrapper>
        {image && <BackgroundImage image={image} />}
        <SideContent>
            <FormContainer {...other} />
            <FullHeight>
                <Notch />
            </FullHeight>
        </SideContent>
        {content && <Content>{content}</Content>}
    </LayoutWrapper>
);
