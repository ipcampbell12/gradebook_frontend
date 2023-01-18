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
import APIServce from '../../APIService';


function AddScores({ module, onAdd, teacher, studentsAssessments, students }) {

    //New Student Form
    //const [studentIds, setStudentIds] = useState([])
    const [scores, setScores] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(scores)

        const teacherId = teacher.id
        const assessmentId = module.id

        APIServce.addClassScores(teacherId, assessmentId, { scores })
            .then(response => console.log(response))
            .catch(error => console.log(error))

        setScores([])

    }



    //NEED TO HAVE VALUE ATTRIBUTE FOR INPUT TO WORK

    return (
        <div className="student-chart" >
            <Typography variant="h5" align="center" id={module.id}> Scores for {module.name} </Typography>
            <TableContainer component={Paper}>
                <Form action="" onSubmit={onSubmit} className="form">
                    <Table sx={{ maxWidth: 400 }} size="small" aria-label="simple table" align="center">
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Score</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {module.scored === true ? (studentsAssessments.map((studentsAssessment) => {
                                return studentsAssessment.assessment.id === module.id &&

                                    (<TableRow key={studentsAssessment.id}>
                                        <TableCell align="center">{studentsAssessment.student.fname}</TableCell>
                                        <TableCell align="center" >{studentsAssessment.student.lname}</TableCell>
                                        <TableCell align="center">
                                            <Form.Group className="mb-1" >
                                                <Form.Control type="number" placeholder="0" id={studentsAssessment.student.id} name="score" value={studentsAssessment.score} onChange={(e) =>
                                                    setScores(e.target.value)
                                                } />
                                            </Form.Group>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="primary" type="submit">
                                                Edit
                                            </Button>
                                        </TableCell>


                                    </TableRow>)
                            }


                            )) :
                                (students.map((student) => {
                                    return <TableRow key={student.id}>
                                        <TableCell align="center">{student.fname}</TableCell>
                                        <TableCell align="center" >{student.lname}</TableCell>
                                        <TableCell align="center">
                                            <Form.Group className="mb-1" >
                                                <Form.Control type="number" placeholder="0" id={student.id} name="score" onChange={(e) =>
                                                    setScores([{ "score": +e.target.value }, ...scores])
                                                } />
                                            </Form.Group>
                                        </TableCell>
                                    </TableRow>
                                }


                                ))


                            }

                        </TableBody>
                    </Table>

                    {
                        module.scored === false ? (
                            <Button variant="primary" type="submit" onClick={onSubmit}>
                                Add All Scores
                            </Button>
                        ) : ''

                    }

                </Form>
            </TableContainer>

        </div>
    );
}

export default AddScores;