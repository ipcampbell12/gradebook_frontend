// import React, { useRef, useState } from "react"
import React from 'react';
import Navigation from "./Navigation"
import StudentList from "./StudentList"
import ScoresByTest from "./ScoresByTest"
import OverallChart from "./OverallChart"

import {Typography} from "@mui/material"
// import AddStudentButton from "./AddStudentButton"

function Dashboard({onStudent, assessments, students, teacher, scores}) {
    return (
        <div className="dashboard">
        <Navigation />
        <Typography variant="h3" align="center"> {teacher.fname+' '+teacher.lname+'\'s Class' }</Typography>
        <div className="container">
            
            <div className="students">
                <Typography variant="h6" align="center"> Overall Grades</Typography>
                <StudentList students={students}/>
            </div>
            <div className="charts">
               <OverallChart grades = {students}/>
            </div>
            <div className="scores">
                <Typography variant="h6" align="center"> Scores By Assessment</Typography>
                <ScoresByTest students={students} scores={scores}/>
            </div>

            

        </div>
        </div>
    );
}

export default Dashboard;