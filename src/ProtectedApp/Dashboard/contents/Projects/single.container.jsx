import React from 'react';
import { connect } from 'react-redux'
import { SingleProjectComponent} from './single.ui';
import {
  fetchSingleProject
} from '../../../../redux-store/actions/project.actions'
import {
  fetchTasks, addTask, deleteTask, updateTask
} from '../../../../redux-store/actions/tasks.action'

function SingleProject(props) {
  const {
    isLoading,
    project_error,
    project_success,
    project,
    fetchSingleProject,
    error_message,
    addTask,
    fetchTasks,
    deleteTask,
    updateTask  ,
    tasks      
} = props;

    return (
      <SingleProjectComponent
        fetchSingleProject={fetchSingleProject}
        project={project}
        project_error={project_error}
        project_success={project_success}
        isLoading={isLoading}
        error_message={error_message}
        addTask={addTask}
        fetchTasks={fetchTasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        tasks={tasks}
        {...props}
      />
    )
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.projects.isLoading,
    project_success: store.projects.project_success,
    project_error: store.projects.project_error,
    error_message: store.projects.error_message,
    project: store.projects.project,
    tasks: store.tasks.tasks
  };
};

export default connect(
  mapStateToProps, {
    fetchSingleProject,
    addTask,
    fetchTasks,
    deleteTask,
    updateTask
  }
)(SingleProject);