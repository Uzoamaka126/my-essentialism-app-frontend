import React from "react";
import { connect } from "react-redux";
import { ProjectsComponent } from "./project.component";
import {
  fetchUserProjects,
  addUserProject,
  deleteUserProject,
  updateUserProject,
} from "../../../../redux-store/actions/project.actions";
import { fetchValues } from "../../../../redux-store/actions/values.actions";

function Projects(props) {
  return (
    <ProjectsComponent
      {...props}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    fetchProjectsState: state.projects.fetchProjectsState,
    values: state.values.values,
    projects: state.projects.projects,
    fetchSingleProjState: state.projects.fetchSingleProjState,
    addProjectState: state.projects.addProjectState,
    project: state.projects.project,
  };
};

export default connect(mapStateToProps, {
  fetchUserProjects,
  addUserProject,
  fetchValues,
  deleteUserProject,
  updateUserProject,
})(Projects);
