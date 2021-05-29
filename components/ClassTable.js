import React from 'react';
import { Pagination } from './Pagination';
import { ProgressBar } from './ProgressBar';
import { Wrapper, Table, Cell, HeaderCell, TableRow } from './Table';
import { useTable, usePagination } from 'react-table';
import { Avatar } from './Avatar';
import { FlexRowCentered } from './styles/flex';
import { Tag } from './Tag';
import moment from 'moment';

moment.locale('pt-br');

export const ClassTable = ({ data }) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Nome da Turma',
                accessor: 'name'
            },
            {
                Header: 'Alunos',
                accessor: 'studentList',
                collapse: true,
                Cell: row => (
                    <FlexRowCentered>
                        {row.row.original.studentList.map(avatar => (
                            <Avatar key={avatar} image={avatar} />
                        ))}
                    </FlexRowCentered>
                )
            },
            {
                Header: 'Andamento',
                accessor: 'progress',
                Cell: row => (
                    <ProgressBar
                        key={row.row.original.progress}
                        progress={row.row.original.progress}
                    />
                )
            },
            {
                Header: 'Finalização',
                accessor: 'endDate',
                collapse: true,
                Cell: row => moment(row.row.original.endDate).calendar()
            },
            {
                Header: 'Categoria',
                accessor: 'category',
                collapse: true,
                Cell: row => <Tag>{row.row.original.category}</Tag>
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
