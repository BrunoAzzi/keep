import styled from 'styled-components';
import { Header, Container } from '@components/index';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    background-color: #f5f9f9;
    overflow: auto;
`;

export const Layout = ({ children, user }) => (
    <Wrapper>
        <Header user={user} />
        {children}
    </Wrapper>
);

export const ContainerLayout = ({ children, user }) => (
    <Layout user={user}>
        <Container>{children}</Container>
    </Layout>
);
