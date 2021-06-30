import styled from 'styled-components';
import { Formik } from 'formik';
import { Input } from '@components/Input';
import { FlexColumn, FlexRow, FlexRowReverse } from '@components/styles/flex';
import { Card, CardHeader, CardFooter } from '@components/Card';
import { StudentList } from './StudentList';
import { Heading } from '@components/Title';
import { WeekDaySelect } from '@components/WeekDaySelect';
import { Button } from '@components/Button';

const Column = styled(FlexColumn)`
    flex: 1 1 50%;
    margin: 0 18px;
`;

const StyledInput = styled(Input)`
    margin: 30px 0;
`;

const RowStretch = styled(FlexRow)`
    flex: 1 1 auto;
    margin: 30px 0;
`;

const ColumnStretch = styled(FlexColumn)`
    flex: 1 1 auto;
`;

const CardStretch = styled(Card)`
    padding 30px 26px;
    flex: 1 1 auto;
`;

const InputGroup = styled(FlexColumn)`
    margin: 0 12px;
`;

const InputRow = styled(FlexRow)`
    margin: 0 -12px;
`;

const FooterTitle = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 150%;
`;

export const Content = ({ studentList }) => (
    <ColumnStretch>
        <Formik>
            {({ isSubmitting }) => (
                <>
                    <RowStretch>
                        <Column>
                            <StyledInput placeholder="Nome da turma" />
                            <CardStretch footer>
                                <InputRow>
                                    <InputGroup>
                                        <Heading>Data inicial</Heading>
                                        <Input />
                                    </InputGroup>
                                    <InputGroup>
                                        <Heading>Data final</Heading>
                                        <Input />
                                    </InputGroup>
                                </InputRow>
                                <InputRow>
                                    <InputGroup>
                                        <Heading>Horário inicial</Heading>
                                        <Input />
                                    </InputGroup>
                                    <InputGroup>
                                        <Heading>Horário final</Heading>
                                        <Input />
                                    </InputGroup>
                                </InputRow>
                                <FlexColumn>
                                    <Heading>
                                        Selecione os dias em que a aula
                                        acontecerá:
                                    </Heading>
                                    <WeekDaySelect />
                                </FlexColumn>
                            </CardStretch>
                            <CardFooter>
                                <FooterTitle>Dados da Turma</FooterTitle>
                            </CardFooter>
                        </Column>
                        <Column>
                            <StyledInput placeholder="Categoria" />
                            <CardStretch>
                                <CardHeader
                                    total={studentList.length}
                                    title="Alunos"
                                />
                                <StudentList data={studentList} />
                            </CardStretch>
                        </Column>
                    </RowStretch>
                    <FlexRowReverse>
                        <Button disabled={isSubmitting}>Salvar</Button>
                    </FlexRowReverse>
                </>
            )}
        </Formik>
    </ColumnStretch>
);
