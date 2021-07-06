import React from 'react';
import { TableWithPagination } from './Table';
import { useTable, usePagination } from 'react-table';
import { Tag } from './Tag';
import { FlexRowCentered } from './styles/flex';
import { Avatar } from './Avatar';
import styled from 'styled-components';

const AvatarWithMargin = styled(Avatar)`
    margin-right: 8px;
`;

export const TeacherList = ({ data = [], clickable, onRowClick }) => {
    const initialState = { pageIndex: 0, pageSize: 7 };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Nome',
                accessor: 'name',
                Cell: ({ row }) => (
                    <FlexRowCentered key={row.original.id}>
                        <AvatarWithMargin src={row.original.avatar} />
                        <span>{row.original.name}</span>
                    </FlexRowCentered>
                )
            },
            {
                Header: 'Instrumentos',
                accessor: 'instrumentList',
                Cell: row =>
                    row.row.original.instrumentList.map(instrument => (
                        <Tag key={instrument}>{instrument}</Tag>
                    ))
            }
        ],
        []
    );

    const tableProps = useTable({ columns, data, initialState }, usePagination);

    return (
        <TableWithPagination
            size={data.length}
            {...tableProps}
            onRowClick={onRowClick}
            clickable={clickable}
        />
    );
};
