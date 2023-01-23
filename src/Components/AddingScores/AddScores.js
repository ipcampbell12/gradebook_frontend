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


function AddScores({ module, onAdd, teacher, studentsAssessments, students, onModule }) {

    //New Student Form
    //const [studentIds, setStudentIds] = useState([])
    const [scores, setScores] = useState([])


    const onSubmit = (e) => {
        e.preventDefault()

        console.log(scores)

        const teacherId = teacher.id
        const assessmentId = module.id

        APIServce.addClassScores(teacherId, assessmentId, scores)
            .then(response => console.log(response))
            .catch(error => console.log(error))

        onModule('')

    }



    console.log(scores)


    //NEED TO HAVE VALUE ATTRIBUTE FOR INPUT TO WORK

    return (
        <div className="student-chart" >

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

                            {students.map((student) => {
                                return <TableRow key={student.id}>
                                    <TableCell align="center">{student.fname}</TableCell>
                                    <TableCell align="center" >{student.lname}</TableCell>
                                    <TableCell align="center">
                                        <Form.Group className="mb-1" >
                                            <Form.Control type="number" placeholder="0" id={student.id} name="score" onChange={(e) => {
                                                setScores([...scores, { "score": +e.target.value }]);
                                            }} />
                                        </Form.Group>
                                    </TableCell>
                                </TableRow>
                            }


                            )


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