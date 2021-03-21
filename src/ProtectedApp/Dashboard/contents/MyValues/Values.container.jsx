import React from "react";
import { connect } from "react-redux";
import { ValuesComp } from "./Values.ui";
import {
  createTopValues,
  fetchTopValues,
} from "../../../../redux-store/actions/user.actions";
function MyValues(props) {
  return <ValuesComp {...props} />;
}

const mapStateToProps = (store) => {
  return {
    fetchAllValuesState: store.values.fetchAllValuesState,
    topThreeValues: store.values.topThreeValues,
    values: store.values.values,
  };
};

export default connect(mapStateToProps, {
  fetchTopValues,
  createTopValues,
})(MyValues);
