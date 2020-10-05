import React from "react";
import { connect } from "react-redux";
import { CurrentValuesComponent } from "./Values.ui";
import {
  fetchTopValues,
  fetchValues,
  createTopValues
} from "../../../../redux-store/actions/values.actions";

function MyValues(props) {
  const {
    fetchTopValues,
    isLoading,
    error_message,
    topThreeValues,
    success,
    fetchValues,
    values,
    createTopValues
  } = props;

  return (
    <CurrentValuesComponent
      success={success}
      error_message={error_message}
      fetchTopValues={fetchTopValues}
      topThreeValues={topThreeValues}
      isLoading={isLoading}
      fetchValues={fetchValues}
      values={values}
      createTopValues={createTopValues}
      {...props}
    />
  );
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.values.isLoading,
    success: store.values.success,
    error_message: store.values.error_message,
    topThreeValues: store.values.topThreeValues,
    values: store.values.values,
  };
};

export default connect(mapStateToProps, {
  fetchTopValues,
  fetchValues,
  createTopValues
})(MyValues);
