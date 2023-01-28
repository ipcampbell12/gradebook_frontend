import React from 'react';
import { Typography } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UpdatingScores from './UpdatingScores';



function ScoredChart({ moduleState, studentsAssessments, updateStudentAssessment }) {

    //These reflect most recent updates to the database
    // console.log(`Module name from ScoredChart is ${moduleState.name}`)
    // console.log(`Module id from ScoredChart is ${moduleState.id}`)

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
                                    <TableCell align="center" id={studentsAssessment.id}> {studentsAssessment.score}  </TableCell>
                                    <TableCell>
                                        <UpdatingScores studentsAssessment={studentsAssessment} updateStudentAssessment={updateStudentAssessment} />
                                    </TableCell>
                                    <TableCell>

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