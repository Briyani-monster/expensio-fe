import React from "react";
import Icon from "../Icon";

type CardProps = {
  name: string;
  icon?: string | undefined;
  iconClasses?: string | undefined;
  children: any;
};

const Card = ({ name, icon, iconClasses, children }: CardProps) => {
  return (
    <div className="border rounded-lg px-4 py-4 w-60 ">
      <div className="flex justify-between items-center">
        <div className="text-base text-slate-600">{name}</div>
        {icon ? (
          <div>
            <Icon name={icon} className={iconClasses} />
          </div>
        ) : null}
      </div>
      <div className="text-2xl font-bold">{children}</div>
    </div>
  );
};

export default Card;
