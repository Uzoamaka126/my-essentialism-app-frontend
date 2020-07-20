import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux-store/actions/auth";
import { fetchUserProfile } from "../redux-store/actions/user.actions";
import DashboardHome from "./Dashboard/contents/Home/DashboardHome";
import { OnboardingComponent } from "./Dashboard/contents/Home/onboarding.component";
import { MyValues } from "./Dashboard/contents/MyValues/Values.container";
import { Projects } from "./Dashboard/contents/Projects/project.container";
import { Dashboard } from "./Dashboard";
import { SingleProject } from "./Dashboard/contents/Projects/single.container";
import { clearAppState } from "../Utilities/localStorage";
import PreloadedStateProvider from "../Components/PreloadedStateProvider";

const ProtectedApp = (props) => {
  const { user, profile, history, fetchUserProfile } = props;

  function onLogout() {
    logout();
    clearAppState();
  }

  return (
    // <PreloadedStateProvider>
      <Dashboard
        history={history}
        logout={onLogout}
        profile={profile}
      >
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
            exact
            path="/dashboard/values"
            isUserLoggedIn={!!user}
            render={(props) => <MyValues {...props} />}
          />
          <Route
            path="/dashboard/projects"
            // isUserLoggedIn={!!user}
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
    // {/* </PreloadedStateProvider> */}
  );
};

const mapStateToProps = (store) => {
  return {
    user: store.auth.user,
    profile: store.user.profile,
  }
}
export default connect(mapStateToProps, { logout, fetchUserProfile })(ProtectedApp);
