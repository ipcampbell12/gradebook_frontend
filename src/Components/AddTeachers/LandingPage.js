import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import APIServce from '../../APIService';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import NetworkCalls from '../../networkCalls';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import AddTeacherModal from './AddTeacherModal';
import { TeacherContext } from '../../Context/TeacherContext'


function LandingPage(props) {

    const [teachers, setTeachers] = useState([])

    const { selectTeacher } = useContext(TeacherContext)
    const { teacher } = useContext(TeacherContext)

    //const [teacherId, setTeacherId] = useState('')


    const [teacherModalShow, setTeacherModalShow] = useState(false)
    const handleClose = () => setTeacherModalShow(false)
    const handleOpen = () => setTeacherModalShow(true)


    const [addAlert, setAddAlert] = useState(false)
    const handleOpenAlert = () => setAddAlert(true)
    const handleCloseAlert = () => setAddAlert(false)

    useEffect(() => {
        NetworkCalls.fetchAllTeachers().then(response => setTeachers(response))
    }, [])

    useEffect(() => {
        setTimeout(() => handleCloseAlert(), 4000)
    })

    const addTeacher = () => {
        NetworkCalls.fetchAllTeachers().then(response => setTeachers(response))

    }

    const onClick = (e) => {
        const value = e.target.value
        //setTeacherId(value)
        console.log(value)
        selectTeacher(value)
        // console.log(teacherId)
    }


    return (
        <div className="student-page2">
            <Typography variant="h4" align="center"> Select or Create New Teacher </Typography>
            <div className="menu" >

                <Box sx={{ minWidth: 120 }}>
                    <Typography variant="h6" align="center"> Select a Teacher </Typography>
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



                                    </MenuItem>)


                                })

                            }


                        </Select>
                    </FormControl>
                </Box>
                <Typography variant="h5" align="center"> {teacher && `Current Teacher: ${teacher.fname + ' ' + teacher.lname}`}</Typography>
                <div className="buttons">
                    <Button variant="primary" onClick={handleOpen} className="btn btn-primary">
                        Add Teacher
                    </Button>
                </div>

                {teacherModalShow && <AddTeacherModal handleClose={handleClose}
                    onTeacher={addTeacher} teacherModalShow={teacherModalShow} showAlert={handleOpenAlert} />}
                {addAlert === true && <Alert key={'success'} variant={'success'}>
                    You just added a new teacher to the database.
                </Alert>}
            </div>
        </div>
    );
}

export default LandingPage;

// <Button className="btn-danger menu-2" onClick={() => { setAId(assessment.id); handleDeleteOpen(); }}> Delete </Button>
// <Button className="btn-primary menu-2" onClick={() => { setAId(assessment.id); handleTestOpen(); }}> View/Update </Button>