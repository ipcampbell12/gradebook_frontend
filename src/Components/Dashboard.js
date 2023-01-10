// import React, { useRef, useState } from "react"
import React from 'react';
import Navigation from "./Navigation"
import StudentList from "./StudentList"
import AddStudentButton from "./AddStudentButton"

function Dashboard(props) {
    return (
        <div>
            <Navigation />
            <StudentList />
            <AddStudentButton />
        </div>
    );
}

export default Dashboard;