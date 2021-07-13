import 'firebase/auth';
import firebase from 'firebase/app';
import styled from 'styled-components';
import { Avatar } from '@components/Avatar';
import { Menu, MenuItem } from '@components/Menu';

const AvatarWithMargin = styled(Avatar)`
    margin-right: 8px;
`;

export const UserMenu = ({ user }) => {
    const logout = () => firebase.auth().signOut();

    return (
        <Menu
            header={
                <>
                    <AvatarWithMargin src={user.photoUrl} />
                    {user.displayName || user.email || 'Loading'}
                </>
            }
        >
            <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
    );
};
