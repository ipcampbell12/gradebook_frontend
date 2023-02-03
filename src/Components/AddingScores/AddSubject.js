import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../../APIService';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';


export default function AddSubject({ subjects, onClose, onSubject, showAddSubject, teacher }) {

    //Add default values
    //New assessment Form
    const [name, setName] = useState('')
    //console.log(name)

    const [show, setShow] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()

        const teacher_id = teacher.id
        //send data to API
        APIServce.addSubject({ teacher_id, name })
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(response => onSubject(response))

        //send data to UI
        //onSubject({ name })

        setName('')

    }


    return (
        <Modal show={showAddSubject} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>Add a new subject</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" onSubmit={onSubmit}>
                        <Form.Label>Subject Name</Form.Label>
                        <Form.Control type="text" placeholder="Subject Name" value={module.name} onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={e => { onSubmit(e); onClose(); setShow(true) }}>
                        Create Subject
                    </Button>
                    <Button variant="secondary" type="submit" onClick={onClose}>
                        Close
                    </Button>
                    {show === true && <Alert key={'success'} variant={'success'}>
                        You just added a subject to the database.
                    </Alert>}
                </Form>
            </Modal.Body>


        </Modal>
    );
}

