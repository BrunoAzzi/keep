import React from 'react';
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth';
import { DashboardLayout, ImageLayout } from '../../components/Layout';
import { Title } from '../../components/Title';

const SetupClass = () => {
    const AuthUser = useAuthUser();

    return (
        <DashboardLayout user={AuthUser}>
            <ImageLayout>
                <Title>Configurar Turma</Title>
            </ImageLayout>
        </DashboardLayout>
    );
};

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(SetupClass);
