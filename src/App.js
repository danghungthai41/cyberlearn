import React from "react";
import "antd/dist/antd.css";

import "./index.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Test from "./Test/Test.jsx";
import { Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Certificate from "./Pages/Certificate/Certificate";
import Notifications from "./Pages/Notifications/Notifications";
import LayoutAdmin from "./HOC/Layout/LayoutAdmin";
import Courses from "./Pages/Courses/Courses";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/lms" exact>
          <SignIn />
        </Route>
        <LayoutAdmin>
          <Route path="/dashboard" exact>
            <DashBoard />
          </Route>

          <Route path="/lo-trinh" exact>
            <Courses />
          </Route>

          <Route path="/chung-nhan" exact>
            <Certificate />
          </Route>
          <Route path="/thongbao-task" exact>
            <Notifications />
          </Route>
        </LayoutAdmin>
      </Switch>
    </Router>
  );
};

export default App;
