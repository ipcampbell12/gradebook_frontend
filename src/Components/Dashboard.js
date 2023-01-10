// import React, { useRef, useState } from "react"
import React from 'react';
import Navigation from "./Navigation"
import StudentList from "./StudentList"
import AddStudentButton from "./AddStudentButton"

function Dashboard({onStudent, assessments, students}) {
    return (
        <div>
            <Navigation />
            <div className="students">
                <StudentList assessments={assessments} students={students}/>
            </div>
            
            <AddStudentButton onStudent={onStudent} />
        </div>
    );
}

export default Dashboard;