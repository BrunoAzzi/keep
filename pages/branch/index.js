import { AuthAction, withAuthUser } from 'next-firebase-auth';
import { branchCollection, handleBranchList } from 'serialize/branch';

export async function getServerSideProps({ req, res }) {
    const branchListResponse = await branchCollection.get();
    const branchList = await handleBranchList(branchListResponse.docs);

    return {
        redirect: {
            destination: `/branch/${branchList[0].id}/dashboard/class`,
            permanent: true
        }
    };
}

const BranchIndexPage = () => <></>;

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(BranchIndexPage);
