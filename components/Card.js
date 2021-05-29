import styled from 'styled-components';
import { FlexColumn, FlexRowWrap } from './styles/flex';

export const BaseCard = styled.div`
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    box-shadow: 0px 4px 10px rgba(196, 196, 196, 0.25);
    border-radius: 4px;
    background: #fafafa;
`;

const Wrapper = styled(BaseCard)`
    padding: 29px 15px;
    margin: 9px;
    flex: 1 1 18%;

    ${({ color }) => color && `border-bottom: 2px solid ${color};`}
`;

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

export const CardGrid = styled(FlexRowWrap)`
    margin: -9px;
`;

const TextWrapper = styled(FlexColumn)`
    justify-content: space-around;
`;

export const Card = ({ title, value, accent, icon }) => (
    <Wrapper color={accent}>
        <IconWrapper color={accent}>{icon}</IconWrapper>
        <TextWrapper>
            <Value>{value}</Value>
            <Title>{title}</Title>
        </TextWrapper>
    </Wrapper>
);
