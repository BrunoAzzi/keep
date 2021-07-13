import { getFirebaseAdmin } from 'next-firebase-auth';

export const branchCollection = getFirebaseAdmin()
    .firestore()
    .collection('branch');

export const serializeBranch = branch => branch;

export const handleBranchReference = async branchReference => {
    // this can sometimes be a QueryDocumentSnapshot or a DocumentReference
    const branchResponse = branchReference.ref
        ? await branchReference.ref.get() // When it is a QueryDocumentSnapshot we get its DocumentReference before get
        : await branchReference.get(); //When it is a DocumentReference there is no need to prepare

    const branch = await branchResponse.data();

    return serializeBranch({
        ...branch,
        id: branchResponse.id
    });
};

export const handleBranchList = async branchReferenceList =>
    Promise.all(branchReferenceList.map(handleBranchReference));
