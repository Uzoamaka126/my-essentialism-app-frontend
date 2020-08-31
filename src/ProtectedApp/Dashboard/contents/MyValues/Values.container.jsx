import React from 'react';
import { CurrentValuesComponent } from './Values.ui';
export function MyValues(props) {
    return <CurrentValuesComponent values={props.values} {...props} />
}

MyValues.defaultProps = {
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
        }
    ]
}