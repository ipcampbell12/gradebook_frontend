import React, { useState } from 'react';
import { Typography } from "@mui/material"
//import { DataGrid } from '@mui/x-data-grid';
import AddStudent from './AddStudent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import APIServce from '../../APIService'
import Form from 'react-bootstrap/Form';


// const columns = [
//     { field: 'fname', headerName: 'First Name', width: 170 },
//     { field: 'lname', headerName: 'Last Name', width: 130 },
// ];

function Student({ teacher, students, onAdd, onDelete }) {

    const [deleteShow, setDeleteShow] = useState(false);

    const deleteAssessment = (assessment_id) => {

        const teacher_id = teacher.id

        APIServce.deleteAssessment(teacher_id, assessment_id)
            .then(response => console.log(response))
            .catch(error => console.log(error))


        onDelete({ assessment_id })

        setDeleteShow(true)
        

        }


    return (
        <div className="student-page1">
            <Typography variant="h3" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Students'}</Typography>

            <div className="student-chart">
            <TableContainer component={Paper} className="table">
                <Table sx={{ maxWidth: 400 }} size="small" aria-label="simple table" align="center">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>Edit</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {students.map((student) => {
                            return <TableRow key={student.id}>
                                <TableCell align="center">{student.fname}</TableCell>
                                <TableCell align="center" >{student.lname}</TableCell>
                                <TableCell align="center"> 
                                    <Button variant="primary" type="submit">
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="danger" type="submit">
                                        Delete
                                    </Button>
                                
                                </TableCell>
                            </TableRow>
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
            <div className="form">
                <AddStudent onAdd={onAdd} teacher={teacher} />
            </div>
            </div>
            

        </div>
    );
}

export default Student;



// <div className="student-chart" style={{ height: 600, width: '100%' }}>
//     <div className="students">
//         <DataGrid
//             rows={students}
//             columns={columns}
//             pageSize={8}
//             rowsPerPageOptions={[8]}
//             checkboxSelection
//         />
//     </div>
    


// </div>