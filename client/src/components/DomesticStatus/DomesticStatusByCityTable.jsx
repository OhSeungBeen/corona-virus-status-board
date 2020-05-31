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
      {/* <div className="text-align-center">
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
         <strong>Show</strong>{' '}
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
        </select> 
      </div> */}
    </>
  );
}

function DomesticStatusByCityTable() {
  const [domesticStatusByCity, setDomesticStatusByCity] = useState([]);
  useEffect(() => {
    fetch('/domesticStatusByCity')
      .then(res => res.json())
      .then(results => {
        const sortable = [];
        const sortedResults = {};
        for (let city in results) {
          sortable.push([city, results[city]]);
        }
        sortable.sort((a, b) => b[1]['confirmator'] - a[1]['confirmator']);

        sortable.forEach(item => {
          sortedResults[item[0]] = item[1];
        });
        const countryByCityNumbers = [];
        for (let key in sortedResults) {
          if (key === 'date' || key === 'numbers') continue;
          countryByCityNumbers.push({
            city: key,
            confirmator: `${Number(
              sortedResults[key].confirmator,
            ).toLocaleString()}명 (+${sortedResults[key].increase})`,
            isolate: `${sortedResults[key].isolate}명`,
            dead: `${sortedResults[key].dead}명`,
          });
        }
        setDomesticStatusByCity(countryByCityNumbers);
      });
  }, []);

  const columns = [
    {
      Header: '시도명',
      accessor: 'city',
    },
    {
      Header: '확진환자',
      accessor: 'confirmator',
    },
    {
      Header: '격리해제',
      accessor: 'isolate',
    },
    {
      Header: '사망자',
      accessor: 'dead',
    },
  ];

  return <Table columns={columns} data={domesticStatusByCity} />;
}

export default DomesticStatusByCityTable;
