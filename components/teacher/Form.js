import axios from 'axios';
import { Button } from '@components/Button';
import { Checkbox } from '@components/Checkbox';
import { Form } from '@components/Form';
import { Input, InputRow } from '@components/Input';
import { FlexColumn } from '@components/styles/flex';
import { Title } from '@components/Title';
import { ErrorMessage, Formik } from 'formik';
import styled from 'styled-components';
import { WeekDaySelect } from '@components/WeekDaySelect';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { TeacherSchema } from 'serialize/teacher/TeacherSchema';

const Subtitle = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    padding: 24px 0;
    margin: 30px 0 30px;

    :first-child {
        margin-top: 0;
    }
`;

const Wrapper = styled(FlexColumn)`
    min-width: 462px;
`;

const StyledButton = styled(Button)`
    margin-top: 30px;
`;

const personalData = {
    isActive: true,
    name: '',
    birthDate: '',
    age: '',
    address: '',
    phonenumber: '',
    secondaryPhonenumber: '',
    email: '',
    bloodType: '',
    civilState: '',
    scholarityLevel: '',
    childrenQuantity: '',
    major: '',
    curriculumLate: '',
    instrumentList: '',
    workdays: []
};

const bankData = {
    bankName: '',
    agency: '',
    account: '',
    accountType: '',
    pixKey: '',
    identifier: ''
};

const initialData = {
    ...personalData,
    ...bankData
};

export const TeacherForm = () => {
    const router = useRouter();
    const [workdays, setWorkdays] = useState([]);

    const handleSubmit = (values, actions) => {
        axios
            .post('/api/teacher', {
                ...values,
                birthDate: values.birthDate + 'T00:00:00',
                instrumentList: values.instrumentList.split(',') || [],
                workdays
            })
            .then(() => {
                router.reload();
            })
            .catch(() => {
                actions.setSubmitting(false);
            });
    };

    return (
        <Wrapper>
            <Title>Cadastro de Profressor</Title>
            <Formik
                initialValues={initialData}
                onSubmit={handleSubmit}
                validationSchema={TeacherSchema}
            >
                {({ isSubmitting, dirty, errors, touched }) => (
                    <Form>
                        <Subtitle>Dados Pessoais</Subtitle>
                        <Checkbox name="isActive" label="Ativo" />
                        <Input
                            name="name"
                            label="Nome completo"
                            error={errors.name}
                            touched={touched.name}
                        />
                        <InputRow>
                            <Input
                                name="birthDate"
                                type="date"
                                label="Data de nascimento"
                                error={errors.birthDate}
                                touched={touched.birthDate}
                            />
                            <Input
                                name="age"
                                label="Idade Atual"
                                error={errors.age}
                                touched={touched.age}
                            />
                        </InputRow>
                        <Input
                            name="address"
                            label="Endereço"
                            error={errors.address}
                            touched={touched.address}
                        />
                        <InputRow>
                            <Input
                                name="phonenumber"
                                label="Telefone"
                                error={errors.phonenumber}
                                touched={touched.phonenumber}
                            />
                            <Input
                                name="secondaryPhonenumber"
                                label="Telefone de recado"
                                error={errors.secondaryPhonenumber}
                                touched={touched.secondaryPhonenumber}
                            />
                        </InputRow>
                        <Input
                            name="email"
                            label="E-mail"
                            error={errors.email}
                            touched={touched.email}
                        />
                        <InputRow>
                            <Input
                                name="bloodType"
                                label="Tipo sanguíneo"
                                error={errors.bloodType}
                                touched={touched.bloodType}
                            />
                            <Input
                                name="civilState"
                                label="Estado civil"
                                error={errors.civilState}
                                touched={touched.civilState}
                            />
                        </InputRow>
                        <InputRow>
                            <Input
                                name="scholarityLevel"
                                label="Escolaridade"
                                error={errors.scholarityLevel}
                                touched={touched.scholarityLevel}
                            />
                            <Input
                                name="childrenQuantity"
                                label="Quantidade de filhos"
                                error={errors.childrenQuantity}
                                touched={touched.childrenQuantity}
                            />
                        </InputRow>
                        <Input
                            name="major"
                            label="Área de formação"
                            error={errors.major}
                            touched={touched.major}
                        />
                        <Input
                            name="curriculumLate"
                            label="Curriculum late"
                            error={errors.curriculumLate}
                            touched={touched.curriculumLate}
                        />
                        <Input
                            name="instrumentList"
                            label="Instrumentos que o professor ensina:"
                            error={errors.instrumentList}
                            touched={touched.instrumentList}
                        />

                        <Subtitle>Dados Bancários</Subtitle>

                        <Input
                            name="bankName"
                            label="Nome do banco"
                            error={errors.bankName}
                            touched={touched.bankName}
                        />
                        <InputRow>
                            <Input
                                name="agency"
                                label="Agência"
                                error={errors.agency}
                                touched={touched.agency}
                            />
                            <Input
                                name="account"
                                label="Conta"
                                error={errors.account}
                                touched={touched.account}
                            />
                        </InputRow>
                        <InputRow>
                            <Input
                                name="accountType"
                                label="Tipo de conta"
                                error={errors.accountType}
                                touched={touched.accountType}
                            />
                            <Input
                                name="pixKey"
                                label="Chave pix"
                                error={errors.pixKey}
                                touched={touched.pixKey}
                            />
                        </InputRow>

                        <Input
                            name="identifier"
                            label="CNPJ/MEI"
                            error={errors.identifier}
                            touched={touched.identifier}
                        />
                        <WeekDaySelect
                            label="Dias da semana em que trabalha:"
                            name="workdays"
                            value={workdays}
                            onChange={setWorkdays}
                        />

                        <StyledButton disabled={!dirty || isSubmitting}>
                            Adicionar
                        </StyledButton>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};
