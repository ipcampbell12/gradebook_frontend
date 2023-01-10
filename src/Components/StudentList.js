import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ onStudent, assessments, students}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {students.map((student) => (
            <TableRow>
              <TableCell align="right">{student.fname}</TableCell>
              <TableCell align="right">{student.lname}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}