import React, { useState } from 'react';
import { Typography } from "@mui/material"
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import AddAssessment from './AddAssessment';
import AddScores from './AddScores'
import TestMenu from './TestMenu'



// import Button from 'react-bootstrap/Button';




//1. Click on module, then set module state to that module's name 


function Grade({ teacher, students, assessments, onAssessment, onAdd, studentsAssessments, subjects }) {

    const [moduleState, setModuleState] = useState('')




    // const onClick = (e) => {
    //     const itemSplit = e.target.id.split('-')
    //     const itemId = Number(itemSplit[1])

    //     //sends click event to App.js
    //     const nameToSet = assessments.find(x => x.id === itemId);
    //     console.log(nameToSet.name)
    //     setModuleState(nameToSet)
    // }

    return (
        <div className="student-page2" >
            <Typography variant="h4" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Grades'}</Typography>
            <div className="container">
                <AddScores students={students} module={moduleState} teacher={teacher} onAdd={onAdd} studentsAssessments={studentsAssessments} />
                <div className="menu">

                </div>

                <div className="assessments">
                    <Typography varaint="h5" align="center"> Assessment List </Typography>
                    <div className="assessment-chart" >
                        <TestMenu assessments={assessments} onModule={setModuleState} />

                    </div>

                    <div className="form">
                        <AddAssessment onAdd={onAssessment} onModule={setModuleState} module={moduleState} subjects={subjects} />

                    </div>

                </div>



            </div>





        </div >

    );

}

export default Grade;



