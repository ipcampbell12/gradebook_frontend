// import React, { useRef, useState } from "react"
import React from 'react';
import Navigation from "./Navigation"
import StudentList from "./StudentList"
import {Typography} from "@mui/material"
// import AddStudentButton from "./AddStudentButton"

function Dashboard({onStudent, assessments, students, teacher}) {
    return (
        <div className="dashboard">
        <Navigation />
        <Typography variant="h3" align="center"> {teacher.fname+' '+teacher.lname+'\'s Class' }</Typography>
        <div className="container">
            
            
        
            <div className="students">
                <Typography variant="h6" align="center"> Overall Grades</Typography>
                <StudentList assessments={assessments} students={students}/>
            </div>
            <div className="charts">
               
            </div>
            <div className="scores">
               
            </div>

            

        </div>
        </div>
    );
}

export default Dashboard;