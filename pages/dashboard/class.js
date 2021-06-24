import React from 'react';
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth';
import { ClassTable, GaugeGroup } from '@components/dashboard';
import { Card, ContainerLayout, Section, Content } from '@components/index';
import { ActionNav } from '@components/dashboard';
import { classCollection, handleClassList } from 'serialize/class';
import { teacherCollection } from 'serialize/teacher';
import { studentCollection } from 'serialize/student';

export async function getServerSideProps() {
    const classListResponse = await classCollection.get();
    const classList = await handleClassList(classListResponse.docs, {
        shallow: false
    });
    const teacherList = await teacherCollection.get();
    const studentList = await studentCollection.get();

    return {
        props: {
            classList,
            gaugeList: [
                {
                    indicator: 'Estudantes',
                    highlight: '#6f52ed',
                    value: studentList.docs.length
                },
                {
                    indicator: 'Professores',
                    highlight: '#FFCA32',
                    value: teacherList.docs.length
                },
                {
                    indicator: 'Turmas',
                    highlight: '#21B8C7',
                    value: classList.length
                }
            ]
        }
    };
}

const DashboardClassList = ({ classList = [], gaugeList = [] }) => {
    const AuthUser = useAuthUser();

    return (
        <ContainerLayout user={AuthUser}>
            <GaugeGroup data={gaugeList} />
            <Section>
                <Card>
                    <ActionNav />
                    <Content>
                        <ClassTable data={classList} />
                    </Content>
                </Card>
            </Section>
        </ContainerLayout>
    );
};

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(DashboardClassList);
