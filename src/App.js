// import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter, Link } from "react-router-dom";
// import { BrowserRouter, Link, Switch } from "react-router-dom";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
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
      <Switch>
        {/* <Route path="/"> */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/page1"> */}
        {/* <Page1 /> */}
        {/* </Route> */}
        {/* <Route path="/page1" render={() => <Page1 />} /> */}
        <Route
          path="/page1"
          // render={() => (
          // render={(props) => (
          render={({ match: { url } }) => (
            <Switch>
              {/* {console.log(props)} */}
              {/* {console.log(url)} */}
              {/* <Route exact path="/page1"> */}
              <Route exact path="url">
                <Page1 />
              </Route>
              {/* <Route path="/page1/detailA"> */}
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              {/* <Route path="/page1/detailB"> */}
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
              <Page1 />
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
