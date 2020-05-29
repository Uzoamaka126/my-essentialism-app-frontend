import React from "react";
import { connect } from "react-redux";
import { ValuesComponent } from "./Values.component";

export function Values(props) {
  const { values, isLoading, error } = props;

  return (
    <ValuesComponent
      values={values}
      isLoading={isLoading}
      error={error}
      {...props}
    />
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    values: state.values.values,
    isLoading: state.values.isLoading,
    error: state.values.error,
  };
};
export default connect(mapStateToProps, null)(Values);
