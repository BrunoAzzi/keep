import styled from 'styled-components';
import { Header, Container } from '@components/index';
import { FlexColumn } from '@components/styles/flex';
import { StudentSidebarProvider } from '@components/sidebars/StudentSidebar';

const Wrapper = styled(FlexColumn)`
    height: 100%;
    background-color: #f5f9f9;
    overflow: auto;
`;

export const Layout = ({ children, user }) => (
    <Wrapper>
        <Header user={user} />
        <StudentSidebarProvider>{children}</StudentSidebarProvider>
    </Wrapper>
);

export const ContainerLayout = ({ children, user }) => {
    return (
        <Layout user={user}>
            <Container>{children}</Container>
        </Layout>
    );
};
