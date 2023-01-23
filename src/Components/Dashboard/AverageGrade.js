import React from 'react';

function AverageGrade({ averageGrade, moduleState, averageModuleScore }) {

    console.log('average garde is', averageGrade);
    //console.log(averageModuleScore[0]["average"])
    return (
        <div className="averages">

            <div>
                <span> Average Module Score for {moduleState}:{ } </span>
            </div>
            <div>
                <span> Average Grade:{averageGrade[0]["average"]} </span>
            </div>

        </div>
    );
}

export default AverageGrade;

// {averageGrade[0]["average"]}