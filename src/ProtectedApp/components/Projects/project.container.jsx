import React from "react";
import { ProjectsComponent } from "./project.component";

export function Projects(props) {
  return <ProjectsComponent projects={props.projects} {...props} />;
}

Projects.defaultProps = {
  projects: [
    {
      id: 1,
      valueName: "Athletic Ability",
      name: "Run thrice a week",
    },
    {
      id: 2,
      valueName: "Arts & Literature",
      name: "Learn to Draw",
    },
    {
      id: 3,
      valueName: "Body Image",
      name: "Love body more",
    },
    {
      id: 4,
      valueName: "Career",
      name: "Take up more space at the office",
    },
    {
      id: 5,
      valueName: "Creativity",
      name: "Design for 100 days",
    },
    {
      id: 6,
      valueName: "Kindness & Generosity",
      name: "Say hello to someone everyday",
    },
  ],
};