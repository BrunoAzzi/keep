import React from 'react';
import {
    useAuthUser,
    withAuthUser,
    AuthAction,
    getFirebaseAdmin
} from 'next-firebase-auth';
import { makeClassData } from '../../components/makeData';
import { ClassTable, GaugeGroup } from '@components/dashboard';
import { Card, ContainerLayout, Section, Content } from '@components/index';
import { ActionNav } from '@components/dashboard';
import { gaugeList } from 'api/gauge';

export async function getServerSideProps() {
    const db = getFirebaseAdmin().firestore();
    const doc = await db.collection('class').get();

    // const classList = makeClassData(20);

    return {
        props: {
            classList: doc
        }
    };
}

const DashboardClassList = ({ classList = [] }) => {
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
