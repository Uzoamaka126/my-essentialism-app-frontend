import React from "react";
import { connect } from "react-redux";
import { ProjectsComponent } from "./project.component";
import {
  addUserProject,
  deleteUserProject,
  updateUserProject,
} from "../../../../redux-store/actions/project.actions";

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
  };
};

export default connect(mapStateToProps, {
  addUserProject,
  deleteUserProject,
  updateUserProject,
})(Projects);
