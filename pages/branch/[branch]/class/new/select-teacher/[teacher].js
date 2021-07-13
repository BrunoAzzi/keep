import React from 'react';
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth';
import { Layout, ImageLayout } from '@components/Layout';
import { Title } from '@components/Title';
import { handleTeacherReference, teacherCollection } from 'serialize/teacher';
import { TeacherProfile } from '@components/class/TeacherProfile';
// import { ReportCardSection } from '@components/class/ReportCardSection';
import { Content } from '@components/class/Content';
import { handleStudentList, studentCollection } from 'serialize/student';
import { handleBranchList, branchCollection } from 'serialize/branch';

export async function getServerSideProps(context) {
    const branchListResponse = await branchCollection.get();
    const branchList = await handleBranchList(branchListResponse.docs);

    const teacherReference = await teacherCollection
        .doc(context.params.teacher)
        .get();
    const teacherData = await handleTeacherReference(teacherReference);
    const studentListResponse = await studentCollection.get();
    const studentList = await handleStudentList(studentListResponse.docs);

    return { props: { teacher: teacherData, studentList, branchList } };
}

const SetupClass = ({ teacher, studentList, branchList }) => {
    const AuthUser = useAuthUser();

    return (
        <Layout user={AuthUser} branchList={branchList}>
            <ImageLayout content={<Content studentList={studentList} />}>
                <Title>Configurar Turma</Title>
                <TeacherProfile teacher={teacher} />
                {/* <ReportCardSection /> */}
            </ImageLayout>
        </Layout>
    );
};

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(SetupClass);
