import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux-store/actions/auth";
import { fetchUserProfile } from "../redux-store/actions/user.actions";
import DashboardHome from "./components/Dashboard/Home/DashboardHome";
import { OnboardingComponent } from "./components/Dashboard/Home/Onboarding/onboarding.component";
import { Values } from "./components/Values";
import { CurrentValues } from "./components/MyValues/current.container";
import { Projects } from "./components/Projects/project.container";
import { Dashboard } from "./components/Dashboard";
import { SingleProject } from "./components/Projects/single.container";
import { getState } from "../Utilities/authenticationChecker";

const mapStateToProps = (store) => {
  console.log(store.auth);
  return {
    user: store.auth.user,
    profile: store.user.profile,
  }
}
// const connector = connect(
//   (store) => ({
//     user: store.auth.user,
//     profile: store.user.profile,
//   }),
//   {
//     logout,
//   }
// );

const ProtectedApp = (props) => {
  const { user, profile, history, fetchUserProfile } = props;

  const userInfo = getState();
  const { id, username } = userInfo.data.response;

  React.useEffect(() => {
    if (userInfo && id) {
      fetchUserProfile(`${id}`);
    }
  }, []);

  return (
    <Dashboard
      history={history}
      logout={logout}
      profile={profile}
      userInfo={userInfo}
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
  );
};

export default connect(mapStateToProps, { logout, fetchUserProfile })(ProtectedApp);