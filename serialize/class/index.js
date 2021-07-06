import { getFirebaseAdmin } from 'next-firebase-auth';
import { handleStudentList } from '../student';
import { handleTeacherReference, serializeTeacher } from '../teacher';

export const classCollection = getFirebaseAdmin()
    .firestore()
    .collection('class');

export const serializeClass = classData => ({
    ...classData,
    endDate: new Date(classData.endDate._seconds * 1000).toString(),
    startDate: new Date(classData.startDate._seconds * 1000).toString(),
    progress:
        ((Date.now() / 1000 - classData.startDate._seconds) * 100) /
        (classData.endDate._seconds - classData.startDate._seconds)
});

export const handleClassReference = async (
    classReference,
    config = { shallow: true }
) => {
    // this can sometimes be a QueryDocumentSnapshot or a DocumentReference
    const classResponse = classReference.ref
        ? await classReference.ref.get() // When it is a QueryDocumentSnapshot we get its DocumentReference before get
        : await classReference.get(); //When it is a DocumentReference there is no need to prepare

    const classData = await classResponse.data();
    const serializedClass = serializeClass(classData);

    if (config.shallow) {
        delete serializedClass.studentList;
        delete serializedClass.teacher;
        return serializedClass;
    }

    const studentList = await handleStudentList(classData.studentList);
    const teacherData = await handleTeacherReference(classData.teacher, {
        shallow: true
    });

    return {
        ...serializedClass,
        teacher: serializeTeacher(teacherData),
        studentList
    };
};

export const handleClassList = async (classReferenceList, config) =>
    Promise.all(
        classReferenceList.map(classEntry =>
            handleClassReference(classEntry, config)
        )
    );
