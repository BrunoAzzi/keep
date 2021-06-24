import { getFirebaseAdmin } from 'next-firebase-auth';
import { handleStudentList } from './student';

export const classCollection = getFirebaseAdmin()
    .firestore()
    .collection('class');

export const serializeClass = classData => ({
    ...classData,
    endDate: new Date(classData.endDate._seconds * 1000).toString()
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
        return serializedClass;
    }

    const studentList = await handleStudentList(classData.studentList);

    return {
        ...serializedClass,
        studentList
    };
};

export const handleClassList = async (classReferenceList, config) =>
    Promise.all(
        classReferenceList.map(classEntry =>
            handleClassReference(classEntry, config)
        )
    );
