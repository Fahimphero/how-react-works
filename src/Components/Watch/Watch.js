import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = (props) => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount)
    }
    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h2>This is my smart watch: {steps}</h2>
            <button onClick={increaseSteps}>De Dour........</button>
            <Display name='garmin' steps={steps}></Display>
        </div>
    );
};

export default Watch;