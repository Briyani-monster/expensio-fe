import React, { Children, ReactElement } from "react";
import PageHeader from "../PageHeader";

type PageProps = {
  name: string;
  children: any;
};

const Page = ({ name, children }: PageProps) => {
  return (
    <div>
      <PageHeader heading={name} />
      <div className="px-4 pt-4">{children}</div>
    </div>
  );
};

export default Page;
