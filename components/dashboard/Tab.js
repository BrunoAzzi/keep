import Link from 'next/link';
import styled, { css } from 'styled-components';
import { FlexRowSpaceBetween } from '@components/styles/flex';

export const Actions = styled(FlexRowSpaceBetween)`
    padding: 8px;
    flex: 1 1 auto;
`;

export const TabManager = styled(FlexRowSpaceBetween)`
    margin: 0 -30px;
`;

const activeTabStyle = css`
    color: #121212;
    font-weight: 800;
`;

export const StyledLink = styled.a`
    margin: 0 30px;
    font-size: 17px;
    line-height: 28px;

    display: flex;
    align-items: center;

    color: #a7a7a7;
    cursor: pointer;

    ${({ active }) => active && activeTabStyle}
`;

export const Tab = ({ href, ...other }) => (
    <Link href={href} passHref>
        <StyledLink {...other} />
    </Link>
);
