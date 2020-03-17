import React, { useState, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';

// import { nominalTypeHack } from 'prop-types';

function Table({ columns, data }) {
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
    /* setPageSize, */
    state: { pageIndex /* pageSize */ },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination,
  );
  return (
    <>
      <table className="table tablesorter" {...getTableProps()}>
        <thead className="text-primary">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className="text-center" {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td className="text-center" {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-align-center mt10 mb10">
        <button
          className="pagination-button btn btn-primary "
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </button>{' '}
        <button
          className="pagination-button btn btn-primary "
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>{' '}
        <strong>
          {pageIndex + 1} / {pageOptions.length}
        </strong>{' '}
        <button
          className="pagination-button btn btn-primary "
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>{' '}
        <button
          className="pagination-button btn btn-primary"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>
      </div>
      <div className="text-align-center">
        <strong>Go to page</strong>{' '}
        <input
          className="form-control"
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: '70px', display: 'inline' }}
        />{' '}
        {/* <strong>Show</strong>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select> */}
      </div>
    </>
  );
}

function GlobalStautsByCounrtyTable() {
  const [countryByCityNumbers, setCountryByCityNumbers] = useState([]);
  useEffect(() => {
    fetch('/globalStatusByCountry')
      .then(res => res.json())
      .then(results => {
        let i = 1;
        const countryByCityNumbers = [];
        for (let key in results) {
          if (key === 'date' || key === 'Korea, South' || key === 'numbers')
            continue;
          countryByCityNumbers.push({
            number: i++,
            counrty: key,
            confirmator: `${Number(results[key]).toLocaleString()}명`,
          });
        }
        setCountryByCityNumbers(countryByCityNumbers);
      });
  }, []);

  const columns = [
    {
      Header: '번호',
      accessor: 'number',
    },
    {
      Header: '국가',
      accessor: 'counrty',
    },
    {
      Header: '확진환자',
      accessor: 'confirmator',
    },
    // {
    //   Header: '확진환자 격리해제',
    //   accessor: 'age',
    // },
    // {
    //   Header: '사망자',
    //   accessor: 'visits',
    // },
    // {
    //   Header: '사망률',
    //   accessor: 'status',
    // },
    // {
    //   Header: '완치율',
    //   accessor: 'progress',
    // },
    // {
    //   Header: 'Profile Progress',
    //   accessor: 'progress',
    // },
    // {
    //   Header: 'Profile Progress',
    //   accessor: 'progress',
    // },
  ];

  return <Table columns={columns} data={countryByCityNumbers} />;
}

export default GlobalStautsByCounrtyTable;
