import React from 'react';
import styled from 'styled-components';
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
    AuthAction
} from 'next-firebase-auth';
import { Header } from '../components/Header';
import { Container } from '../components/Layout';
import { BaseCard, Card, CardGrid } from '../components/Card';
import {
    FlexRow,
    FlexRowSpaceBetween,
    FlexRowWrap
} from '../components/styles/flex';
import { Button } from '../components/Button';

const Layout = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #f5f9f9;
`;

const Content = styled.div``;

const Title = styled.h1`
    font-weight: 900;
    font-size: 23px;
    line-height: 180%;
    margin-bottom: 21px;
`;

const Section = styled.section`
    margin: 54px 0;
`;

const Actions = styled(FlexRowSpaceBetween)`
    flex: 1 1 auto;
`;
const TabManager = styled(FlexRowSpaceBetween)`
    margin: 0 -30px;
`;
const Tab = styled.span`
    margin: 0 30px;
    font-weight: 800;
    font-size: 17px;
    line-height: 28px;

    display: flex;
    align-items: center;

    color: #121212;
`;

const Dashboard = () => {
    const AuthUser = useAuthUser();

    return (
        <Layout>
            <Header user={AuthUser} />
            <Content>
                <Container>
                    <Section>
                        <Title>Acompanhamentos</Title>
                        <CardGrid>
                            <Card
                                accent="#6f52ed"
                                title="Estudantes"
                                value={62}
                            ></Card>
                            <Card
                                accent="#FFCA32"
                                title="Professores"
                                value={10}
                            ></Card>
                            <Card
                                accent="#21B8C7"
                                title="Frequência"
                                value={10}
                            ></Card>
                            <Card
                                accent="#FF4C61"
                                title="Desistentes"
                                value={10}
                            ></Card>
                            <Card
                                accent="#4CB8FF"
                                title="Instrumentos"
                                value={10}
                            ></Card>
                        </CardGrid>
                    </Section>
                    <Section>
                        <BaseCard>
                            <Actions>
                                <TabManager>
                                    <Tab>Turmas em andamento</Tab>
                                    <Tab>Alunos</Tab>
                                    <Tab>Professores</Tab>
                                </TabManager>
                                <Button>Criar nova turma</Button>
                            </Actions>
                        </BaseCard>
                    </Section>
                </Container>
            </Content>
        </Layout>
    );
};

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Dashboard);
