import React from "react";
import { connect } from 'react-redux'
import { ProjectsComponent } from "./project.component";
import {
  fetchUserProjects,
  addUserProject,
  fetchSingleProject
} from '../../../../redux-store/actions/project.actions'
import { fetchValues } from '../../../../redux-store/actions/values.actions'

function Projects(props) {
  const {
    fetchUserProjects,
    fetchValues,
    addUserProject,
    isLoading,
    project_error,
    project_success,
    values,
    projects,
    add_project_success,
    add_project_error,
    isAddLoading,
    fetchSingleProject
  } = props;
  
  return (
    <ProjectsComponent
      fetchUserProjects={fetchUserProjects}
      fetchValues={fetchValues}
      addUserProject={addUserProject}
      isLoading={isLoading}
      error={project_error}
      success={project_success}
      values={values}
      projects={projects}
      addSuccess={add_project_success}
      addError={add_project_error}
      addLoading={isAddLoading}
      fetchSingleProject={fetchSingleProject}
      {...props}
    />
  );
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.projects.isLoading,
    project_success: store.projects.project_success,
    project_error: store.projects.project_error,
    error_message: store.projects.error_message,
    values: store.values.values,
    projects: store.projects.projects,
    add_project_success: store.projects.add_project_success,
    add_project_error: store.projects.add_project_error,
    isAddLoading: store.projects.isAddLoading,
    project: store.projects.project
  };
};

export default connect(
  mapStateToProps, {
    fetchUserProjects,
    addUserProject,
    fetchValues,
    fetchSingleProject
  }
)(Projects);
