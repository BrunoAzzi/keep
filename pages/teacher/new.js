import { ContainerLayout } from '@components/index';
import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth';

const CreateTeacherPage = () => {
    const AuthUser = useAuthUser();

    return <ContainerLayout user={AuthUser}></ContainerLayout>;
};

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(CreateTeacherPage);
