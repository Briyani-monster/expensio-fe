import React, { useState } from "react";
import { TABLE_COMPONENTS } from "./helper";
import Icon from "../Icon";

interface HeadersProps {
  id: string;
  label: string;
  type?: string;
  classes?: string;
  width?: string;
  sortable?: boolean;
  cellClasses?: string;
}

interface TableProps {
  headers: HeadersProps[];
  data: any[];
  emptyMessage?: string;
}
export interface SortingType {
  column: string;
  direction: string;
}

const Table = ({ headers, data, emptyMessage }: TableProps) => {
  const [sorting, setSorting] = useState<SortingType | null>({
    column: "",
    direction: "",
  });
  return (
    <table className="w-full border rounded-2xl">
      <thead>
        <tr className="h-10  bg-neutral-100">
          {/* Add grey background */}
          {headers.map((header: HeadersProps) => (
            <th key={header.id} className={`${header.classes}  px-3 text-left`}>
              <div
                className={`flex flex-row text-sm font-medium gap-2 select-none items-center ${header.sortable ? "cursor-pointer" : ""}`}
                onClick={() => {
                  const arrange = ["asc", "desc", null];

                  if (header.sortable) {
                    const index = arrange.indexOf(sorting?.direction) || 0;
                    setSorting({
                      column: header.id,
                      direction: arrange[(index + 1) % arrange.length],
                    });
                  }
                }}
              >
                {header.label}
                {header.sortable ? (
                  <div className="flex-col gap-[0.1rem] flex items-center">
                    <Icon
                      name="SortAsc"
                      className={` w-2 ${
                        sorting.direction === "asc" &&
                        sorting?.column === header.id
                          ? "text-black"
                          : "text-slate-500"
                      }`}
                    />
                    <Icon
                      name="SortDesc"
                      className={`w-2 ${
                        sorting.direction === "desc" &&
                        sorting?.column === header.id
                          ? "text-black"
                          : "text-neutral-500"
                      }`}
                    />
                  </div>
                ) : null}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? ( // Check if data is empty
          <tr>
            <td colSpan={headers.length} className="text-center py-16">
              <div className="grid  place-items-center h-20">
                <Icon name="NoData" className="w-40  h-20 " />
              </div>
              <div className="text-2xl font-semibold">
                {emptyMessage || "No data available"}
              </div>
            </td>
          </tr>
        ) : (
          data.map((item: any) => (
            <tr key={item.id}>
              {headers.map((header: HeadersProps) => {
                const Component = TABLE_COMPONENTS[header.id];
                return (
                  <td key={header.id} className={header.cellClasses}>
                    <Component data={item} /> {/* Pass the correct item */}
                  </td>
                );
              })}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
