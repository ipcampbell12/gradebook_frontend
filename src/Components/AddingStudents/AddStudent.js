import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../../APIService';
import Modal from 'react-bootstrap/Modal';

export default function AddStudent({ onAdd, teacher, addModalShow, handleAddClose, setAddedAlert }) {

    //New Student Form
    const [fname, setFirstName] = useState('')
    const [lname, setLastName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const teacher_id = teacher.id

        APIServce.addStudent({ fname, lname, teacher_id })
            .then(response => console.log(response))
            .catch(error => console.log(error))

        onAdd({ fname, lname, teacher_id })

        setFirstName('')
        setLastName('')

    }

    //console.log(`addModalShow is ${addModalShow}`)

    return (
        <Modal show={addModalShow} onHide={handleAddClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form action="" onSubmit={onSubmit} className="form">

                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" value={fname} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" value={lname} onChange={(e) => {
                            setLastName(e.target.value)
                        }} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={e => { onSubmit(e); handleAddClose(); setAddedAlert(true) }}>
                        Add Student
                    </Button>

                </Form>
            </Modal.Body>
        </Modal>
    );
}



