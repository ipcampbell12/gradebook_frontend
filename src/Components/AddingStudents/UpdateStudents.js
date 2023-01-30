import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../../APIService';
import Modal from 'react-bootstrap/Modal';


export default function UpdateStudents({ teacher, show, handleClose, onUpdate, id, setUpdateAlert }) {

    //New Student Form
    const [fname, setFirstName] = useState('')
    const [lname, setLastName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const teacher_id = teacher.id

        APIServce.updateStudent(id, { fname, lname, teacher_id })
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(response => onUpdate(response))

        // onUpdate({ fname, lname }, id)

        handleClose()

    }


    return (
        <Modal show={show} onHide={handleClose} className="student-chart" size="lg">
            <Modal.Body>
                <Form action="" onSubmit={onSubmit} className="form">

                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" onChange={(e) => {
                            setLastName(e.target.value)
                        }} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={e => { onSubmit(e); handleClose(); setUpdateAlert(true) }}>
                        Update Student
                    </Button>



                </Form>
            </Modal.Body>
        </Modal>
    );
}



