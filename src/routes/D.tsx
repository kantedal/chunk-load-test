import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<void> {}

const D: FC<Props> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        background: "yellow",
        fontSize: 50,
      }}
    >
      D
    </div>
  );
};

export default D;
