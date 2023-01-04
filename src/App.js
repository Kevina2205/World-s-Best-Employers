import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import FirstPage from "./page/FirstPage";
import SecondPage from "./page/SecondPage";
import ThirdPage from "./page/ThirdPage";
import FourthPage from "./page/FourthPage";
import FifthPage from "./page/FifthPage";
import SixthPage from "./page/SixthPage";
import "./style.css"

const Links = () => (
  <>
    <div className="nav">
      <Link className="menu" to="/">&#9734;</Link>
      <Link className="menu" to="/greatResignation">&#9734;</Link>
      <Link className="menu" to="/leader">&#9734;</Link>
      <Link className="menu" to="/bestEmployers">&#9734;</Link>
      <Link className="menu" to="/bestEmployersCountry">&#9734;</Link>
      <Link className="menu" to="/bestEmployersField">&#9734;</Link>
    </div>
  </>
);


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Links />
        <Route
          render={({ location }) => {
            return (
              <PageTransition
                preset="flipLeft"
                transitionKey={location.pathname}
              >
                <Switch location={location}>
                  <Route exact path="/" component={FirstPage} />
                  <Route exact path="/greatResignation" component={SecondPage} />
                  <Route exact path="/leader" component={ThirdPage} />
                  <Route exact path="/bestEmployers" component={FourthPage} />
                  <Route exact path="/bestEmployersCountry" component={FifthPage} />
                  <Route exact path="/bestEmployersField" component={SixthPage} />
                </Switch>
              </PageTransition>
            );
          }}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


export default App