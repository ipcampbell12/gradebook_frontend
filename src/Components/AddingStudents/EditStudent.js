import React, { useState, useEffect } from 'react';
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
import Alert from 'react-bootstrap/Alert';
import NetworkCalls from '../../networkCalls';
// import Form from 'react-bootstrap/Form';


// const columns = [
//     { field: 'fname', headerName: 'First Name', width: 170 },
//     { field: 'lname', headerName: 'Last Name', width: 130 },
// ];

function Student(props) {


    const [id, setId] =useState('');
    const [teacherState, setTeacherState] = useState('')
    const [studentListState, setStudentListState] = useState([])

     //students
     useEffect(() => {
        NetworkCalls.fetchTeachersStudents(1).then(data => setStudentListState(data))
    }, []);

     //teacher
     useEffect(() => {
        NetworkCalls.fetchTeacher(1).then(data => setTeacherState(data))
    }, []);

    const addStudent = (student) => {
        const id = Math.max(...studentListState.map(o => o.id)) + 1
        const newStudent = { id, ...student }
    
        // console.log(`SA student_id is ${newStudent.id}`)
    
        setStudentListState([...studentListState, newStudent])
    
      }

      const onDelete = (id) => {
        // console.log(id)
        setStudentListState(studentListState.filter((item) => item.id !== id))
      }


      const updateStudent = (data, id) => {

        const updatedStudent = studentListState.find(student => student.id === id)
        onDelete(id)
    
        updatedStudent.fname = data["fname"]
        updatedStudent.lname = data["lname"]
    
        //setStudentListState([...studentListState, updatedStudent])
    
      }
 
    //MODALS -----------------------------------------------------------
    const [deleteShow, setDeleteShow] = useState(false);

    const handleDeleteOpen = () => setDeleteShow(true)
    const handleDeleteClose = () => setDeleteShow(false)

    const [updateModal, setUpdateModal] =useState(false)


    const handleClose = () => setUpdateModal(false);
    const handleShow = () => setUpdateModal(true);
    //------------------------------------------------------------------

    //ALERTS -----------------------------------------------------------

    const [updateAlert, setUpdateAlert] = useState(false);
    const [deleteAlert, setDeleteAlert] = useState(false);

    useEffect(() => {
        setTimeout(() => setDeleteAlert(false), 5000)
    });

    useEffect(() => {
        setTimeout(() => setUpdateAlert(false), 5000)
    });

    //------------------------------------------------------------------


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
            <Typography variant="h3" align="center"> {teacherState.fname + ' ' + teacherState.lname + '\'s Students'}</Typography>

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

                        {studentListState.map((student) => {
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
                <AddStudent onAdd={addStudent} teacher={teacherState}/>

                {deleteAlert === true && <Alert key={'danger'} variant={'danger'}>
                You just removed a student from the database.
                </Alert>}

                {updateAlert === true && <Alert key={'success'} variant={'success'}>
                You have just updated a student in the database.
                </Alert>}
                
            </div>
            { updateModal && <UpdateStudents onUpdate={updateStudent} teacher={teacherState} handleClose={handleClose} show={updateModal} id={id} setUpdateAlert={setUpdateAlert}/>}
            
            <Modal show={deleteShow} onHide={handleDeleteClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure you want to delete this student?</Modal.Title>
            </Modal.Header>
            <Modal.Body> This action cannot be undone.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleDeleteClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => {deleteStudent(id); handleDeleteClose(); setDeleteAlert(true);} }>
                Delete
              </Button>
            </Modal.Footer>
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



