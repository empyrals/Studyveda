import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Library from "./pages/Library";
import Department from "./pages/Department";
import SingleBook from "./components/SingleBook";
// import { FcDepartment } from "react-icons/fc";

const App = () => {
  return (
    <>
      <Router>
        <div className="main">
          <Sidebar />
          <div className="page">
            <Switch>
              <Route component={Dashboard} path="/" exact />
              <Route component={Course} path="/course" />
              <Route component={Library} path="/library" exact />
              <Route component={Department} path="/department" />
              <Route
                path="/library/:title"
                children={<SingleBook />}
                // exact
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
