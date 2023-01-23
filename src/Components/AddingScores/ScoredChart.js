import React from 'react';
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


function ScoredChart({ moduleState, studentsAssessments }) {
    return (
        <div className="student-chart">
            <Typography variant="h5" align="center" id={moduleState.id}> Scores for {moduleState.name} </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 600 }} size="small" aria-label="simple table" align="center">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Score</TableCell>
                            <TableCell>Action</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentsAssessments.map((studentsAssessment) => {

                            return studentsAssessment.assessment.id === moduleState.id &&
                                (<TableRow key={studentsAssessment.id}>
                                    <TableCell align="center">{studentsAssessment.student.fname}</TableCell>
                                    <TableCell align="center" >{studentsAssessment.student.lname}</TableCell>
                                    <TableCell align="center">
                                        <Form.Group className="mb-1" >
                                            <Form.Control type="number" placeholder="0" id={studentsAssessment.student.id} name="score" value={studentsAssessment.score} />
                                        </Form.Group>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="primary" type="submit">
                                            Edit
                                        </Button>
                                    </TableCell>


                                </TableRow>)
                        })}


                    </TableBody>

                </Table>

            </TableContainer>
        </div>
    );
}

export default ScoredChart;