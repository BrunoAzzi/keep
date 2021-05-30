import React from 'react';
import { Wrapper, Table, Cell, HeaderCell, TableRow } from './Table';
import { useTable, usePagination } from 'react-table';
import { Pagination } from './Pagination';
import { BaseStatus } from './Status';

export const TeacherList = ({ data = [] }) => {
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

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 7 }
        },
        usePagination
    );

    return (
        <Wrapper>
            <Table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <TableRow
                            key={headerGroup.id}
                            {...headerGroup.getHeaderGroupProps()}
                        >
                            {headerGroup.headers.map(column => (
                                <HeaderCell
                                    key={column.key}
                                    {...column.getHeaderProps()}
                                    collapse={column.collapse}
                                >
                                    {column.render('Header')}
                                </HeaderCell>
                            ))}
                        </TableRow>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <TableRow key={row.id} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <Cell
                                            key={cell.value}
                                            {...cell.getCellProps()}
                                            collapse={cell.column.collapse}
                                        >
                                            {cell.render('Cell')}
                                        </Cell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </tbody>
            </Table>
            <Pagination
                pageCount={pageCount}
                pageOptions={pageOptions}
                pageIndex={pageIndex}
                gotoPage={gotoPage}
                previousPage={previousPage}
                nextPage={nextPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
            />
        </Wrapper>
    );
};
