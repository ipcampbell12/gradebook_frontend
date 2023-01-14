import React, { useState } from 'react';
import { Typography } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../APIService';


function AddScores({ students, module, onAdd, teacher }) {

    //New Student Form
    const [teacherId, setTeacherId] = useState('')
    const [assessmentId, setAssessmentID] = useState('')
    const [studentIds, setStudents] = useState([])
    const [scores, setScores] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()

        setAssessmentID(module.id)
        setTeacherId(teacher.id)
        setStudents(students.map(student => student.id))

        APIServce.addClassScores({ studentIds, scores }, teacherId, assessmentId)
            .then(response => console.log(response))
            .catch(error => console.log(error))

        onAdd({ students, module, teacher, scores })

        console.log(studentIds, scores)

    }





    return (
        <div className="student-chart" >
            <Typography variant="h5" align="center" id={`assessment-${module.id}`}> Scores for {module.name} </Typography>
            <TableContainer component={Paper}>
                <Form action="" onSubmit={onSubmit} className="form">
                    <Table sx={{ maxWidth: 300 }} size="small" aria-label="simple table" align="center">
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Score</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map((student, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{student.fname}</TableCell>
                                    <TableCell align="center" >{student.lname}</TableCell>
                                    <TableCell align="center">
                                        <Form.Group className="mb-1" >
                                            <Form.Control type="number" placeholder="0" id={`student-${student.id}`} name="grade" value={student.grade}
                                                onChange={(e) => setScores([...e.target.value, scores])} />
                                        </Form.Group>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                    <Button variant="primary" type="submit" onClick={onSubmit}>
                        Add All Scores
                    </Button>
                </Form>
            </TableContainer>

        </div>
    );
}

export default AddScores;