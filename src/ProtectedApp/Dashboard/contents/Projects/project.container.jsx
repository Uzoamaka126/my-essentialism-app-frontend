import React from "react";
import { connect } from "react-redux";
import { ProjectsComponent } from "./project.component";
import {
  addUserProject,
  deleteUserProject,
  updateUserProject,
} from "../../../../redux-store/actions/project.actions";
import { setSelectedProjValue } from "../../../../redux-store/actions/values.actions";

function Projects(props) {
  return (
    <ProjectsComponent
      {...props}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    values: state.values.values,
    projects: state.projects.projects,
    fetchSingleProjState: state.projects.fetchSingleProjState,
    addProjectState: state.projects.addProjectState,
    project: state.projects.project,
    user: state.user.profile,
    selectedProjectValueObj: state.values.selectedProjectValueObj,
  };
};

export default connect(mapStateToProps, {
  addUserProject,
  deleteUserProject,
  updateUserProject,
  setSelectedProjValue,
})(Projects);
