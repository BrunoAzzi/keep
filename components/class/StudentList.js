import styled from 'styled-components';
import { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import { TableWithPagination } from '@components/Table';
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

export const StudentList = ({ data, onSelect }) => {
    const initialState = { pageIndex: 0, pageSize: 7 };
    const selectedList = [];

    const toggleInList = ({ target }) => {
        const { checked, name } = target;

        checked
            ? onSelect([...selectedList, name])
            : onSelect(selectedList.filter(studentId => studentId !== name));
    };

    const columns = useMemo(
        () => [
            {
                accessor: 'action',
                Cell: ({ row }) => (
                    <input
                        name={row.original.id}
                        type="checkbox"
                        onChange={toggleInList}
                    />
                ),
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

    const tableProps = useTable({ columns, data, initialState }, usePagination);

    return (
        <TableWithPagination head={false} size={data.length} {...tableProps} />
    );
};
