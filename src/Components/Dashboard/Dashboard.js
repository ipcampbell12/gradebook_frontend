// import React, { useRef, useState } from "react"
import React, { useState, useEffect } from 'react';
import DTestMenu from './DTestMenu';
import StudentList from "./StudentList"
import ScoresByTest from "./ScoresByTest"
import AverageGrade from './AverageGrade';
//import OverallChart from "../Visualizations/OverallChart"
//import ScoresChart from "../Visualizations/ScoresChart"
import NetworkCalls from '../../networkCalls';
import SubjectMenu from './SubjectMenu';

import { Typography } from "@mui/material"
// import AddStudentButton from "./AddStudentButton"

function Dashboard({ students, teacher, studentsAssessments, assessments, subjects }) {
    // dummy code, organize later
    //const [averageGrade, setAverageGrade] = useState();
    // const [students, setStudents] = useState();

    const [moduleState, setModuleState] = useState('')
    const [grades, setGrades] = useState([])
    const [currentSubject, setCurrentSubject] = useState('')
    //console.log(moduleState)

    useEffect(() => {
        NetworkCalls.fetchGrades(teacher.id, currentSubject.id).then(data => setGrades(data))
    }, [teacher.id, currentSubject.id]);





    //console.log(`SA state in Dashboard is ${studentsAssessments.map(x => x.score)}`)
    return (
        <div className="dashboard">

            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Class'}</Typography>
            <div className="container">

                <div className="students">
                    <Typography variant="h6" align="center"> Overall Grades for {currentSubject.name} </Typography>
                    <StudentList students={students} grades={grades} currentSubject={currentSubject} />
                </div>
                <div className="charts">
                    <div className="menus">
                        <SubjectMenu subjects={subjects} currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} />
                        <DTestMenu assessments={assessments} onModule={setModuleState} currentSubject={currentSubject} />
                    </div>
                    <div className="averages">
                        <AverageGrade moduleState={moduleState} />
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

//<ScoresChart studentsAssessments={studentsAssessments} module={moduleState} />