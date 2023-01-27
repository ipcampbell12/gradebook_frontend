import React, { useState, useEffect } from 'react';
import NetworkCalls from '../../networkCalls';

function AverageGrade({ moduleState, teacher, currentSubject }) {

    const [averageGrade, setAverageGrade] = useState('');
    const [averageModuleScore, setAverageModuleScore] = useState('')

    useEffect(() => {
        NetworkCalls.fetchAverageGrade(teacher.id, currentSubject.id).then(data => setAverageGrade(data));
        //  console.log("This network call was run _______")
    }, [teacher.id, currentSubject.id]);

    useEffect(() => {
        NetworkCalls.fetchAverageModuleScore(moduleState.id).then(data => setAverageModuleScore(data))
        // console.log(moduleState.id)
    }, [moduleState.id]);

    //console.log('average garde is', averageGrade);

    return (
        <div className="averages">

            <div className="lil-average">
                <span> Average Module Score for {moduleState.name}:    <span className="number">{averageModuleScore.average}</span> </span>
            </div>
            <div className="lil-average">
                <span> Average Grade:       <span className="number">{averageGrade.average}</span> </span>
            </div>

        </div>
    );
}

export default AverageGrade;

// {averageGrade[0]["average"]}