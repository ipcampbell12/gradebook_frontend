import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../APIService';
import { DateTime } from 'luxon'

export default function AddAssessment({ onAdd }) {

    //New Student Form
    const [date, setDate] = useState('')
    const [name, setName] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        const now = DateTime.now();
        setDate(now)

        APIServce.AddAssessment({ name, date })
            .then(response => console.log(response))
            .catch(error => console.log(error))

        onAdd({ name, date })


        setName('')
    }


    return (
        <Form action="" onSubmit={onSubmit} className="form">

            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Student
            </Button>



        </Form>
    );
}



