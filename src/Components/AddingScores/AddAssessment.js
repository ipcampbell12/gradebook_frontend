import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../../APIService';
import Alert from 'react-bootstrap/Alert';


export default function AddAssessment({ subjects, onAssessment, moduleState }) {

    //Add default values
    //New assessment Form
    const [name, setName] = useState('')
    //console.log(name)
    const [scored, setScored] = useState(false)
    const [show, setShow] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()


        const subject = subjects.find(subject => subject.id === 1)

        const subject_id = subject.id

        setScored(false)
        //send data to API
        APIServce.addAssessment({ name, subject_id, scored })
            .then(response => console.log(response))
            .catch(error => console.log(error))

        //send data to UI
        onAssessment({ name, subject_id, scored })
        setShow(true)

        setName('')

    }

    //This mostly works but assessments are not added to dropdown menu right away

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" onSubmit={onSubmit}>
                    <Form.Label>Assessment Name</Form.Label>
                    <Form.Control type="text" placeholder="Assessment Name" value={module.name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Create Assessment
                </Button>
                {show === true && <Alert key={'success'} variant={'success'}>
                    You just added an assessment to the database.
                </Alert>}
            </Form>

        </div>
    );
}



// <Form.Group className="mb-3">
//                 <Form.Label>Assessment Date</Form.Label>
//                 <Form.Control type="date" placeholder="Assessment Date" value={date} onChange={(e) => {
//                     setDate(e.target.value)
//                 }} />
//             </Form.Group>


// <Form.Group className="mb-3">
// <Form.Label>Assessment Name</Form.Label>
// <Form.Control type="text" placeholder="Assessment Name" value={name} onChange={(e) => {
//     setName(e.target.value)
// }} />
// </Form.Group>