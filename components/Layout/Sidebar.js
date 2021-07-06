import styled from 'styled-components';
import { FlexRow, FlexColumn, FlexRowReverse } from '@components/styles/flex';
import { Notch } from '@components/Notch';

const Wrapper = styled(FlexRowReverse)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 2;
`;

const DropShadow = styled(FlexRow)`
    position: absolute;
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.4;
`;

const FormContainer = styled(FlexColumn)`
    box-sizing: border-box;
    padding: 50px;
    z-index: 9;
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
    transform: rotate(180deg);
    margin-left: 5%;
    margin-right: -5%;
`;

const SideContent = styled(FlexRow)`
    z-index: 1;
`;

export const Sidebar = ({ onDropShadowClick, ...other }) => (
    <Wrapper>
        <DropShadow onClick={onDropShadowClick} />
        <SideContent>
            <FullHeight>
                <Notch />
            </FullHeight>
            <FormContainer {...other} />
        </SideContent>
    </Wrapper>
);
