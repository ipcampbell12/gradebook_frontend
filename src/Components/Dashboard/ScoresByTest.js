import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material"


export default function BasicTable({ studentsAssessments, module }) {


  return (
    <div>
      <Typography variant="h5" align="center" id={module.id}> Scores for {module.name} </Typography>
      <TableContainer component={Paper}>

        <Table sx={{ maxWidth: 300 }} aria-label="simple table" align="center">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsAssessments.map((studentAssessment) => {

              return studentAssessment.assessment.id === module.id ?
                (<TableRow key={studentAssessment.id}>
                  <TableCell align="center">{studentAssessment.student.fname}</TableCell>
                  <TableCell align="center">{studentAssessment.student.lname}</TableCell>
                  <TableCell align="center">{studentAssessment.score}</TableCell>
                </TableRow>)

                : ''
            })}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}