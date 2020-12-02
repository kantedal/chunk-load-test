import React, { lazy, Suspense } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import retry from "./retry";

const importComponent = async (lazyComponent: any) => {
  try {
    const component = await lazyComponent();
    console.log("imported", component.default);
    return component;
  } catch (e) {
    console.log(e);
  }
};

const A = lazy(() => retry(() => import("./routes/A")));
const B = lazy(() => retry(() => import("./routes/B")));

// const A = React.lazy(() => componentLoader(() => import("./routes/A"), 5));
// const B = React.lazy(() => componentLoader(() => import("./routes/B"), 5));

// const A = React.lazy(() => import("./routes/A"));
// const B = React.lazy(() => import("./routes/B"));

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          flex: "none",
          display: "flex",
          justifyContent: "center",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Link to="/a">
          <button>Page A</button>
        </Link>
        <div style={{ width: 10 }} />
        <Link to="/b">
          <button>Page B</button>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route component={A} path="/a" />
            <Route component={B} path="/b" />
            <Redirect to="/a" />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
