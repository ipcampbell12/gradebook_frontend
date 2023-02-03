import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../../APIService';
import Alert from 'react-bootstrap/Alert';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormGroup } from '@mui/material';
import Modal from 'react-bootstrap/Modal';


export default function UpdateTest({ subjects, onAssessment, handleTestClose, aId, setUpdatedTestAlert, updateAssessmentModal, teacher }) {

    //Add default values
    //New assessment Form
    const [name, setName] = useState('')

    //console.log(name)

    const [show, setShow] = useState(false)
    const [subjectId, setSubjectId] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const subject_id = subjectId
        const assessment_id = aId
        const teacher_id = teacher.id

        //send data to API
        APIServce.updateAssessment(assessment_id, { name, subject_id, teacher_id })
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(response => onAssessment(response))

        //send data to UI
        //onAssessment({ name, subjectId, scored })
        setShow(true)

        setName('')

    }

    const onClick = (e) => {
        const value = e.target.value
        setSubjectId(value)

    }


    //console.log(`Module state from AddAssessment is ${moduleState.name}`)

    return (
        <Modal show={updateAssessmentModal} onHide={handleTestClose} className="student-chart" size="lg">
            <Modal.Header>
                <Modal.Title>Update assessment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup className="mb-3" onSubmit={onSubmit}>
                        <Form.Label>Assessment Name</Form.Label>
                        <Form.Control type="text" placeholder="Assessment Name" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </FormGroup>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            onChange={onClick}
                            value={subjects.find(subject => subject.id === subjectId)}
                        >
                            {
                                subjects.map(subject => {

                                    return (<MenuItem className="menu" id={`assessment-${subject.id}`} key={subject.id} value={subject.id} onChange={onClick}>
                                        {subject.name}

                                    </MenuItem>)


                                })

                            }
                        </Select>
                    </FormControl>
                    <Button variant="primary" type="submit" onClick={e => { onSubmit(e); handleTestClose(); setUpdatedTestAlert(true) }}>
                        Update Assessment
                    </Button>
                    {show === true && <Alert key={'success'} variant={'success'}>
                        You just added an assessment to the database.
                    </Alert>}
                </Form>
            </Modal.Body>
        </Modal>
    );
}

