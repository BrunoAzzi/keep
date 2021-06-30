import styled, { css } from 'styled-components';
import { Card } from '@components/Card';
import { Subtitle } from '@components/Title';
import { FlexRowWrap } from '@components/styles/flex';

const CardGroup = styled(FlexRowWrap)`
    margin: -4px;
    max-width: 322px;
`;

const StyledCard = styled(Card)`
    border-radius: 15px;
    flex: 1 1 20%;
    margin: 4px;
    padding: 20px;
`;

const textStyle = css`
    font-style: normal;
    font-size: 11px;
    line-height: 15px;
`;

const Description = styled.span`
    font-weight: normal;
    ${textStyle};
`;

const Title = styled.h4`
    font-weight: bold;
    ${textStyle};
    margin-bottom: 8px;
`;

const Icon = styled.div`
    width: 16px;
    height: 16px;
    margin-bottom: 10px;
`;

const StyledSubtitle = styled(Subtitle)`
    margin-bottom: 12px;
`;

export const ReportCardSection = () => (
    <>
        <StyledSubtitle>Relatórios</StyledSubtitle>

        <CardGroup>
            <StyledCard>
                <Icon />
                <Title>Psychological report</Title>
                <Description>
                    Some short description of this type of report.
                </Description>
            </StyledCard>
            <StyledCard>
                <Icon />
                <Title>Psychological report</Title>
                <Description>
                    Some short description of this type of report.
                </Description>
            </StyledCard>
            <StyledCard>
                <Icon />
                <Title>Psychological report</Title>
                <Description>
                    Some short description of this type of report.
                </Description>
            </StyledCard>
            <StyledCard>
                <Icon />
                <Title>Psychological report</Title>
                <Description>
                    Some short description of this type of report.
                </Description>
            </StyledCard>
        </CardGroup>
    </>
);
