import React, { useState, useEffect } from 'react';
import NetworkCalls from '../../networkCalls';

function AverageGrade({ moduleState }) {

    const [averageGrade, setAverageGrade] = useState('');
    const [averageModuleScore, setAverageModuleScore] = useState('')

    useEffect(() => {
        NetworkCalls.fetchAverageGrade(1).then(data => setAverageGrade(data));
        console.log("This network call was run _______")
    }, []);

    useEffect(() => {
        NetworkCalls.fetchAverageModuleScore(moduleState.id).then(data => setAverageModuleScore(data))
        console.log(moduleState.id)
    }, [moduleState.id]);

    console.log('average garde is', averageGrade);
    //console.log(averageModuleScore[0]["average"])
    return (
        <div className="averages">

            <div>
                <span> Average Module Score for {moduleState.name}:{averageModuleScore[0]["average"]} </span>
            </div>
            <div>
                <span> Average Grade:{averageGrade.average} </span>
            </div>

        </div>
    );
}

export default AverageGrade;

// {averageGrade[0]["average"]}