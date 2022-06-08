import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import MaterialDash from "Assessments/materialDash";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import AddAssess from "Assessments/AddQues.js"
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Test from "test.js"
import App from "App.js"
import Assessments from "Assessments/Assessments.js"
import Materials from "Material/Materials.js"
import addMaterial from "Material/addMaterial.js"
import showAssessments from "Assessments/showAssessments"


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />
      <Route path="/courses" exact component={App}></Route>
      <Route path="/material" exact component={MaterialDash}></Route>
      <Route path="/Assessments" exact component={Assessments}></Route>
      <Route path="/addAssess" exact component={AddAssess}></Route>
      <Route path="/Materials" exact component={Materials}></Route>
      <Route path="/addMaterial" exact component={addMaterial}></Route>
      <Route path="/showAssessments" exact component={showAssessments}></Route>
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
