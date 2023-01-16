import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../../APIService';


export default function AddAssessment({ onAdd, onModule }) {

    //Add default values to form inputs???


    //New assessment Form
    const [name, setName] = useState('')
    //const [date, setDate] = useState('')
    const [subject_id, setSubjectId] = useState('')

    const [scored, setScored] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()

        setScored(false)
        //send data to API
        APIServce.addAssessment({ name, subject_id, scored })
            .then(response => console.log(response))
            .catch(error => console.log(error))

        //send data to UI
        onAdd({ name, subject_id, scored })
        onModule(name)


        setName('')
        setSubjectId('')
        // setDate('')
    }


    return (
        <Form action="" onSubmit={onSubmit} className="form">

            <Form.Group className="mb-3">
                <Form.Label>Assessment Name</Form.Label>
                <Form.Control type="text" placeholder="Assessment Name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
            </Form.Group>



            <Form.Group className="mb-3">
                <Form.Label>Subject Id</Form.Label>
                <Form.Control type="number" placeholder="Subject Id" value={subject_id} onChange={(e) => {
                    setSubjectId(e.target.value)
                }} />
            </Form.Group>



            <Button variant="primary" type="submit">
                Add Assessment
            </Button>



        </Form>
    );
}



// <Form.Group className="mb-3">
//                 <Form.Label>Assessment Date</Form.Label>
//                 <Form.Control type="date" placeholder="Assessment Date" value={date} onChange={(e) => {
//                     setDate(e.target.value)
//                 }} />
//             </Form.Group>