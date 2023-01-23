import React, { useState, useEffect } from 'react';
import NetworkCalls from '../../networkCalls';

function AverageGrade({ moduleState }) {

    const [averageGrade, setAverageGrade] = useState();
    const [averageModuleScore, setAverageModuleScore] = useState('')

    useEffect(() => {
        NetworkCalls.fetchGrades('averagegrade', setAverageGrade, 1);
    }, []);

    useEffect(() => {
        NetworkCalls.fetchTeacher('scoresbytest', setAverageModuleScore, moduleState.id)
    }, [moduleState.id]);

    // console.log('average garde is', averageGrade);
    //console.log(averageModuleScore[0]["average"])
    return (
        <div className="averages">

            <div>
                <span> Average Module Score for {moduleState}:{ } </span>
            </div>
            <div>
                <span> Average Grade:{ } </span>
            </div>

        </div>
    );
}

export default AverageGrade;

// {averageGrade[0]["average"]}