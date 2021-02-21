import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux-store/actions/auth.actions";
import { fetchUserProfile } from "../../redux-store/actions/user.actions";
import DashboardHome from "../Dashboard/contents/Home/DashboardHome";
import { OnboardingComponent } from "../Dashboard/contents/Home/onboarding.component";
import MyValues from "../Dashboard/contents/MyValues/Values.container";
import Projects from "../Dashboard/contents/Projects/project.container";
import { Dashboard } from "../Dashboard/Main";
// import SingleProject from "../Dashboard/contents/Projects/single.container";
import { clearAppState, getState } from "../../Utilities/localStorage";
import Profile from "../Dashboard/contents/Profile/Profile";

const MainRoute = (props) => {
  //   const { user, profile, fetchUserProfile } = props;

  //   const { id } = getState().data;

  //   React.useEffect(() => {
  //     fetchUserProfile(id);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [id]);

  //   function onLogout() {
  //     logout();
  //     clearAppState();
  //   }

  return (
    <Dashboard>
      <Switch>
        <Route exact path="/dashboard/values">
          <MyValues {...props} />
        </Route>
        <Route exact path="/dashboard/projects">
          <Projects {...props} />
        </Route>
        <Route exact path="/dashboard/home">
          <DashboardHome {...props} />
        </Route>
        <Route exact path="/dashboard/settings">
          <Profile {...props} />
        </Route>
        <Route exact path="/dashboard/get-started">
          <OnboardingComponent {...props} />
        </Route>
      </Switch>
    </Dashboard>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
  };
};
export default connect(mapStateToProps, { logout, fetchUserProfile })(
  MainRoute
);
