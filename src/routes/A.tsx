import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<void> {}

const A: FC<Props> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 500,
        height: 500,
        background: "red",
        fontSize: 100,
      }}
    >
      A page
    </div>
  );
};

export default A;
