import React from 'react';
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth';
import { TeacherTable, GaugeGroup } from '@components/dashboard';
import { Card, ContainerLayout, Section, Content } from '@components/index';
import { ActionNav } from '@components/dashboard';
import { handleTeacherList, teacherCollection } from 'serialize/teacher';
import { studentCollection } from 'serialize/student';
import { classCollection } from 'serialize/class';

export async function getServerSideProps() {
    const teacherListResponse = await teacherCollection.get();
    const teacherList = await handleTeacherList(teacherListResponse.docs);
    const studentList = await studentCollection.get();
    const classList = await classCollection.get();

    return {
        props: {
            teacherList,
            gaugeList: [
                {
                    indicator: 'Estudantes',
                    highlight: '#6f52ed',
                    value: studentList.docs.length
                },
                {
                    indicator: 'Professores',
                    highlight: '#FFCA32',
                    value: teacherList.length
                },
                {
                    indicator: 'Turmas',
                    highlight: '#21B8C7',
                    value: classList.docs.length
                }
            ]
        }
    };
}

const DashboardClassList = ({ teacherList = [], gaugeList = [] }) => {
    const AuthUser = useAuthUser();

    return (
        <ContainerLayout user={AuthUser}>
            <GaugeGroup data={gaugeList} />
            <Section>
                <Card>
                    <ActionNav />
                    <Content>
                        <TeacherTable data={teacherList} />
                    </Content>
                </Card>
            </Section>
        </ContainerLayout>
    );
};

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(DashboardClassList);
