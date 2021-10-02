import { AuthAction, withAuthUser } from 'next-firebase-auth';
import { branchCollection, handleBranchList } from 'serialize/branch';

export async function getServerSideProps({ req, res }) {
    const branchListResponse = await branchCollection.get();
    const branchList = await handleBranchList(branchListResponse.docs);

    res.writeHead(301, {
        Location: `/branch/${branchList[0].id}/dashboard/class`
    });
    res.end();
}

const BranchIndexPage = () => <></>;

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(BranchIndexPage);
