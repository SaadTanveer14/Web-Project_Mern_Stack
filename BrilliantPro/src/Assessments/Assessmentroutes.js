import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Assessments from './Assessment.js'

ReactDOM.render(
<BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/Assessments" exact component={Assessments}></Route>
    </Switch>
  </BrowserRouter>,
document.getElementById("root")
);