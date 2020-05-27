import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { connect } from "react-redux";
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
import { logout } from "./redux-store/actions/auth";

function App(props) {
  const { logout, user, profile, history } = props;

  function handleLogout() {
    logout();
    history.push("/");
  }

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

        <Dashboard onLogout={handleLogout} user={user} profile={profile}>
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
            <Route
              path="/dashboard/values/current"
              isUserLoggedIn={!!user}
              render={(props) => <CurrentValues {...props} />}
            />
            <Route
              exact
              path="/dashboard/values"
              isUserLoggedIn={!!user}
              render={(props) => <Values {...props} />}
            />
            <Route
              path="/dashboard/projects"
              isUserLoggedIn={!!user}
              render={(props) => <Projects {...props} />}
            />
            <Route
              path="/dashboard/project/:id"
              isUserLoggedIn={!!user}
              render={(props) => <SingleProject {...props} />}
            />
            <Route
              path="/dashboard/home"
              isUserLoggedIn={!!user}
              render={(props) => <DashboardHome {...props} />}
            />
            <Route
              path="/dashboard/onboarding"
              isUserLoggedIn={!!user}
              render={(props) => <OnboardingComponent {...props} />}
            />
          </Switch>
        </Dashboard>
      </Switch>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    profile: state.auth.profile,
  };
};

export default connect(mapStateToProps, { logout })(App);
