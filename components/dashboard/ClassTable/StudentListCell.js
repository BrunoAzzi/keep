import { Avatar } from '@components/Avatar';
import { FlexRowCentered } from '@components/styles/flex';

export const StudentListCell = row => (
    <FlexRowCentered>
        {row.row.original.studentList.map(({ avatar, name }) => (
            <Avatar title={name} key={avatar} image={avatar} />
        ))}
    </FlexRowCentered>
);
