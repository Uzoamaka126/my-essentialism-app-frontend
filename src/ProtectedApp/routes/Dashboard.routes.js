import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DashboardHome from "../Dashboard/contents/Home/DashboardHome";
import { OnboardingComponent } from "../Dashboard/contents/Home/onboarding.component";
import MyValues from "../Dashboard/contents/MyValues/Values.container";
import Projects from "../Dashboard/contents/Projects/project.container";
import { Dashboard } from "../Dashboard/Main";
import Profile from "../Dashboard/contents/Profile/Profile";

export function DashboardRoute(props) {
   
  return (
    <Dashboard>
      <Switch>
        <Route path="/values">
          <MyValues {...props} />
        </Route>
        <Route path="/projects">
          <Projects {...props} />
        </Route>
        <Route path="/settings">
          <Profile {...props} />
        </Route>
        <Route path="/get-started">
          <OnboardingComponent {...props} />
        </Route>
      </Switch>
    </Dashboard>
  );
};
