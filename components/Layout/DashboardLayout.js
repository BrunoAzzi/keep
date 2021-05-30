import styled from 'styled-components';
import { Header } from '../Header';
import { Container } from './Container';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    background-color: #f5f9f9;
    overflow: auto;
`;

export const DashboardLayout = ({ children, user }) => (
    <Wrapper>
        <Header user={user} />
        {children}
    </Wrapper>
);

export const DashboardContainerLayout = ({ children, user }) => (
    <DashboardLayout user={user}>
        <Container>{children}</Container>
    </DashboardLayout>
);
