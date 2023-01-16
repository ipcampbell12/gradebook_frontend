// import React, { useRef, useState } from "react"
import React from 'react';

import StudentList from "../Visualizations/StudentList"
import ScoresByTest from "./ScoresByTest"
import OverallChart from "../Visualizations/OverallChart"
import ScoresChart from "../Visualizations/ScoresChart"

import { Typography } from "@mui/material"
// import AddStudentButton from "./AddStudentButton"

function Dashboard({ students, teacher, scores }) {
    return (
        <div className="dashboard">

            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Class'}</Typography>
            <div className="container">

                <div className="students">
                    <Typography variant="h6" align="center"> Overall Grades</Typography>
                    <StudentList students={students} />
                </div>
                <div className="charts">
                    <div className="menus">

                    </div>
                    <div className="tables">

                    </div>

                </div>
                <div className="scores">
                    <Typography variant="h6" align="center"> Scores By Assessment</Typography>
                    <ScoresByTest students={students} scores={scores} />
                </div>



            </div>
        </div>
    );
}

export default Dashboard;

// <OverallChart grades={students} />
// <ScoresChart scores={scores} />