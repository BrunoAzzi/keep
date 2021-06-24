import styled, { css } from 'styled-components';
import { Card } from '../Card';
import { FlexColumnSpaceAround, FlexRowWrap } from '@styles/flex';

const spaceBetweenGauges = '9px';

const Title = styled.span`
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: #a6acbe;
`;

const Value = styled.span`
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    font-weight: bold;
    font-size: 28px;
    line-height: 24px;
    color: #000000;
`;

const IconWrapper = styled.div`
    border-radius: 50%;
    width: 58px;
    height: 58px;
    margin-right: 14px;

    ${({ color }) => color && `background-color: ${color}0C;`}
`;

const StyledCard = styled(Card)`
    flex-direction: row;
    padding: 29px 15px;
    flex: 1 1 auto;
    width: calc(20% - 18px);
    margin: ${spaceBetweenGauges};

    ${({ color }) => color && `border-bottom: 2px solid ${color};`}
`;

export const GaugeGrid = styled(FlexRowWrap)`
    margin: -${spaceBetweenGauges};
`;

export const Gauge = ({ title, value, accent, icon }) => (
    <StyledCard color={accent}>
        <IconWrapper color={accent}>{icon}</IconWrapper>
        <FlexColumnSpaceAround>
            <Value>{value}</Value>
            <Title>{title}</Title>
        </FlexColumnSpaceAround>
    </StyledCard>
);
