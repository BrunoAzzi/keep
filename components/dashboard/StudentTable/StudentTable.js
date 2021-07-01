import React from 'react';
import moment from 'moment';
import { useTable, usePagination } from 'react-table';
import { TableWithPagination } from '../../index';
import { StatusCell } from './StatusCell';
import { FlexRowCentered } from '@components/styles/flex';
import { Avatar } from '@components/Avatar';
import styled from 'styled-components';
import { Tag } from '@components/Tag';

moment.locale('pt-br');

const AvatarWithMargin = styled(Avatar)`
    margin-right: 8px;
`;

export const StudentTable = ({ data }) => {
    const initialState = { pageIndex: 0, pageSize: 7 };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Aluno',
                accessor: 'name',
                Cell: ({ row }) => (
                    <FlexRowCentered>
                        <AvatarWithMargin image={row.original.avatar} />
                        <span>{row.original.name}</span>
                    </FlexRowCentered>
                )
            },
            {
                Header: 'Turmas',
                accessor: 'classList',
                Cell: row =>
                    row.row.original.classList.map(classData => (
                        <Tag key={classData.id}>{classData.name}</Tag>
                    ))
            },
            {
                Header: 'Local de residencia',
                accessor: 'address'
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: StatusCell
            },
            {
                Header: 'Finalização',
                accessor: 'endDate',
                collapse: true,
                Cell: row => moment(row.row.original.endDate).calendar()
            }
        ],
        []
    );

    const tableProps = useTable({ columns, data, initialState }, usePagination);

    return <TableWithPagination size={data.length} {...tableProps} />;
};
