import styled, { css } from 'styled-components';
import { FlexRowCentered } from './styles/flex';

const baseStatus = css`
    margin-right: 18px;
    border-radius: 50%;
    width: 8px;
    height: 8px;
`;

const Success = styled.div`
    ${baseStatus}
    background-color: #1dc39a;
`;

const Danger = styled.div`
    ${baseStatus}
    background-color: #ff4c61;
`;

export const SuccessStatus = ({ children }) => (
    <FlexRowCentered>
        <Success />
        {children}
    </FlexRowCentered>
);

export const DangerStatus = ({ children }) => (
    <FlexRowCentered>
        <Danger />
        {children}
    </FlexRowCentered>
);
