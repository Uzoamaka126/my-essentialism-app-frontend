import React, { lazy, useEffect, useState, Suspense } from "react";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import {
  logout,
  setIsAuthenticated,
} from "../../redux-store/actions/auth.actions";
import { fetchValues } from "../../redux-store/actions/values.actions";
import { fetchUserProfile } from "../../redux-store/actions/user.actions";
import { fetchUserProjects } from "../../redux-store/actions/project.actions";
import { clearAppState } from "../../Utilities/localStorage";
import { OnboardingComponent } from "../Dashboard/contents/Home/onboarding.component";
import MyValues from "../Dashboard/contents/MyValues/Values.container";
import Projects from "../Dashboard/contents/Projects/project.container";
import { Dashboard } from "../Dashboard/Main";
import Profile from "../Dashboard/contents/Profile/Profile";
import FullPageSpinner from "../../Components/FullPageSpinner";

const MainRoute = (props) => {
  const { user, profile, fetchUserProfile } = props;
  const id = JSON.parse(localStorage.getItem("ESSENTIALISM")).id;
  const userId = JSON.parse(localStorage.getItem("ESSENTIALISM")).userId;
  const [errorModal, setErrorModal] = useState(false);
  const getIsAuthenticated = sessionStorage.getItem("isAuthenticated");
  function onLogout() {
    logout();
    clearAppState();
    Cookies.remove("g");
  }

  async function handleFetchProfile() {
    const payload = {
      id: user?.id ? user?.id : id,
    };
    const result = await fetchUserProfile(payload);
    if (!result) {
      setErrorModal(true);
    }
  }

  async function handleFetchValues() {
    await props.fetchValues();
  }

  async function handleFetchProjects() {
    const payload = {
      userId: user?.userId ? user?.userId : userId,
    };
    props.fetchUserProjects(payload);
  }

  useEffect(() => {
    if (getIsAuthenticated !== null) {
      props.setIsAuthenticated();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getIsAuthenticated]);

  useEffect(() => {
    if (props.isAuthUser) {
      // handleFetchProfile();
      // handleFetchValues();
      // handleFetchProjects();
    }
  }, [props.isAuthUser]);

  if (props.fetchUserProfileState === "loading") {
    return <FullPageSpinner />;
  }

  return (
    <Switch>
      <Dashboard
        logout={onLogout}
        user={profile}
        state={{ fetchUserProfileState: props.fetchUserProfileState }}
      >
        <Route
          path="/values"
          render={(routeProps) => (
            <Suspense fallback={<FullPageSpinner />}>
              <MyValues {...props} {...routeProps} />
            </Suspense>
          )}
        />
        <Route
          path="/projects"
          render={(routeProps) => (
            <Suspense fallback={<FullPageSpinner />}>
              <Projects {...props} {...routeProps} />
            </Suspense>
          )}
        />
        <Route
          path="/settings"
          render={(routeProps) => (
            <Suspense fallback={<FullPageSpinner />}>
              <Profile {...props} {...routeProps} />
            </Suspense>
          )}
        />
        <Route
          path="/get-started"
          render={(routeProps) => (
            <Suspense fallback={<FullPageSpinner />}>
              <OnboardingComponent {...props} {...routeProps} />
            </Suspense>
          )}
        />
      </Dashboard>
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
    user: state.auth.user,
    isAuthUser: state.auth.isAuthUser,
    fetchUserProfileState: state.user.fetchUserProfileState,
    values: state.values.values,
    fetchProjectsState: state.projects.fetchProjectsState,
  };
};
export default connect(mapStateToProps, {
  logout,
  fetchUserProfile,
  setIsAuthenticated,
  fetchValues,
  fetchUserProjects,
})(MainRoute);
