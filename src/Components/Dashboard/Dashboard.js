// import React, { useRef, useState } from "react"
import React, { useState } from 'react';
import DTestMenu from './DTestMenu';
import StudentList from "./StudentList"
import ScoresByTest from "./ScoresByTest"
import AverageGrade from './AverageGrade';
// import OverallChart from "../Visualizations/OverallChart"
// import ScoresChart from "../Visualizations/ScoresChart"

import { Typography } from "@mui/material"
// import AddStudentButton from "./AddStudentButton"

function Dashboard({ students, teacher, studentsAssessments, assessments, grades, averageGrade }) {

    const [moduleState, setModuleState] = useState('')

    return (
        <div className="dashboard">

            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Class'}</Typography>
            <div className="container">

                <div className="students">
                    <Typography variant="h6" align="center"> Overall Grades</Typography>
                    <StudentList students={students} grades={grades} />
                </div>
                <div className="charts">
                    <div className="menus">
                        <DTestMenu assessments={assessments} onModule={setModuleState} />
                    </div>
                    <div className="averages">
                        <AverageGrade averageGrade={averageGrade} />
                    </div>
                    <div className="tables">


                    </div>

                </div>
                <div className="scores">
                    <Typography variant="h6" align="center"> Scores By Assessment</Typography>
                    <ScoresByTest studentsAssessments={studentsAssessments} module={moduleState} />

                </div>



            </div>
        </div>
    );
}

export default Dashboard;

// <OverallChart grades={students} />
// <ScoresChart scores={scores} />