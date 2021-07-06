import { getFirebaseAdmin } from 'next-firebase-auth';
import { classCollection } from './class';

export const studentCollection = getFirebaseAdmin()
    .firestore()
    .collection('student');

export const serializeStudent = student => ({
    ...student,
    birthDate: student.bithDate
        ? new Date(student.birthDate._seconds * 1000).toString()
        : Date.now().toString()
});

export const handleStudentReference = async studentReference => {
    // this can sometimes be a QueryDocumentSnapshot or a DocumentReference
    const studentResponse = studentReference.ref
        ? await studentReference.ref.get() // When it is a QueryDocumentSnapshot we get its DocumentReference before get
        : await studentReference.get(); //When it is a DocumentReference there is no need to prepare

    const student = await studentResponse.data();

    const classList = await classCollection
        .where('studentList', 'array-contains', studentResponse.ref)
        .get();

    return serializeStudent({
        ...student,
        classList: classList.docs.map(doc => ({
            name: doc.data().name
        })),
        id: studentResponse.id
    });
};

export const handleStudentList = async studentReferenceList =>
    Promise.all(studentReferenceList.map(handleStudentReference));
