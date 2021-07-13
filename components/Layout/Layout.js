import styled from 'styled-components';
import { TopNavbar, Container } from '@components/index';
import { FlexColumn } from '@components/styles/flex';
import { StudentSidebarProvider } from '@components/sidebars/StudentSidebar';
import { TeacherSidebarProvider } from '@components/sidebars/TeacherSidebar';

const Wrapper = styled(FlexColumn)`
    height: 100%;
    background-color: #f5f9f9;
    overflow: auto;
`;

export const Layout = ({ children, user, branchList = [] }) => (
    <Wrapper>
        <TopNavbar user={user} branchList={branchList} />
        <StudentSidebarProvider>
            <TeacherSidebarProvider>{children}</TeacherSidebarProvider>
        </StudentSidebarProvider>
    </Wrapper>
);

export const ContainerLayout = ({ children, user, branchList = [] }) => {
    return (
        <Layout user={user} branchList={branchList}>
            <Container>{children}</Container>
        </Layout>
    );
};
