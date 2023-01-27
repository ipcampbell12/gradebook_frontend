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


export default function AddAssessment({ subjects, onAssessment, moduleState }) {

    //Add default values
    //New assessment Form
    const [name, setName] = useState('')
    //console.log(name)
    const [scored, setScored] = useState(false)
    const [show, setShow] = useState(false)
    const [subjectId, setSubjectId] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const subject_id = subjectId

        setScored(false)
        //send data to API
        APIServce.addAssessment({ name, subject_id, scored })
            .then(response => console.log(response))
            .catch(error => console.log(error))

        //send data to UI
        onAssessment({ name, subjectId, scored })
        setShow(true)

        setName('')

    }

    const onClick = (e) => {
        const value = e.target.value
        setSubjectId(value)

    }




    return (
        <div>
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
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Create Assessment
                </Button>
                {show === true && <Alert key={'success'} variant={'success'}>
                    You just added an assessment to the database.
                </Alert>}
            </Form>

        </div >
    );
}

