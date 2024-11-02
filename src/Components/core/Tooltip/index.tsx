import React from "react";
import { PlacesType, Tooltip as ReactTooltip } from "react-tooltip";

type Props = {
  id: string;
  text: string;
  placement: PlacesType;
};

const Tooltip = ({ id, text, placement }: Props) => {
  return (
    <ReactTooltip
      style={{ backgroundColor: "rgb(30 41 59)" }}
      anchorSelect={id}
      content={text}
      place={placement}
    />
  );
};

export default Tooltip;
