// import React, { useRef, useState } from "react"
import React, { useState, useEffect, useContext } from 'react';
import DTestMenu from './DTestMenu';
import StudentList from "./StudentList"
import ScoresByTest from "./ScoresByTest"
import AverageGrade from './AverageGrade';
//import OverallChart from "../Visualizations/OverallChart"
//import ScoresChart from "../Visualizations/ScoresChart"
import NetworkCalls from '../../networkCalls';
import SubjectMenu from './SubjectMenu';
import { TeacherContext } from '../../Context/TeacherContext'

import { Typography } from "@mui/material"
// import AddStudentButton from "./AddStudentButton"

function Dashboard(props) {
    // dummy code, organize later
    //const [averageGrade, setAverageGrade] = useState();
    // const [students, setStudents] = useState();

    const [moduleState, setModuleState] = useState('')
    const [grades, setGrades] = useState([])
    const [currentSubject, setCurrentSubject] = useState('')
    //console.log(moduleState)



    //TOPLEVEL STATE -----------------------------------------------------

    const [studentListState, setStudentListState] = useState([])

    const [studentsAssessments, setStudentsAssessments] = useState([])

    const [subjectListState, setSubjectListState] = useState([])

    const [assessments, setAssessments] = useState([])

    const { teacher } = useContext(TeacherContext)

    // ------------------------------------------------------------------


    //NETWORK CALLS -----------------------------------------------------------------

    //grades
    useEffect(() => {
        NetworkCalls.fetchGrades(teacher.id, currentSubject.id).then(data => setGrades(data))
    }, [teacher.id, currentSubject.id]);

    //teacher
    // useEffect(() => {
    //     NetworkCalls.fetchTeacher(1).then(data => setTeacherState(data))
    // }, []);

    useEffect(() => {
        NetworkCalls.fetchTeachersStudents(teacher.id).then(data => setStudentListState(data))
    }, [teacher.id]);

    // assessments
    useEffect(() => {
        NetworkCalls.fetchAssessments(teacher.id).then(data => setAssessments(data))
    }, [teacher.id]);

    //studentsAssessments
    useEffect(() => {
        NetworkCalls.fetchStudentsAssessments().then(data => setStudentsAssessments(data))
    }, []);

    //subjects
    useEffect(() => {
        NetworkCalls.fetchSubjects(teacher.id).then(data => setSubjectListState(data))
    }, [teacher.id]);
    // ------------------------------------------------------------------------------





    //console.log(`SA state in Dashboard is ${studentsAssessments.map(x => x.score)}`)
    return (
        <div className="dashboard">


            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Class'}</Typography>
            <div className="container">

                <div className="students">
                    <Typography variant="h6" align="center"> Overall Grades for {currentSubject.name} </Typography>
                    <StudentList students={studentListState} grades={grades} currentSubject={currentSubject} />
                </div>
                <div className="charts">
                    <div className="menus">
                        <SubjectMenu subjects={subjectListState} currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} />
                        <DTestMenu assessments={assessments} onModule={setModuleState} currentSubject={currentSubject} />
                    </div>
                    <div className="averages">
                        <AverageGrade moduleState={moduleState} teacher={teacher} currentSubject={currentSubject} />
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