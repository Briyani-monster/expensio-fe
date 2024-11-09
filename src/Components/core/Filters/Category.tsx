import React, { useState, useRef, useEffect, useCallback } from "react";
import Icon from "../Icon";

export interface Option {
  id: number;
  label: string;
  value: string;
}

export interface CategoryProps {
  options: Option[];
  value: string[];
  onChange: (option: Option, isChecked: boolean) => void;
  handleClear: () => void;
}

const Category: React.FC<CategoryProps> = ({
  options = [],
  value = [],
  onChange = () => {},
  handleClear = () => {},
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  // Toggle Category visibility
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);

  return (
    <div className="Category relative border rounded-md " ref={dropdownRef}>
      <button className="category-button" onClick={toggleCategory}>
        <Icon name="Category" className="text-neutral-800 w-4" />
        <span className="ml-2 text-neutral-800 font-semibold">Category</span>
      </button>
      {isCategoryOpen && (
        <div className="Category-menu absolute w-48 top-7 border  bg-white">
          <div className="flex items-center py-1 mx-2 overflow-hidden rounded-md border">
            <Icon name="Search" className="text-neutral-500 w-5" />
            <input
              type="text"
              placeholder="Search..."
              className="border-none outline-none w-full px-2 text-sm py-1 "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div
            className="options-list"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {filteredOptions.map((option) => (
              <label key={option.id} className="option-item w-full">
                <input
                  className="w-4 h-4"
                  type="checkbox"
                  checked={value.includes(option.value)}
                  onChange={() =>
                    onChange(option, value.includes(option.value))
                  }
                />
                {option.label}
              </label>
            ))}
          </div>
          {value?.length ? (
            <button
              onClick={handleClear}
              className="flex justify-center items-center py-2 text-base text-slate-800 hover:bg-slate-100 border-t-2 border-slate-200 w-full"
            >
              Clear Filter
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Category;
