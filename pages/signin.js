import { withAuthUser, AuthAction } from 'next-firebase-auth';
import { Loader } from '../components/Loader';
import Logo from '../public/images/Logo.svg';

import styled from 'styled-components';
import { ImageLayout } from '../components/Layout/ImageLayout';
import firebase from 'firebase/app';
import 'firebase/auth';

import { Formik, Form, Field } from 'formik';
import { FlexColumn } from '../components/styles/flex';

const StyledLogo = styled(Logo)`
    min-width: 188px;
    min-height: 42px;
    align-self: flex-start;
    margin-bottom: 68px;
`;

const Description = styled.span`
    width: 100%;
    text-align: left;
    display: block;
    font-size: 20px;
    line-height: 180%;
`;

const Title = styled(Description)`
    font-weight: bold;
`;

const Input = styled(Field)`
    appearence: none;
    background: #ffffff;
    border: 0.5px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 11px 13px;
    margin: 10px 0;
    width: 100%;
`;

const StyledForm = styled(Form)`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

const InputListWrapper = styled(FlexColumn)`
    margin: 54px 0;
`;

const SubmitButton = styled.button`
    appearence: none;
    border: none;
    background: #595cff;
    border-radius: 5px;

    font-weight: bold;
    font-size: 16px;
    color: white;

    padding: 16px 18px;
`;

const Link = styled.a`
    text-align: right;
    font-weight: bold;
    font-size: 10px;
    line-height: 14px;
    text-decoration: underline;
    cursor: pointer;
`;

const emailValidator = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const SignInPage = () => {
    const initialValue = { email: '', password: '' };

    const handleSubmit = (values, { setSubmitting }) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <ImageLayout>
            <StyledLogo width="188" height="42" />
            <Title>Log in</Title>
            <Formik
                initialValues={initialValue}
                validate={emailValidator}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <StyledForm>
                        <InputListWrapper>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            {/* <ErrorMessage name="email" component="div" /> */}
                            <Input
                                type="password"
                                name="password"
                                placeholder="Senha"
                            />
                            {/* <ErrorMessage name="password" component="div" /> */}
                            <Link>Esqueci a senha</Link>
                        </InputListWrapper>
                        <SubmitButton disabled={isSubmitting}>
                            Entrar
                        </SubmitButton>
                    </StyledForm>
                )}
            </Formik>
        </ImageLayout>
    );
};

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
    whenUnauthedAfterInit: AuthAction.RENDER,
    LoaderComponent: Loader
})(SignInPage);
