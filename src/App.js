import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./PublicApp/Home";
import { customTheme } from "./Components/Styles/Global/Theme";
import Login from "./PublicApp/Auth/Login/Login";
import AboutUs from "./PublicApp/Landing/AboutUs";
import Signup from "./PublicApp/Auth/Signup/Signup";
import { Dashboard, Values, CurrentValues } from "./ProtectedApp/components";
import { DashboardHome } from "./ProtectedApp/components/Dashboard/Home/DashboardHome";
import { OnboardingComponent } from "./ProtectedApp/components/Dashboard/Home/Onboarding/onboarding.component";
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/about" component={AboutUs} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
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

            {/* <Route component={ErrorPage} /> */}
            <Route exact path="/dashboard/values" component={Values} />
            <Route
            exact
              path="/dashboard/values/me/current"
              component={CurrentValues}
            />
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
