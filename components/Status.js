import styled, { css } from 'styled-components';
import { FlexRowCentered } from './styles/flex';

const Dot = styled.div`
    margin-right: 18px;
    border-radius: 50%;
    width: 8px;
    height: 8px;

    ${({ color }) => color && `background-color: ${color};`};
`;

export const BaseStatus = ({ children, color = 'white' }) => (
    <FlexRowCentered>
        <Dot color={color} />
        {children}
    </FlexRowCentered>
);

export const SuccessStatus = ({ children }) => (
    <BaseStatus color="#1dc39a">{children}</BaseStatus>
);

export const DangerStatus = ({ children }) => (
    <BaseStatus color="#ff4c61">{children}</BaseStatus>
);
