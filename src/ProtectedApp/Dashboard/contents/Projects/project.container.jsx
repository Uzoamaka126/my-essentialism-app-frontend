import React from "react";
import { connect } from 'react-redux'
import { ProjectsComponent } from "./project.component";
import { fetchUserProjects, addUserProjects } from '../../../../redux-store/actions/project.actions'
import { fetchValues } from '../../../../redux-store/actions/values.actions'

function Projects(props) {
  const {
    fetchUserProjects,
    fetchValues,
    addUserProjects,
    isLoading,
    project_error,
    project_success
  } = props;
  
  return (
    <ProjectsComponent
      fetchProjects={fetchUserProjects}
      fetchValues={fetchValues}
      addProjects={addUserProjects}
      isLoading={isLoading}
      error={project_error}
      success={project_success}
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
    values: store.values.values
  };
};

export default connect(
  mapStateToProps, {
    fetchUserProjects,
    addUserProjects,
    fetchValues
  }
)(Projects);
