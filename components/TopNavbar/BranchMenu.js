import { useRouter } from 'next/router';
import { Menu, MenuItem } from '@components/Menu';

export const BranchMenu = ({ branch, branchList = [] }) => {
    const router = useRouter();
    const matchWithRoute = branch => branch.id === router.query.branch;
    const currentBranch = branchList.find(matchWithRoute);

    const navigate = branch => () => {
        router.push({
            ...router,
            query: {
                ...router.query,
                branch
            }
        });
    };

    return currentBranch ? (
        <Menu header={<span>{currentBranch.name}</span>}>
            {branchList.map(branch => (
                <MenuItem key={branch.id} onClick={navigate(branch.id)}>
                    {branch.name}
                </MenuItem>
            ))}
        </Menu>
    ) : null;
};
