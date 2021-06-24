import { getFirebaseAdmin } from 'next-firebase-auth';

export const studentCollection = getFirebaseAdmin()
    .firestore()
    .collection('student');

export const serializeStudent = student => ({
    ...student,
    endDate: new Date(student.endDate._seconds * 1000).toString()
});

export const handleStudentReference = async studentReference => {
    // this can sometimes be a QueryDocumentSnapshot or a DocumentReference
    const studentResponse = studentReference.ref
        ? await studentReference.ref.get() // When it is a QueryDocumentSnapshot we get its DocumentReference before get
        : await studentReference.get(); //When it is a DocumentReference there is no need to prepare

    const student = await studentResponse.data();
    return serializeStudent(student);
};

export const handleStudentList = async studentReferenceList =>
    Promise.all(studentReferenceList.map(handleStudentReference));
