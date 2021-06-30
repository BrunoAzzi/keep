import React from 'react';
import styled from 'styled-components';
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth';

import { FlexColumn } from '@styles/flex';
import { TeacherList } from '@components/TeacherList';
import { Card, Title, Layout, ImageLayout, CardTitle } from '@components/index';
import { handleTeacherList, teacherCollection } from 'serialize/teacher';
import router from 'next/router';
import { Class } from 'service/routes';

const WhiteCard = styled(Card)`
    max-height: 70vh;
`;

const Content = styled(FlexColumn)`
    width: 100%;
`;

export async function getServerSideProps() {
    const teacherListResponse = await teacherCollection.get();
    const teacherList = await handleTeacherList(teacherListResponse.docs);

    return { props: { teacherList } };
}

const CreateClass = ({ teacherList }) => {
    const AuthUser = useAuthUser();

    const navigateTo = path => row => router.push(path + row.original.id);

    return (
        <Layout user={AuthUser}>
            <ImageLayout image="/images/login.png">
                <Title>Criar Turma</Title>
                <WhiteCard>
                    <Content>
                        <CardTitle>Selecionar professor</CardTitle>
                        <TeacherList
                            data={teacherList}
                            clickable
                            onRowClick={navigateTo(Class.Create.SetupClass)}
                        />
                    </Content>
                </WhiteCard>
            </ImageLayout>
        </Layout>
    );
};

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(CreateClass);
