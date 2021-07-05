import axios from 'axios';
import { Button } from '@components/Button';
import { Checkbox } from '@components/Checkbox';
import { Form } from '@components/Form';
import { Input, InputRow } from '@components/Input';
import { FlexColumn } from '@components/styles/flex';
import { Title } from '@components/Title';
import { Formik } from 'formik';
import styled from 'styled-components';

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
    number: '',
    birthDate: '',
    age: '',
    address: '',
    phonenumber: '',
    email: '',
    parentName: ''
};

const demographicData = {
    schoolName: '',
    scholarityLevel: '',
    period: '',
    shirtSize: '',
    desiredInstrument: '',
    scholarityRegistryInfo: ''
};

const socioeconomicData = {
    familyIncome: '',
    parentSalaryLevel: '',
    isParentWorking: '',
    isParentReceivingPension: '',
    pensionDescription: '',
    typeOfResidence: '',
    rentValue: ''
};

const initialData = {
    ...personalData,
    ...demographicData,
    ...socioeconomicData
};

export const StudentForm = () => {
    const handleSubmit = (values, actions) => {
        axios
            .post('/api/student', {
                ...values,
                birthDate: values.birthDate + 'T00:00:00'
            })
            .then(() => actions.setSubmitting(false));
    };

    return (
        <Wrapper>
            <Title>Cadastro de Aluno</Title>
            <Formik initialValues={initialData} onSubmit={handleSubmit}>
                {({ isSubmitting, dirty }) => (
                    <Form>
                        <Subtitle>Dados Pessoais</Subtitle>
                        <Checkbox name="isActive" label="Ativo" />
                        <Input name="name" label="Nome completo" />
                        <Input name="number" label="Número de Inscrição" />
                        <InputRow>
                            <Input
                                name="birthDate"
                                type="date"
                                label="Data de nascimento"
                            />
                            <Input name="age" label="Idade Atual" />
                        </InputRow>
                        <InputRow>
                            <Input name="address" label="Endereço" />
                            <Input name="phonenumber" label="Telefone" />
                        </InputRow>
                        <Input name="email" label="E-mail" />
                        <Input name="parentName" label="Nome dos resposáveis" />

                        <Subtitle>Dados Demográficos</Subtitle>

                        <Input
                            name="schoolName"
                            label="Nome da escola em que estuda"
                        />
                        <InputRow>
                            <Input name="scholarityLevel" label="Série" />
                            <Input name="period" label="Período" />
                        </InputRow>
                        <InputRow>
                            <Input
                                name="shirtSize"
                                label="Tamanho da camiseta"
                            />
                            <Input
                                name="desiredInstrument"
                                label="Instrumento de interesse"
                            />
                        </InputRow>
                        <Input
                            as="textarea"
                            name="scholarityRegistryInfo"
                            rows="4"
                            label="Informações de acesso ao Registro escolar"
                        />

                        <Subtitle>Dados Socioeconômicos</Subtitle>
                        <InputRow>
                            <Input name="familyIncome" label="Renda Familiar" />
                            <Input
                                name="parentSalaryLevel"
                                label="Faixa Salarial do responsável"
                            />
                        </InputRow>
                        <InputRow>
                            <Input
                                name="isParentWorking"
                                label="O responsável está trabalhando?"
                            />
                            <Input
                                name="isParentReceivingPension"
                                label="Recebe algum auxílio?"
                            />
                        </InputRow>

                        <Input
                            name="pensionDescription"
                            label="Está cadastrados em algum benefício social? Qual?"
                        />

                        <InputRow>
                            <Input
                                name="typeOfResidence"
                                label="Mora em casa alugada ou própria?"
                            />
                            <Input
                                name="rentValue"
                                label="Qual valor do aluguel?"
                            />
                        </InputRow>

                        <StyledButton disabled={!dirty || isSubmitting}>
                            Adicionar
                        </StyledButton>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};
