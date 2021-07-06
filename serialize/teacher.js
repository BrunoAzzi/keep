import { getFirebaseAdmin } from 'next-firebase-auth';
import { handleClassList } from './class';

export const teacherCollection = getFirebaseAdmin()
    .firestore()
    .collection('teacher');

export const serializeTeacher = teacherData => ({
    ...teacherData,
    birthDate: new Date(teacherData.birthDate._seconds * 1000).toString()
});

export const handleTeacherReference = async (
    teacherReference,
    config = { shallow: true }
) => {
    console.log(teacherReference);
    const teacherResponse = teacherReference.ref
        ? await teacherReference.ref.get() // When it is a QueryDocumentSnapshot we get its DocumentReference before get
        : await teacherReference.get(); //When it is a DocumentReference there is no need to prepare

    const teacherData = await teacherResponse.data();

    const serializedTeacher = {
        ...serializeTeacher(teacherData),
        id: teacherReference.id
    };

    if (config.shallow) {
        delete serializedTeacher.classList;
        return serializedTeacher;
    }

    const classList = await handleClassList(teacherData.classList);

    return {
        ...serializedTeacher,
        classList
    };
};

export const handleTeacherList = async (teacherReferenceList, config) =>
    Promise.all(
        teacherReferenceList.map(teacherReference =>
            handleTeacherReference(teacherReference, config)
        )
    );
