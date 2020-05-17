import React from "react";
import { connect } from "react-redux";
import { ValuesComponent } from "./Values.component";
import running from '../../../Components/assets/athletic.svg'
import social from '../../../Components/assets/social.svg'
import music from '../../../Components/assets/undraw_happy_music_g6wc (1).svg';
import moments from '../../../Components/assets/moments.svg'
import art from '../../../Components/assets/education.svg';
import bulb from '../../../Components/assets/bulb.svg';
import career from '../../../Components/assets/career.svg';
import kindness from '../../../Components/assets/kindness.svg';


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
      src: running
    },
    {
      id: 2,
      name: "Arts & Literature",
      src: art
    },
    {
      id: 3,
      name: "Body Image",
    },
    {
      id: 4,
      name: "Career",
      src: career

    },
    {
      id: 5,
      name: "Creativity",
      src: bulb
    },
    {
      id: 6,
      name: "Kindness & Generosity",
      src: kindness
    },
    {
      id: 7,
      name: "Living In The Moment",
      src: moments
    },
    {
      id: 8,
      name: "Membership In a Social Group",
      src: social
    },
    {
      id: 9,
      name: "Moral Principles",
    },
    {
      id: 10,
      name: "Music",
      src: music
    },
  ],
};
export default connect(mapStateToProps, null)(Values);
