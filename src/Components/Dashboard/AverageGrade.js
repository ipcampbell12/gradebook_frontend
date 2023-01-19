import React from 'react';

function AverageGrade({ averageGrade }) {

    //console.log(averageGrade[0]["average"])
    return (
        <div className="averages">
            <div>
                <span> Average Grade:{averageGrade[0]["average"]} </span>
            </div>

        </div>
    );
}

export default AverageGrade;

// {averageGrade[0]["average"]}