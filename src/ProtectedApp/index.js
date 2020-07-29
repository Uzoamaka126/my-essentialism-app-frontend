import * as React from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux-store/actions/auth";
import { fetchUserProfile } from "../redux-store/actions/user.actions";
import DashboardHome from "./Dashboard/contents/Home/DashboardHome";
import { OnboardingComponent } from "./Dashboard/contents/Home/onboarding.component";
import { MyValues } from "./Dashboard/contents/MyValues/Values.container";
import Projects from "./Dashboard/contents/Projects/project.container";
import { Dashboard } from "./Dashboard";
import SingleProject from "./Dashboard/contents/Projects/single.container";
import { clearAppState, getState } from "../Utilities/localStorage";
import ProtectedRoute from "../Components/ProtectedRoute";

const ProtectedApp = (props) => {
  const { user, history, profile, fetchUserProfile } = props;

  const { id } = getState().data;
  
  React.useEffect(() => {
    fetchUserProfile(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function onLogout() {
    logout();
    clearAppState();
  }

  return (
      <Dashboard
        history={history}
        logout={onLogout}
        user={profile}
      >
        <Switch>
          <ProtectedRoute
            exact
            path="/dashboard/values"
            component={MyValues}
          />
          <ProtectedRoute
            exact
            path="/dashboard/projects"
            component={Projects}
          />
          <ProtectedRoute
            path="/dashboard/project/:id"
            isUserLoggedIn={!!user}
            component={SingleProject}
          />
          <ProtectedRoute
            path="/dashboard/home"
            isUserLoggedIn={!!user}
            component={DashboardHome}
          />
          <ProtectedRoute
            path="/dashboard/onboarding"
            isUserLoggedIn={!!user}
            component={OnboardingComponent}
          />
        </Switch>
      </Dashboard>
  );
};

const mapStateToProps = (store) => {
  return {
    profile: store.user,
  }
}
export default connect(mapStateToProps, { logout, fetchUserProfile })(ProtectedApp);
