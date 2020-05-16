import React from "react";
import { connect } from "react-redux";
import { ValuesComponent } from "./Values.component";

export function Values(props) {
  return <ValuesComponent values={props.values} {...props} />;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    values: state.values,
    isFetching: state.values.isFetching,
    error: state.values.error,
  };
};

Values.defaultProps = {
  values: [
    {
      id: 1,
      name: "Athletic Ability",
    },
    {
      id: 2,
      name: "Arts & Literature",
    },
    {
      id: 3,
      name: "Body Image",
    },
    {
      id: 4,
      name: "Career",
    },
    {
      id: 5,
      name: "Creativity",
    },
    {
      id: 6,
      name: "Kindness & Generosity",
    },
    {
      id: 7,
      name: "Living In The Moment",
    },
    {
      id: 8,
      name: "Membership In a Social Group",
    },
    {
      id: 9,
      name: "Moral Principles",
    },
    {
      id: 10,
      name: "Music",
    },
  ],
};
export default connect(mapStateToProps, null)(Values);
