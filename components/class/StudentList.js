import styled from 'styled-components';
import { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import { Table } from '@components/Table';
import { Avatar } from '@components/Avatar';
import { FlexRowCentered } from '@components/styles/flex';

const Title = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;

    color: #1a1a1a;
    margin-left: 10px;
`;

export const StudentList = ({ data }) => {
    const columns = useMemo(
        () => [
            {
                accessor: 'action',
                Cell: row => <input type="checkbox" />,
                collapse: true
            },
            {
                accessor: 'name',
                Cell: ({ row }) => (
                    <FlexRowCentered key={row.original.id}>
                        <Avatar src={row.original.avatar} />
                        <Title>{row.original.name}</Title>
                    </FlexRowCentered>
                )
            }
        ],
        []
    );

    const tableProps = useTable({ columns, data }, usePagination);

    return <Table head={false} size={data.length} {...tableProps} />;
};
