import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../APIService';

export default function AddStudent({ onAdd }) {

    //New Student Form
    const [fname, setFirstName] = useState('')
    const [lname, setLastName] = useState('')
    const [teacher_id, setTeacherId] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        APIServce.addStudent({ fname, lname, teacher_id })
            .then(response => console.log(response))
            .catch(error => console.log(error))

        onAdd({ fname, lname, teacher_id })

        setFirstName('')
        setLastName('')
    }


    return (
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

            <Form.Group className="mb-3">
                <Form.Label>Teacher Id</Form.Label>
                <Form.Control type="number" placeholder="Teacher Id" value={teacher_id} onChange={(e) => {
                    setTeacherId(e.target.value)
                }} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Student
            </Button>



        </Form>
    );
}



