import React from 'react';
import {
    useAuthUser,
    withAuthUser,
    AuthAction,
    getFirebaseAdmin
} from 'next-firebase-auth';
import { StudentTable, GaugeGroup } from '@components/dashboard';
import { Card, ContainerLayout, Section, Content } from '@components/index';
import { ActionNav } from '@components/dashboard';
import { gaugeList } from 'api/gauge';

export async function getServerSideProps() {
    const db = getFirebaseAdmin().firestore();
    const { docs } = await db.collection('student').get();

    const list = docs.map(a => {
        const student = a.data();
        return {
            ...student,
            endDate: new Date(student.endDate._seconds * 1000).toString()
        };
    });

    return {
        props: {
            studentList: list
        }
    };
}

const DashboardClassList = ({ studentList = [] }) => {
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
