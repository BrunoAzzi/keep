import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { useTable, usePagination } from 'react-table';
import { ProgressBar, Tag, TableWithPagination } from '../../index';
import { StudentListCell } from './StudentListCell';
import { Avatar } from '@components/Avatar';
import { FlexRowCentered } from '@components/styles/flex';

moment.locale('pt-br');

const AvatarWithMargin = styled(Avatar)`
    margin-right: 8px;
`;

export const ClassTable = ({ data }) => {
    const initialState = { pageIndex: 0, pageSize: 7 };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Nome da Turma',
                accessor: 'name',
                collapse: true
            },
            {
                Header: 'Professor',
                collapse: true,
                accessor: 'teacher',
                Cell: row => (
                    <FlexRowCentered>
                        <AvatarWithMargin
                            image={row.row.original.teacher.avatar}
                        />
                        <span>{row.row.original.teacher.name}</span>
                    </FlexRowCentered>
                )
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
                Cell: row =>
                    row.row.original.categoryList.map(category => (
                        <Tag key={category}>{category}</Tag>
                    ))
            }
        ],
        [data.name]
    );

    const tableProps = useTable({ columns, data, initialState }, usePagination);

    return <TableWithPagination size={data.length} {...tableProps} />;
};
