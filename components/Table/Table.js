import { Wrapper, Base, Cell, HeaderCell, TableRow } from './styles';

export const Table = ({
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    onRowClick = () => {},
    page,
    children,
    head = true,
    clickable = false
}) => (
    <Wrapper>
        <Base {...getTableProps()}>
            {head && (
                <thead>
                    {console.log(headerGroups)}
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
            )}
            <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row);
                    return (
                        <TableRow
                            key={row.id}
                            {...row.getRowProps()}
                            onClick={() => onRowClick(row)}
                            clickable={clickable}
                        >
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
        </Base>
        {children}
    </Wrapper>
);
