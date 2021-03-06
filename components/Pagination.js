import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    margin-top: 40px;
`;

export const Pagination = ({
    pageCount,
    pageOptions,
    pageIndex,
    gotoPage,
    previousPage,
    nextPage,
    pageSize,
    setPageSize,
    canPreviousPage,
    canNextPage
}) => (
    <Wrapper>
        <button
            type="button"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
        >
            {'<<'}
        </button>{' '}
        <button
            type="button"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
        >
            {'<'}
        </button>{' '}
        <button
            type="button"
            onClick={() => nextPage()}
            disabled={!canNextPage}
        >
            {'>'}
        </button>{' '}
        <button
            type="button"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
        >
            {'>>'}
        </button>{' '}
        <span>
            Page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
        </span>
        <span>
            | Go to page:{' '}
            <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                    const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                    gotoPage(page);
                }}
                style={{ width: '100px' }}
            />
        </span>{' '}
        <select
            value={pageSize}
            onChange={e => {
                setPageSize(Number(e.target.value));
            }}
        >
            {[7, 10, 15, 20, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                </option>
            ))}
        </select>
    </Wrapper>
);
