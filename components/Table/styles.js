import styled, { css } from 'styled-components';

const baseCellStyle = css`
    margin: 0;
    text-align: left;
    vertical-align: middle;
    border-bottom: 1px solid #f3f3f3;
    white-space: nowrap;
    line-height: 20px;
    padding: 16px;

    width: 1%;

    ${({ collapse }) => collapse && `width: 0.0000000001%;`}
`;

export const HeaderCell = styled.th`
    ${baseCellStyle};

    font-size: 14px;
    color: #b3b3b3;
`;

export const Cell = styled.td`
    ${baseCellStyle};

    font-size: 16px;
    color: #1a1a1a;
`;

export const Wrapper = styled.div`
    display: block;
    max-width: 100%;
    background: #ffffff;
    overflow: auto;
`;

export const Base = styled.table`
    width: 100%;
    border-spacing: 0;
`;

export const TableRow = styled.tr`
    :last-child {
        ${Cell} {
            border-bottom: 0;
        }
    }
`;
