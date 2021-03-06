import React from 'react';
import moment from 'moment';
import { useTable, usePagination } from 'react-table';
import { TableWithPagination } from '../../index';
import { StatusCell } from './StatusCell';
import { Avatar } from '@components/Avatar';
import { Tag } from '@components/Tag';
import { FlexRowCentered } from '@components/styles/flex';
import styled from 'styled-components';

moment.locale('pt-br');

const AvatarWithMargin = styled(Avatar)`
    margin-right: 8px;
`;

export const TeacherTable = ({ data }) => {
    const initialState = { pageIndex: 0, pageSize: 7 };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Professor',
                accessor: 'name',
                Cell: ({ row }) => (
                    <FlexRowCentered>
                        <AvatarWithMargin image={row.original.avatar} />
                        <span>{row.original.name}</span>
                    </FlexRowCentered>
                )
            },
            {
                Header: 'Especialidades',
                accessor: 'instrumentList',
                Cell: row =>
                    row.row.original.instrumentList.map(instrument => (
                        <Tag key={instrument}>{instrument}</Tag>
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
            }
        ],
        []
    );

    const tableProps = useTable({ columns, data, initialState }, usePagination);

    return <TableWithPagination size={data.length} {...tableProps} />;
};
