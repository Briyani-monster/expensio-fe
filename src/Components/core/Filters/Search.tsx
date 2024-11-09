import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = (props: Props) => {
  return (
    <input
      type="text"
      id="search-bar"
      placeholder="Search by name"
      value={props.value}
      onChange={(e) => {
        e.preventDefault();
        console.log(e.target.value);
        props.onChange(e);
      }}
      className="border border-slate-200 rounded-md px-2 text-sm py-1 outline-slate-400"
    />
  );
};

export default Search;
