import React, { useState } from 'react';
import { Typography } from "@mui/material"
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import AddAssessment from './AddAssessment';

import TestMenu from './TestMenu'
import APIServce from '../../APIService';
import ScoredChart from './ScoredChart';
import Button from 'react-bootstrap/Button';
import ScoringModal from './ScoringModal';



// import Button from 'react-bootstrap/Button';




//1. Click on module, then set module state to that module's name 


function Grade({ teacher, students, assessments, onAssessment, onAdd, studentsAssessments, subjects, onDelete }) {

    const [moduleState, setModuleState] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteAssessment = (assessment_id) => {

        const teacher_id = teacher.id

        APIServce.deleteAssessment(teacher_id, assessment_id)
            .then(response => console.log(response))
            .catch(error => console.log(error))


        onDelete({ assessment_id })

        setModuleState('')

    }


    return (
        <div className="student-page2" >
            <Typography variant="h4" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Grades'}</Typography>

            <div className="menu" >
                <TestMenu assessments={assessments} onModule={setModuleState} testDelete={deleteAssessment} />
                <Button variant="primary" type="submit" onClick={handleShow} className="btn btn-primary">
                    Add Assessment
                </Button>
                {show && <ScoringModal
                    students={students}
                    module={moduleState}
                    teacher={teacher}
                    onAdd={onAdd}
                    studentsAssessments={studentsAssessments}
                    onModule={setModuleState}
                    handleClose={handleClose}
                    show={show}
                    onAssessment={onAssessment} />}
            </div>

            <div className="assessment-chart">
                <ScoredChart studentsAssessments={studentsAssessments} moduleState={moduleState} show={show} />
            </div>

        </div>

    );

}

export default Grade;



// <div className="form">
//     <AddAssessment onAdd={onAssessment} onModule={setModuleState} module={moduleState} subjects={subjects} />

// </div>

// <AddScores students={students} module={moduleState} teacher={teacher} onAdd={onAdd} studentsAssessments={studentsAssessments} onModule={setModuleState} />