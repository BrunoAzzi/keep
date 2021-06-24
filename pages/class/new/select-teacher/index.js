import React from 'react';
import styled from 'styled-components';
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth';

import {
    TeacherList,
    BaseCard,
    Title,
    DashboardLayout,
    ImageLayout
} from '@components/index';

import { makeTeacherListData } from '@components/makeData';
import { FlexColumn } from '@styles/flex';

const CardTitle = styled.h2`
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    color: #121212;
`;

const WhiteCard = styled(BaseCard)`
    width: 100%;
    background: white;
    max-height: 70vh;
`;

const Content = styled(FlexColumn)`
    width: 100%;
`;

const CreateClass = () => {
    const AuthUser = useAuthUser();
    const data = React.useMemo(() => makeTeacherListData(20), []);

    return (
        <DashboardLayout user={AuthUser}>
            <ImageLayout>
                <Title>Criar Turma</Title>
                <WhiteCard>
                    <Content>
                        <CardTitle>Selecionar professor</CardTitle>
                        <TeacherList data={data} />
                    </Content>
                </WhiteCard>
            </ImageLayout>
        </DashboardLayout>
    );
};

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(CreateClass);
