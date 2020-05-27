import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Route, Switch } from "react-router-dom";
import Home from "./PublicApp/Home";
import { customTheme } from "./Components/Styles/Global/Theme";
import Login from "./PublicApp/Auth/Login/Login";
import AboutUs from "./PublicApp/Landing/AboutUs";
import Signup from "./PublicApp/Auth/Signup/Signup";
import {
  Dashboard,
  Values,
  CurrentValues,
  Projects,
  OnboardingComponent,
  DashboardHome,
  SingleProject,
} from "./ProtectedApp/components";
// import { NotFound } from "./PublicApp/NotFound";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Switch>
        <Route path="/about" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
               {/* <Route exact component={NotFound} /> */}
 <Route exact path="/" component={Home} />
        {/* <Redirect to="/not" /> */}

        <Dashboard>
          <Switch>
            {/* <ProtectedRoute
            path="/s/home"
            isLoggedIn={!!user}
            render={(props) => <Home {...props} />}
          />
          <ProtectedRoute
            path="/s/onboarding"
            isLoggedIn={!!user}
            render={(props) => <Onboarding {...{ user, profile, ...props }} />}
          />
          */}
            <Route path="/dashboard/values/current" component={CurrentValues} />
            <Route exact path="/dashboard/values" component={Values} />
            <Route path="/dashboard/projects" component={Projects} />
            <Route path="/dashboard/project/:id" component={SingleProject} />
            <Route path="/dashboard/home" component={DashboardHome} />
            <Route
              path="/dashboard/onboarding"
              component={OnboardingComponent}
            />
          </Switch>
        </Dashboard>
      </Switch>
    </ThemeProvider>
  );
}
export default App;
