import React, { useEffect, useRef, useState } from "react";
import { DateRangeOption } from "../../../utils/app";
import Icon from "../Icon";

interface DateDropdownProps {
  onDateRangeSelect: (
    option: DateRangeOption,
    startDate?: Date,
    endDate?: Date,
  ) => void;
}

const DateDropdown: React.FC<DateDropdownProps> = ({ onDateRangeSelect }) => {
  const [selectedOption, setSelectedOption] = useState<DateRangeOption>(
    DateRangeOption.All,
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  // Handle date range selection
  const handleOptionSelect = (option: DateRangeOption) => {
    setSelectedOption(option);
    if (option !== DateRangeOption.Custom) {
      setIsDropdownOpen(false);
    }
    if (option !== DateRangeOption.Custom) {
      onDateRangeSelect(option);
    }
  };

  // Handle custom date range
  const handleCustomDateRange = () => {
    if (startDate && endDate) {
      onDateRangeSelect(DateRangeOption.Custom, startDate, endDate);
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="date-dropdown bg-white" ref={dropdownRef}>
      <button onClick={toggleDropdown}>
        <Icon className="w-4" name="DateFilter" />
        <div>{selectedOption}</div>
      </button>
      {isDropdownOpen && (
        <>
          {selectedOption !== DateRangeOption.Custom ? (
            <div className="date-dropdown-menu">
              {Object.values(DateRangeOption).map((option) => (
                <div
                  key={option}
                  className={`date-option ${selectedOption === option ? "selected" : ""}`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          ) : null}
          {selectedOption === DateRangeOption.Custom ? (
            <div className="custom-date-picker bg-white w-[400px] border">
              <div className=" w-full border-b">
                <Icon
                  className="w-5 "
                  name="ArrowBack"
                  onClick={() => setSelectedOption(DateRangeOption.All)}
                />
              </div>
              <div className="py-3 flex">
                <label className="text-sm">
                  Start Date:
                  <input
                    type="date"
                    max={endDate ? endDate.toISOString().slice(0, 10) : ""}
                    value={
                      startDate ? startDate.toISOString().slice(0, 10) : ""
                    }
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                  />
                </label>
                <label className="text-sm">
                  End Date:
                  <input
                    type="date"
                    min={startDate ? startDate.toISOString().slice(0, 10) : ""}
                    value={endDate ? endDate.toISOString().slice(0, 10) : ""}
                    onChange={(e) => setEndDate(new Date(e.target.value))}
                  />
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  className=" bg-black text-white rounded-sm py-2 px-10"
                  onClick={handleCustomDateRange}
                >
                  Apply
                </button>
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default DateDropdown;
