import React from "react";

type PageHeaderProps = {
  heading: string;
};

const PageHeader = ({ heading }: PageHeaderProps) => {
  return (
    <div className="px-4 py-4 border-b-2">
      <h1 className="text-2xl font-bold">{heading}</h1>
    </div>
  );
};

export default PageHeader;
