import styled, { css } from 'styled-components';

export const flex = css`
    display: flex;
`;

export const directionRow = css`
    flex-direction: row;
`;

export const directionColumn = css`
    flex-direction: column;
`;

export const spaceBetween = css`
    justify-content: space-between;
`;

export const mainAxisCentered = css`
    align-items: center;
`;

export const secondaryAxisCentered = css`
    justify-content: center;
`;

export const flexWrap = css`
    flex-wrap: wrap;
`;

export const flexRow = css`
    ${flex} ${directionRow};
`;

export const flexRowWrap = css`
    ${flexRow} ${flexWrap};
`;

export const flexRowCentered = css`
    ${flexRow} ${mainAxisCentered};
`;

export const flexColumn = css`
    ${flex} ${directionColumn};
`;

export const flexColumnCentered = css`
    ${flexColumn} ${mainAxisCentered};
`;

export const flexRowFullCentered = css`
    ${flexRowCentered} ${secondaryAxisCentered};
`;

export const FlexRow = styled.div`
    ${flexRow};
`;

export const FlexRowWrap = styled.div`
    ${flexRowWrap};
`;

export const FlexRowCentered = styled.div`
    ${flexRowCentered};
`;

export const FlexRowFullCentered = styled.div`
    ${flexRowFullCentered};
`;

export const FlexRowSpaceBetween = styled.div`
    ${flexRow} ${spaceBetween};
`;

export const FlexRowCenteredSpaceBetween = styled.div`
    ${flexRowCentered} ${spaceBetween};
`;

export const FlexColumn = styled.div`
    ${flexColumn};
`;

export const FlexColumnCentered = styled.div`
    ${flexColumnCentered};
`;

export const FlexColumnFullCentered = styled.div`
    ${flexColumnCentered} ${secondaryAxisCentered};
`;

export const FlexColumnSpaceBetween = styled.div`
    ${flexColumn} ${spaceBetween};
`;
