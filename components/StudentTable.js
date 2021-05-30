import React from 'react';
import { Pagination } from './Pagination';
import { Wrapper, Table, Cell, HeaderCell, TableRow } from './Table';
import { useTable, usePagination } from 'react-table';
import moment from 'moment';
import { DangerStatus, SuccessStatus } from './Status';

moment.locale('pt-br');

export const StudentTable = ({ data }) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Aluno',
                accessor: 'name'
            },
            {
                Header: 'Nome da turma',
                accessor: 'class'
            },
            {
                Header: 'Local de residencia',
                accessor: 'address'
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: row => {
                    const status = row.row.original.status;

                    if (status === 'Em andamento')
                        return (
                            <SuccessStatus>
                                {row.row.original.status}
                            </SuccessStatus>
                        );
                    if (status == 'Finalizado')
                        return (
                            <DangerStatus>
                                {row.row.original.status}
                            </DangerStatus>
                        );
                    return row.row.original.status;
                }
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
