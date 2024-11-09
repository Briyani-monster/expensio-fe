import React, { useState, useRef, useEffect } from "react";
import Icon from "../Icon";

interface Column {
  id: string;
  label: string;
}

interface ColumnFilterProps {
  columns: Column[];
  visibleColumns: string[];
  setVisibleColumns: (columns: string[]) => void;
}

const ColumnFilterDropdown: React.FC<ColumnFilterProps> = ({
  columns,
  visibleColumns,
  setVisibleColumns,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle column visibility
  const toggleColumn = (columnId: string) => {
    setVisibleColumns(
      visibleColumns.includes(columnId)
        ? visibleColumns.filter((id) => id !== columnId) // Hide column
        : [...visibleColumns, columnId], // Show column
    );
  };

  return (
    <div className="column-filter-dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown}>
        <Icon className="w-3" name="Columns" />
        <div>Columns</div>
      </button>
      {isDropdownOpen && (
        <div className="column-options">
          {columns.map((col) => (
            <label key={col.id}>
              <input
                type="checkbox"
                checked={visibleColumns.includes(col.id)}
                onChange={() => toggleColumn(col.id)}
              />
              {col.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColumnFilterDropdown;
