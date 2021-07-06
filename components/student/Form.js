import axios from 'axios';
import { Button } from '@components/Button';
import { Checkbox } from '@components/Checkbox';
import { Form } from '@components/Form';
import { Input, InputRow } from '@components/Input';
import { FlexColumn } from '@components/styles/flex';
import { Title } from '@components/Title';
import { Formik } from 'formik';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { StudentSchema } from 'serialize/student/StudentSchema';

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
    const router = useRouter();

    const handleSubmit = (values, actions) => {
        axios
            .post('/api/student', {
                ...values,
                birthDate: values.birthDate + 'T00:00:00'
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
            <Title>Cadastro de Aluno</Title>
            <Formik
                initialValues={initialData}
                onSubmit={handleSubmit}
                validationSchema={StudentSchema}
            >
                {({ isSubmitting, dirty, errors, touched }) => (
                    <Form>
                        <Subtitle>Dados Pessoais</Subtitle>
                        <Checkbox name="isActive" label="Ativo" />
                        <Input
                            error={errors.name}
                            touched={touched.name}
                            name="name"
                            label="Nome completo"
                        />
                        <Input
                            error={errors.number}
                            touched={touched.number}
                            name="number"
                            label="Número de Inscrição"
                        />
                        <InputRow>
                            <Input
                                error={errors.birthDate}
                                touched={touched.birthDate}
                                name="birthDate"
                                type="date"
                                label="Data de nascimento"
                            />
                            <Input
                                error={errors.age}
                                touched={touched.age}
                                name="age"
                                label="Idade Atual"
                            />
                        </InputRow>
                        <InputRow>
                            <Input
                                error={errors.address}
                                touched={touched.address}
                                name="address"
                                label="Endereço"
                            />
                            <Input
                                error={errors.phonenumber}
                                touched={touched.phonenumber}
                                name="phonenumber"
                                label="Telefone"
                            />
                        </InputRow>
                        <Input
                            error={errors.email}
                            touched={touched.email}
                            name="email"
                            label="E-mail"
                        />
                        <Input
                            error={errors.parentName}
                            touched={touched.parentName}
                            name="parentName"
                            label="Nome dos resposáveis"
                        />

                        <Subtitle>Dados Demográficos</Subtitle>

                        <Input
                            error={errors.schoolName}
                            touched={touched.schoolName}
                            name="schoolName"
                            label="Nome da escola em que estuda"
                        />
                        <InputRow>
                            <Input
                                error={errors.scholarityLevel}
                                touched={touched.scholarityLevel}
                                name="scholarityLevel"
                                label="Série"
                            />
                            <Input
                                error={errors.period}
                                touched={touched.period}
                                name="period"
                                label="Período"
                            />
                        </InputRow>
                        <InputRow>
                            <Input
                                error={errors.shirtSize}
                                touched={touched.shirtSize}
                                name="shirtSize"
                                label="Tamanho da camiseta"
                            />
                            <Input
                                error={errors.desiredInstrument}
                                touched={touched.desiredInstrument}
                                name="desiredInstrument"
                                label="Instrumento de interesse"
                            />
                        </InputRow>
                        <Input
                            error={errors.scholarityRegistryInfo}
                            touched={touched.scholarityRegistryInfo}
                            as="textarea"
                            name="scholarityRegistryInfo"
                            rows="4"
                            label="Informações de acesso ao Registro escolar"
                        />

                        <Subtitle>Dados Socioeconômicos</Subtitle>
                        <InputRow>
                            <Input
                                error={errors.familyIncome}
                                touched={touched.familyIncome}
                                name="familyIncome"
                                label="Renda Familiar"
                            />
                            <Input
                                error={errors.parentSalaryLevel}
                                touched={touched.parentSalaryLevel}
                                name="parentSalaryLevel"
                                label="Faixa Salarial do responsável"
                            />
                        </InputRow>
                        <InputRow>
                            <Input
                                error={errors.isParentWorking}
                                touched={touched.isParentWorking}
                                name="isParentWorking"
                                label="O responsável está trabalhando?"
                            />
                            <Input
                                error={errors.isParentReceivingPension}
                                touched={touched.isParentReceivingPension}
                                name="isParentReceivingPension"
                                label="Recebe algum auxílio?"
                            />
                        </InputRow>

                        <Input
                            error={errors.pensionDescription}
                            touched={touched.pensionDescription}
                            name="pensionDescription"
                            label="Está cadastrados em algum benefício social? Qual?"
                        />

                        <InputRow>
                            <Input
                                error={errors.typeOfResidence}
                                touched={touched.typeOfResidence}
                                name="typeOfResidence"
                                label="Mora em casa alugada ou própria?"
                            />
                            <Input
                                error={errors.rentValue}
                                touched={touched.rentValue}
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
