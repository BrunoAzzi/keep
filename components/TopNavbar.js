import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../public/images/Logo.svg';
import { Avatar } from './Avatar';
import { Container } from './Layout';
import firebase from 'firebase/app';
import 'firebase/auth';
import OutsideAlerter from 'hooks/useClickOutsideAlert';

const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    border-bottom: 1px solid #dedede;

    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const UserSection = styled.div`
    position: relative;
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

const Menu = styled.div`
    background: white;
    position: absolute;
    top: 100%;
    width: 100%;

    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
    padding: 16px 21px;
    border-bottom: 1px solid #dedede;
`;

const AvatarWithMargin = styled(Avatar)`
    margin-right: 8px;
`;

export const TopNavbar = ({ user }) => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    const toggle = () => setOpen(!open);
    const logout = () => firebase.auth().signOut();

    return (
        <Wrapper>
            <StyledContainer>
                <a href="/">
                    <Logo width="115" height="26" />
                </a>

                <OutsideAlerter onClick={close}>
                    <UserSection onClick={toggle}>
                        <AvatarWithMargin src={user.photoUrl} />
                        {user.displayName || user.email || 'Loading'}
                        {open && (
                            <Menu>
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            </Menu>
                        )}
                    </UserSection>
                </OutsideAlerter>
            </StyledContainer>
        </Wrapper>
    );
};
