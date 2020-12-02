import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<void> {}

const C: FC<Props> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        background: "green",
        fontSize: 50,
      }}
    >
      C page
    </div>
  );
};

export default C;
