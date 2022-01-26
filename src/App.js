// import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter, Link } from "react-router-dom";
// import { BrowserRouter, Link, Switch } from "react-router-dom";
// import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./router/Router";
// import { Home } from "./Home";
// import { Page1 } from "./Page1";
// import { Page1DetailA } from "./Page1DetailA";
// import { Page1DetailB } from "./Page1DetailB";
// import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        {/* <Home /> */}
        {/* <Page1 /> */}
        {/* <Page2 /> */}
      </div>
      <Router />
    </BrowserRouter>
  );
}
