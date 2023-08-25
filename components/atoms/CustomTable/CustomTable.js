import React from "react";
import { useTable } from "react-table";

const CustomTable = ({ columns, data, tableClass, tHeadClass, tBodyClass, tdClass, thClass, tableBodyTrClass, tableHeadTrClass }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
  return (
    <div className="overflow-hidden relative">
      <table className={`w-full text-HavannaBlack-primary ${tableClass}`} {...getTableProps()}>
        <thead className={` ${tHeadClass} bg-[#E0F8F6]`}>
          {headerGroups.map((headerGroup, index) => (
            <tr className={`${tableHeadTrClass} `} {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th className={` text-16 font-bold  border-b-[#D6D6D6] text-left pb-4 px-4 pr-[30px] whitespace-nowrap  ${thClass}`} {...column.getHeaderProps()} key={index}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {rows.length > 0 && (
          <tbody className={` ${tBodyClass}`} {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr className={` bg-white whitespace-nowrap  ${tableBodyTrClass}`} {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td className={`font-normal capitalize text-gray-600  text-[14px] p-3 border-b-[1px] border-[#E0E0E0] ${tdClass}`} {...cell.getCellProps()} key={index}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default CustomTable;
