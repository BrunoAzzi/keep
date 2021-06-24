import React from 'react';
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth';
import { StudentTable, GaugeGroup } from '@components/dashboard';
import { Card, ContainerLayout, Section, Content } from '@components/index';
import { ActionNav } from '@components/dashboard';
import { handleStudentList, studentCollection } from 'serialize/student';
import { teacherCollection } from 'serialize/teacher';
import { classCollection } from 'serialize/class';

export async function getServerSideProps() {
    const studentListResponse = await studentCollection.get();
    const studentList = await handleStudentList(studentListResponse.docs);
    const teacherList = await teacherCollection.get();
    const classList = await classCollection.get();

    return {
        props: {
            studentList,
            gaugeList: [
                {
                    indicator: 'Estudantes',
                    highlight: '#6f52ed',
                    value: studentList.length
                },
                {
                    indicator: 'Professores',
                    highlight: '#FFCA32',
                    value: teacherList.docs.length
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

const DashboardClassList = ({ studentList = [], gaugeList = [] }) => {
    const AuthUser = useAuthUser();

    return (
        <ContainerLayout user={AuthUser}>
            <GaugeGroup data={gaugeList} />
            <Section>
                <Card>
                    <ActionNav />
                    <Content>
                        <StudentTable data={studentList} />
                    </Content>
                </Card>
            </Section>
        </ContainerLayout>
    );
};

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(DashboardClassList);
