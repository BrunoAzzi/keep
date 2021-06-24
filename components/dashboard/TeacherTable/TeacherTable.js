import React from 'react';
import moment from 'moment';
import { useTable, usePagination } from 'react-table';
import { TableWithPagination } from '../../index';
import { StatusCell } from './StatusCell';

moment.locale('pt-br');

export const TeacherTable = ({ data }) => {
    const initialState = { pageIndex: 0, pageSize: 7 };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Professor',
                accessor: 'name'
            },
            {
                Header: 'Especialidade',
                accessor: 'class'
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

    return <TableWithPagination {...tableProps} />;
};
