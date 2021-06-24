import { Table, Pagination } from '@components/index';

export const TableWithPagination = ({
    pageCount,
    pageOptions,
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    state: { pageIndex, pageSize },
    ...other
}) => (
    <Table {...other}>
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
    </Table>
);
