import React from 'react';
import { useTableContext } from 'components/Table/TableContextProvider';
import { TableRow } from 'components/Table/TableRow';

const TableBody: React.FC = (): JSX.Element => {
  const { getTableBodyProps, rows, prepareRow, page } = useTableContext();

  const container = page ? page : rows;

  return (
    <tbody {...getTableBodyProps()}>
      {container.map((row, index) => {
        prepareRow(row);
        return <TableRow row={row} key={index} />;
      })}
    </tbody>
  );
};

export default TableBody;
