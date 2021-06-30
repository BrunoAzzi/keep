import { getFirebaseAdmin } from 'next-firebase-auth';
import { handleClassList } from './class';

export const teacherCollection = getFirebaseAdmin()
    .firestore()
    .collection('teacher');

export const serializeTeacher = teacherData => ({
    ...teacherData,
    endDate: new Date(teacherData.endDate._seconds * 1000).toString()
});

export const handleTeacherReference = async teacherReference => {
    // const teacherResponse = teacherReference.ref
    //     ? await teacherReference.ref.get() // When it is a QueryDocumentSnapshot we get its DocumentReference before get
    //     : await teacherReference.get(); //When it is a DocumentReference there is no need to prepare

    const teacherData = await teacherReference.data();
    const classList = await handleClassList(teacherData.classList);

    return {
        ...serializeTeacher(teacherData),
        id: teacherReference.id,
        classList
    };
};

export const handleTeacherList = async teacherReferenceList =>
    Promise.all(teacherReferenceList.map(handleTeacherReference));
