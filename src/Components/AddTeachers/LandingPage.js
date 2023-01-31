import React, { useState, useEffect } from 'react';
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


function LandingPage(props) {

    const [teachers, setTeachers] = useState([])

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

                            value={"Choose an assessment"}
                        >
                            {
                                teachers.map(teacher => {

                                    return (<MenuItem className="menu" id={`assessment-${teacher.id}`} key={teacher.id} value={teacher}>
                                        {teacher.fname + ' ' + teacher.lname}



                                    </MenuItem>)


                                })

                            }


                        </Select>
                    </FormControl>
                </Box>
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