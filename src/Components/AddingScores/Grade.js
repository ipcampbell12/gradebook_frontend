import React, { useState, useEffect } from 'react';
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
import Alert from 'react-bootstrap/Alert';



// import Button from 'react-bootstrap/Button';




//1. Click on module, then set module state to that module's name 


function Grade({ teacher, students, assessments, onAssessment, onAdd, studentsAssessments, subjects, onDelete, newModuleState, updateStudentAssessment }) {

    //Module state for scored module that was just selected
    const [moduleState, setModuleState] = useState('')
    //console.log(moduleState)
    const [show, setShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [addShow, setAddShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setTimeout(() => setDeleteShow(false), 4000)
    });

    const deleteAssessment = (assessment_id) => {

        const teacher_id = teacher.id

        APIServce.deleteAssessment(teacher_id, assessment_id)
            .then(response => console.log(response))
            .catch(error => console.log(error))


        onDelete({ assessment_id })

        setDeleteShow(true)
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
                    teacher={teacher}
                    onAdd={onAdd}
                    studentsAssessments={studentsAssessments}
                    handleClose={handleClose}
                    show={show}
                    assessments={assessments}
                    onAssessment={onAssessment}
                    subjects={subjects}
                    newModuleState={newModuleState}
                    setAddShow={setAddShow} />}
            </div>

            <div className="assessment-chart">
                <ScoredChart studentsAssessments={studentsAssessments} moduleState={moduleState} show={show} updateStudentAssessment={updateStudentAssessment} />
            </div>

            {deleteShow === true && <Alert key={'danger'} variant={'danger'}>
                You just removed {moduleState.name} from the database.
            </Alert>}

            {addShow === true && <Alert key={'success'} variant={'success'}>
                Scores have been added to the database.
            </Alert>}

        </div>

    );

}

export default Grade;



// <div className="form">
//     <AddAssessment onAdd={onAssessment} onModule={setModuleState} module={moduleState} subjects={subjects} />

// </div>

// <AddScores students={students} module={moduleState} teacher={teacher} onAdd={onAdd} studentsAssessments={studentsAssessments} onModule={setModuleState} />