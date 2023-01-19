import React from 'react';

function AverageGrade({ averageGrade, moduleState, averageModuleScore }) {

    //console.log(averageGrade[0]["average"])
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