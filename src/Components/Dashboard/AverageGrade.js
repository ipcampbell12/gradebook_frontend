import React from 'react';

function AverageGrade({ averageGrade }) {

    //console.log(averageGrade[0]["average"])
    return (
        <div>
            <span> Average Grade: {averageGrade[0]["average"]}</span>
        </div>
    );
}

export default AverageGrade;