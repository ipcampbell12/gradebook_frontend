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
import UpdateStudents from './UpdateStudents';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';


// const columns = [
//     { field: 'fname', headerName: 'First Name', width: 170 },
//     { field: 'lname', headerName: 'Last Name', width: 130 },
// ];

function Student({ teacher, students, onAdd, onDelete, onUpdate }) {

    const [deleteShow, setDeleteShow] = useState(false);

    const handleDeleteOpen = () => setDeleteShow(true)
    const handleDeleteClose = () => setDeleteShow(false)

    const [updateModal, setUpdateModal] =useState(false)

    const [id, setId] =useState('');

    const handleClose = () => setUpdateModal(false);
    const handleShow = () => setUpdateModal(true);

    const deleteStudent = (student_id) => {

        //const teacher_id = teacher.id

        APIServce.deleteStudent(student_id)
            .then(response => console.log(response))
            .catch(error => console.log(error))


        onDelete({ student_id })

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
                                    <Button variant="primary" type="submit" onClick={(e)=>{handleShow(); setId(student.id)} }>
                                    Edit 
                                   
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="danger" type="submit" onClick={(e)=>{handleDeleteOpen(); setId(student.id)}}>
                                        Delete
                                    </Button>
                                
                                </TableCell>
                            </TableRow>
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
            <div className="form">
                <AddStudent onAdd={onAdd} teacher={teacher}/>
            </div>
            { updateModal && <UpdateStudents onUpdate={onUpdate} teacher={teacher} handleClose={handleClose} show={updateModal} id={id}/>}
            
            <Modal show={deleteShow} onHide={handleDeleteClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure you want to delete this student?</Modal.Title>
            </Modal.Header>
            <Modal.Body> This action cannot be undone.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleDeleteClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => {deleteStudent(id); handleDeleteClose()}}>
                Delete
              </Button>
            </Modal.Footer>∂
          </Modal>


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



