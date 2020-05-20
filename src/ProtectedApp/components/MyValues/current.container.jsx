import React from 'react';
import { CurrentValuesComponent } from './current.component';
import running from '../../../Components/assets/athletic.svg'
import moments from '../../../Components/assets/moments.svg'
import art from '../../../Components/assets/education.svg';
import bulb from '../../../Components/assets/bulb.svg';
import career from '../../../Components/assets/career.svg';
import kindness from '../../../Components/assets/kindness.svg';
export function CurrentValues(props) {
    return <CurrentValuesComponent values={props.values} {...props} />
}

CurrentValues.defaultProps = {
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
            src: moments
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
        }
    ]
}