import React from 'react';
import { TableWithPagination } from './Table';
import { useTable, usePagination } from 'react-table';
import { BaseStatus } from './Status';

export const TeacherList = ({ data = [], clickable, onRowClick }) => {
    const initialState = { pageIndex: 0, pageSize: 7 };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Nome',
                accessor: 'name'
            },
            {
                Header: 'Categoria',
                accessor: 'categoryList',
                Cell: ({ row }) => (
                    <BaseStatus color={row.original.categoryList[0].color}>
                        {row.original.categoryList[0].name}
                    </BaseStatus>
                )
            },
            {
                id: 'actions',
                accessor: 'actions',
                collapse: true,
                Cell: ({ original }) => 'delete'
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
