import axios from 'axios';
import { Button } from '@components/Button';
import { Checkbox } from '@components/Checkbox';
import { Form } from '@components/Form';
import { Input, InputRow } from '@components/Input';
import { FlexColumn } from '@components/styles/flex';
import { Title } from '@components/Title';
import { Formik } from 'formik';
import styled from 'styled-components';
import { WeekDaySelect } from '@components/WeekDaySelect';
import { useState } from 'react';

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
    name: 'a',
    birthDate: '1996-02-08',
    age: 'a',
    address: 'a',
    phonenumber: 'a',
    secondaryPhonenumber: 'a',
    email: 'a',
    bloodType: 'a',
    civilState: 'a',
    scholarityLevel: 'a',
    childrenQuantity: 'a',
    major: 'a',
    curriculumLate: 'a',
    instrumentList: 'a',
    workdays: []
};

const bankData = {
    bankName: 'a',
    agency: 'a',
    account: 'a',
    accountType: 'a',
    pixKey: 'a',
    identifier: 'a'
};

const initialData = {
    ...personalData,
    ...bankData
};

export const TeacherForm = () => {
    const [workdays, setWorkdays] = useState([]);

    const handleSubmit = (values, actions) => {
        axios
            .post('/api/teacher', {
                ...values,
                birthDate: values.birthDate + 'T00:00:00',
                workdays
            })
            .then(() => {
                actions.setSubmitting(false);
                router.push(Dashboard.List.Student);
            });
    };

    return (
        <Wrapper>
            <Title>Cadastro de Profressor</Title>
            <Formik initialValues={initialData} onSubmit={handleSubmit}>
                {({ isSubmitting, dirty }) => (
                    <Form>
                        <Subtitle>Dados Pessoais</Subtitle>
                        <Checkbox name="isActive" label="Ativo" />
                        <Input name="name" label="Nome completo" />
                        <InputRow>
                            <Input
                                name="birthDate"
                                type="date"
                                label="Data de nascimento"
                            />
                            <Input name="age" label="Idade Atual" />
                        </InputRow>
                        <Input name="address" label="Endereço" />
                        <InputRow>
                            <Input name="phonenumber" label="Telefone" />
                            <Input
                                name="secondaryPhonenumber"
                                label="Telefone de recado"
                            />
                        </InputRow>
                        <Input name="email" label="E-mail" />
                        <InputRow>
                            <Input name="bloodType" label="Tipo sanguíneo" />
                            <Input name="civilState" label="Estado civil" />
                        </InputRow>
                        <InputRow>
                            <Input
                                name="scholarityLevel"
                                label="Escolaridade"
                            />
                            <Input
                                name="childrenQuantity"
                                label="Quantidade de filhos"
                            />
                        </InputRow>
                        <Input name="major" label="Área de formação" />
                        <Input name="curriculumLate" label="Curriculum late" />
                        <Input
                            name="instrumentList"
                            label="Instrumentos que o professor ensina:"
                        />

                        <Subtitle>Dados Bancários</Subtitle>

                        <Input name="bankName" label="Nome do banco" />
                        <InputRow>
                            <Input name="agency" label="Agência" />
                            <Input name="account" label="Conta" />
                        </InputRow>
                        <InputRow>
                            <Input name="accountType" label="Tipo de conta" />
                            <Input name="pixKey" label="Chave pix" />
                        </InputRow>

                        <Input name="identifier" label="CNPJ/MEI" />
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
