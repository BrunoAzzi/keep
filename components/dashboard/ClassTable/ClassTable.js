import React from 'react';
import moment from 'moment';
import { useTable, usePagination } from 'react-table';
import { ProgressBar, Tag, TableWithPagination } from '../../index';
import { StudentListCell } from './StudentListCell';

moment.locale('pt-br');

export const ClassTable = ({ data }) => {
    const initialState = { pageIndex: 0, pageSize: 7 };

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
                Cell: StudentListCell
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
        [data.name]
    );

    const tableProps = useTable({ columns, data, initialState }, usePagination);

    return <TableWithPagination {...tableProps} />;
};
