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

export const Layout = ({ children, user }) => (
    <Wrapper>
        <TopNavbar user={user} />
        <StudentSidebarProvider>
            <TeacherSidebarProvider>{children}</TeacherSidebarProvider>
        </StudentSidebarProvider>
    </Wrapper>
);

export const ContainerLayout = ({ children, user }) => {
    return (
        <Layout user={user}>
            <Container>{children}</Container>
        </Layout>
    );
};
