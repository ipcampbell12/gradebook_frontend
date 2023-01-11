import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddStudent({ onAdd }) {

    //New Student Form
    const [fname, setFirstName] = useState('')
    const [lname, setLastName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        // if (!firstName || !lastName) {
        //     return "Add all fields"
        // }

        onAdd({ fname, lname })

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

            <Button variant="primary" type="submit">
                Add Student
            </Button>



        </Form>
    );
}



// <input id="outlined-basic" placeholder="First Name" className="Form-control" value={fname} onChange={(e) => {
//                 setFirstName(e.target.value)
//             }} />
//             <input id="outlined-basic-2" placeholder="Last Name" className="Form-control" value={lname} onChange={(e) => {
//                 setLastName(e.target.value)
//             }} />
//             <input type="submit" value="Add Student" className="btn btn-primary"></input>