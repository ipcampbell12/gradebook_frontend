import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../../APIService';
import Modal from 'react-bootstrap/Modal';


function AddTeacherModal({ handleClose, onTeacher, teacherModalShow, showAlert }) {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    const onSubmit = (e) => {
        e.preventDefault()


        //send data to API
        APIServce.addTeacher({ fname, lname, username, password })
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(response => onTeacher(response))

    }

    return (
        <Modal show={teacherModalShow} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Add a new teacher</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" onSubmit={onSubmit}>
                        <Form.Label>Teacher First Name</Form.Label>
                        <Form.Control type="text" placeholder="First name" value={module.name} onChange={(e) => {
                            setFname(e.target.value)
                        }} />
                        <Form.Label>Teacher Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" value={module.name} onChange={(e) => {
                            setLname(e.target.value)
                        }} />
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" value={module.name} onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Password" value={module.name} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={e => { onSubmit(e); handleClose(); showAlert(true) }}>
                        Create Teacher
                    </Button>
                    <Button variant="secondary" type="submit" onClick={handleClose}>
                        Close
                    </Button>

                </Form>
            </Modal.Body>
        </Modal>

    );
}

export default AddTeacherModal;