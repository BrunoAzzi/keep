import React from 'react';
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth';
import { ClassTable, GaugeGroup } from '@components/dashboard';
import {
    Card,
    ContainerLayout,
    Section,
    Content,
    Button
} from '@components/index';
import { ActionNav } from '@components/dashboard';
import { classCollection, handleClassList } from 'serialize/class';
import { teacherCollection } from 'serialize/teacher';
import { studentCollection } from 'serialize/student';
import { Class } from 'service/routes';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { branchCollection, handleBranchList } from 'serialize/branch';

export async function getServerSideProps() {
    const branchListResponse = await branchCollection.get();
    const branchList = await handleBranchList(branchListResponse.docs);

    const classListResponse = await classCollection.get();
    const classList = await handleClassList(classListResponse.docs, {
        shallow: false
    });
    const teacherList = await teacherCollection.get();
    const studentList = await studentCollection.get();

    return {
        props: {
            classList,
            branchList,
            gaugeList: [
                {
                    indicator: 'Estudantes',
                    highlight: '#6f52ed',
                    value: studentList.docs.length
                },
                {
                    indicator: 'Professores',
                    highlight: '#FFCA32',
                    value: teacherList.docs.length
                },
                {
                    indicator: 'Turmas',
                    highlight: '#21B8C7',
                    value: classList.length
                }
            ]
        }
    };
}

const DashboardClassList = ({
    classList = [],
    gaugeList = [],
    branchList = []
}) => {
    const router = useRouter();
    const { branch } = router.query;
    const AuthUser = useAuthUser();

    return (
        <ContainerLayout user={AuthUser} branchList={branchList}>
            <GaugeGroup data={gaugeList} />
            <Section>
                <Card>
                    <ActionNav>
                        <Link
                            passHref
                            href={{
                                pathname: Class.Create.SelectTeacher,
                                query: { branch }
                            }}
                        >
                            <Button as="a">Criar nova turma</Button>
                        </Link>
                    </ActionNav>
                    <Content>
                        <ClassTable data={classList} />
                    </Content>
                </Card>
            </Section>
        </ContainerLayout>
    );
};

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(DashboardClassList);
