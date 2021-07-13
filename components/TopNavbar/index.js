import styled from 'styled-components';
import Logo from '../../public/images/Logo.svg';
import { Container } from '@components/Layout';
import { UserMenu } from './UserMenu';
import { BranchMenu } from './BranchMenu';
import { FlexRowCentered } from '@components/styles/flex';

const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    border-bottom: 1px solid #dedede;

    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuSection = styled(FlexRowCentered)`
    & > * {
        border-left: 1px solid #dedede;

        &:last-child {
            border-right: 1px solid #dedede;
        }
    }
`;

export const TopNavbar = ({ user, branchList = [] }) => (
    <Wrapper>
        <StyledContainer>
            <a href="/">
                <Logo width="115" height="26" />
            </a>
            <MenuSection>
                <BranchMenu branchList={branchList} />
                <UserMenu user={user} />
            </MenuSection>
        </StyledContainer>
    </Wrapper>
);
