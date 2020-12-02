import React, { FC, lazy, Suspense } from "react";
import {
  Link,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import retry from "../retry";

// const C = React.lazy(() => componentLoader(() => import("./C"), 5));
// const D = React.lazy(() => componentLoader(() => import("./D"), 5));

const C = lazy(() => retry(() => import("./C")));
const D = lazy(() => retry(() => import("./D")));

// const C = React.lazy(() => import("./C"));
// const D = React.lazy(() => import("./D"));

interface Props extends RouteComponentProps<void> {}

const B: FC<Props> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 500,
        height: 500,
        background: "blue",
        fontSize: 100,
      }}
    >
      puss tjejer
      <div
        style={{
          flex: "none",
          display: "flex",
          justifyContent: "center",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Link to="/b/c">
          <button>Page C</button>
        </Link>
        <div style={{ width: 10 }} />
        <Link to="/b/d">
          <button>Page D</button>
        </Link>
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route component={C} path="/b/c" />
          <Route component={D} path="/b/d" />
          <Redirect to="/b/c" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default B;
