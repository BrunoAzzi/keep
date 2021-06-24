import { Avatar } from '@components/Avatar';
import { FlexRowCentered } from '@components/styles/flex';

export const StudentListCell = row => (
    <FlexRowCentered>
        {row.row.original.studentList.map(avatar => (
            <Avatar key={avatar} image={avatar} />
        ))}
    </FlexRowCentered>
);
