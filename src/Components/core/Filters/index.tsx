import React, { useState } from "react";
import Search from "./Search";
import Category, { Option } from "./Category";
import DateDropdown from "./DateFilter";
import ColumnFilterDropdown from "./Columns";

type Props = {};

const Filters = (props: Props) => {
  // Initial options to load in the dropdown
  const initialOptions = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    label: `Option ${i + 1}`,
    value: `option-${i + 1}`,
  }));
  const [value, setValue] = useState([]);
  const columns = [
    { id: "name", label: "Name" },
    { id: "age", label: "Age" },
    { id: "email", label: "Email" },
    { id: "city", label: "City" },
  ];
  const [visibleColumns, setVisibleColumns] = useState<string[]>(
    columns.map((col) => col.id), // Initially, all columns are visible
  );
  return (
    <div className="flex flex-row gap-2 my-3">
      <Search />
      <Category
        options={initialOptions}
        value={value}
        onChange={(option, isChecked) =>
          setValue((prev) =>
            isChecked
              ? prev?.filter((item) => item !== option.value)
              : [...prev, option.value],
          )
        }
        handleClear={() => setValue([])}
      />
      <DateDropdown />
      <ColumnFilterDropdown
        columns={columns}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
      />
    </div>
  );
};

export default Filters;
