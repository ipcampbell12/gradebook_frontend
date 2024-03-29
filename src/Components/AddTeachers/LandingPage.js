import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
//import APIServce from '../../APIService';
import Alert from 'react-bootstrap/Alert';
//import Modal from 'react-bootstrap/Modal';
import NetworkCalls from '../../networkCalls';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import AddTeacherModal from './AddTeacherModal';
import { TeacherContext } from '../../Context/TeacherContext'
import UpdateTeacherModal from './UpdateTeacherModal';
import Modal from 'react-bootstrap/Modal';
import APIServce from '../../APIService';
import Spinner from './Spinner';

function LandingPage(props) {

    const [teachers, setTeachers] = useState([])

    const { selectTeacher } = useContext(TeacherContext)
    const { teacher } = useContext(TeacherContext)

    const [loading, setLoading] = useState(true);

    //const [teacherId, setTeacherId] = useState('')

    //ADD MODAL
    const [teacherModalShow, setTeacherModalShow] = useState(false)
    const handleClose = () => setTeacherModalShow(false)
    const handleOpen = () => setTeacherModalShow(true)
    //UPDATE MODAL
    const [updateModalShow, setUpdateModalShow] = useState(false)
    const openUpdateModal = () => setUpdateModalShow(true)
    const closeUpdateModal = () => setUpdateModalShow(false)
    //DELETE MODAL
    const [deleteModalShow, setDeleteModalShow] = useState(false)
    const openDeleteModal = () => setDeleteModalShow(true)
    const closeDeleteModal = () => setDeleteModalShow(false)

    //ADD ALERT
    const [addAlert, setAddAlert] = useState(false)
    const handleOpenAlert = () => setAddAlert(true)
    // const handleCloseAlert = () => setAddAlert(false)
    //DELETE ALERT
    const [deleteAlert, setDeleteAlert] = useState(false)
    const openDeleteAlert = () => setDeleteAlert(true)
    const closeDeleteAlert = () => setDeleteAlert(false)
    //UPDATE ALERT
    const [updateAlert, setUpdateAlert] = useState(false)
    const openUpdateAlert = () => setUpdateAlert(true)
    const closeUpdateAlert = () => setUpdateAlert(false)
    //SLECTED ALERT
    const [selectedAlert, setSelectedAlert] = useState(false)
    const openSelectedAlert = () => setSelectedAlert(true)
    const closeSelectedAlert = () => setSelectedAlert(false)

    useEffect(() => {
        NetworkCalls.fetchAllTeachers().then(response => { setTeachers(response); setLoading(false); })
    }, [])

    useEffect(() => {
        setTimeout(() => setAddAlert(false), 4000)
    })
    useEffect(() => {
        setTimeout(() => closeDeleteAlert(), 4000)
    })
    useEffect(() => {
        setTimeout(() => closeUpdateAlert(), 4000)
    })
    useEffect(() => {
        setTimeout(() => closeSelectedAlert(), 4000)
    })

    const addTeacher = () => {
        NetworkCalls.fetchAllTeachers().then(response => setTeachers(response))

    }

    const deleteTeacher = (teacher_id) => {

        //const teacher_id = teacher.id

        APIServce.deleteTeacher(teacher_id)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(response => addTeacher(response))

        selectTeacher('No teachers in the database')


        //onDelete({ student_id })

        openDeleteAlert(true)


    }


    const onClick = (e) => {
        const value = e.target.value
        //setTeacherId(value)

        selectTeacher(value)
        openSelectedAlert(true)
    }


    return (
        <div className="student-page2">


            {loading ? <Spinner /> :
                <div className="menu" >
                    <Typography variant="h4" align="center"> Select or Create New Teacher </Typography>
                    {teachers.length !== 0 ? (<Typography variant="h5" align="center"> {teacher && `Current Teacher: ${teacher.fname + ' ' + teacher.lname}`}</Typography>) : "No teacher to select"}



                    <Box sx={{ minWidth: 120 }} className="teacher-menu">
                        <Typography variant="h6" align="center"> Select a Teacher </Typography>
                        {teachers.length !== 0 ? (
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                    onChange={onClick}
                                    value={"Choose a teacher"}
                                >
                                    {
                                        teachers.map(teacher => {

                                            return (<MenuItem className="menu" id={`teacher-${teacher.id}`} key={teacher.id} value={teacher.id} onChange={onClick}>
                                                {teacher.fname + ' ' + teacher.lname}

                                                <Button className="btn-danger menu-2" onClick={openDeleteModal}> Delete </Button>
                                                <Button className="btn-primary menu-2" onClick={openUpdateModal}> View/Update </Button>


                                            </MenuItem>)

                                        })
                                    }

                                </Select>
                            </FormControl>) : " There are no teachers in the database"
                        }
                    </Box>

                    <div className="buttons">
                        <Button variant="primary" onClick={handleOpen} className="btn btn-primary">
                            Add Teacher
                        </Button>
                    </div>



                    {teacherModalShow && <AddTeacherModal handleClose={handleClose}
                        onTeacher={addTeacher} teacherModalShow={teacherModalShow} showAlert={handleOpenAlert} />}
                    {updateModalShow && <UpdateTeacherModal
                        onTeacher={addTeacher} handleClose={closeUpdateModal} showAlert={openUpdateAlert} teacher={teacher}
                        show={updateModalShow}
                    />}


                    {addAlert === true && <Alert key={'success'} variant={'success'} onClose={() => setAddAlert(false)} dismissible>
                        You just added a new teacher to the database.
                    </Alert>}
                    {deleteAlert === true && <Alert key={'info'} variant={'info'}>
                        You just deleted a new teacher
                    </Alert>}
                    {updateAlert === true && <Alert key={'info'} variant={'info'}>
                        You just updated a new teacher
                    </Alert>}
                    {selectedAlert === true && <Alert key={'success'} variant={'success'}>
                        You just selected {teacher.fname + ' ' + teacher.lname}
                    </Alert>}





                    <Modal show={deleteModalShow} onHide={closeDeleteModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure you want to delete {teacher.fname + ' ' + teacher.lname}?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> This action cannot be undone.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeDeleteModal}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => { deleteTeacher(teacher.id); closeDeleteModal(); openDeleteAlert(true); }}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            }
        </div>
    );
}

export default LandingPage;

// <Button className="btn-danger menu-2" onClick={() => { setAId(assessment.id); handleDeleteOpen(); }}> Delete </Button>
// <Button className="btn-primary menu-2" onClick={() => { setAId(assessment.id); handleTestOpen(); }}> View/Update </Button>