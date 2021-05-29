import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
    AuthAction
} from 'next-firebase-auth';
import { Header } from '../components/Header';
import { Container } from '../components/Layout';
import { BaseCard, Card, CardGrid } from '../components/Card';
import { FlexRowSpaceBetween } from '../components/styles/flex';
import { Button } from '../components/Button';
import {
    makeStudentData,
    makeClassData,
    makeTeacherData
} from '../components/makeData';
import { StudentTable } from '../components/StudentTable';
import { ClassTable } from '../components/ClassTable';
import { TeacherTable } from '../components/TeacherTable';
import faker from 'faker/locale/pt_BR';

const Layout = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #f5f9f9;
`;

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
    padding: 8px;
    flex: 1 1 auto;
`;

const TabManager = styled(FlexRowSpaceBetween)`
    margin: 0 -30px;
`;

const activeTabStyle = css`
    color: #121212;
    font-weight: 800;
`;

const Tab = styled.span`
    margin: 0 30px;
    font-size: 17px;
    line-height: 28px;

    display: flex;
    align-items: center;

    color: #a7a7a7;

    ${({ active }) => active && activeTabStyle}
`;

const Content = styled.div`
    margin-top: 48px;
`;

const StyledCard = styled(BaseCard)`
    background: white;
    flex-direction: column;
`;

const Dashboard = () => {
    const AuthUser = useAuthUser();
    const [activeTab, setActiveTab] = useState('classes');
    const students = React.useMemo(() => makeStudentData(20), []);
    const classes = React.useMemo(() => makeClassData(20), []);
    const teachers = React.useMemo(() => makeTeacherData(20), []);

    const handleTabClick = event => setActiveTab(event.target.ariaLabel);

    return (
        <Layout>
            <Header user={AuthUser} />
            <div>
                <Container>
                    <Section>
                        <Title>Acompanhamentos</Title>
                        <CardGrid>
                            <Card
                                accent="#6f52ed"
                                title="Estudantes"
                                value={faker.datatype.number({
                                    min: 0,
                                    max: 1000
                                })}
                            ></Card>
                            <Card
                                accent="#FFCA32"
                                title="Professores"
                                value={faker.datatype.number({
                                    min: 0,
                                    max: 1000
                                })}
                            ></Card>
                            <Card
                                accent="#21B8C7"
                                title="Frequência"
                                value={faker.datatype.number({
                                    min: 0,
                                    max: 1000
                                })}
                            ></Card>
                            <Card
                                accent="#FF4C61"
                                title="Desistentes"
                                value={faker.datatype.number({
                                    min: 0,
                                    max: 1000
                                })}
                            ></Card>
                            <Card
                                accent="#4CB8FF"
                                title="Instrumentos"
                                value={faker.datatype.number({
                                    min: 0,
                                    max: 1000
                                })}
                            ></Card>
                        </CardGrid>
                    </Section>
                    <Section>
                        <StyledCard>
                            <Actions>
                                <TabManager>
                                    <Tab
                                        aria-label="classes"
                                        active={activeTab === 'classes'}
                                        onClick={handleTabClick}
                                    >
                                        Turmas em andamento
                                    </Tab>
                                    <Tab
                                        aria-label="students"
                                        active={activeTab === 'students'}
                                        onClick={handleTabClick}
                                    >
                                        Alunos
                                    </Tab>
                                    <Tab
                                        aria-label="teachers"
                                        active={activeTab === 'teachers'}
                                        onClick={handleTabClick}
                                    >
                                        Professores
                                    </Tab>
                                </TabManager>
                                <Button>Criar nova turma</Button>
                            </Actions>
                            <Content>
                                {activeTab === 'students' && (
                                    <StudentTable data={students} />
                                )}
                                {activeTab === 'classes' && (
                                    <ClassTable data={classes} />
                                )}
                                {activeTab === 'teachers' && (
                                    <TeacherTable data={teachers} />
                                )}
                            </Content>
                        </StyledCard>
                    </Section>
                </Container>
            </div>
        </Layout>
    );
};

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Dashboard);
