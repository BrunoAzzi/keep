import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../public/images/Logo.svg';
import { Container } from './Layout';

const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    border-bottom: 1px solid #dedede;

    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const UserSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 21px;
    border-left: 1px solid #dedede;
    border-right: 1px solid #dedede;

    font-size: 12px;
    line-height: 150%;
`;

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Carret = styled.span`
    font-size: 9px;
    padding-left: 16px;

    &:before {
        ${({ isOpen }) =>
            isOpen ? 'content: "\\25BC";' : 'content: "\\25B2";'}
    }
`;

const StyledLogo = styled(Logo)`
    width: 115px;
    height: ;
`;

export const Header = ({ user }) => {
    const isOpen = useState(false);

    return (
        <Wrapper>
            <StyledContainer>
                <Logo width="115" height="26" />
                <UserSection>
                    {user.displayName || user.email || 'Loading'}
                    <Carret isOpen={isOpen} />
                </UserSection>
            </StyledContainer>
        </Wrapper>
    );
};
