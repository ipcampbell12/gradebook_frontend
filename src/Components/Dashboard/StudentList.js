import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ currentSubject, grades }) {
  return (
    <TableContainer component={Paper}>

      <Table sx={{ maxWidth: 300 }} aria-label="simple table" align="center">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grades.map((grade) => (
            <TableRow>
              <TableCell align="center">{grade.fname}</TableCell>
              <TableCell align="center">{grade.lname}</TableCell>
              <TableCell align="center">{grade.avg}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}