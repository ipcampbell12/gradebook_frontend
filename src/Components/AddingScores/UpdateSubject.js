import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import APIServce from '../../APIService';
import Modal from 'react-bootstrap/Modal';


export default function UpdateStudents({ onSubject, subjectId, teacher, handleClose, showUpdateSubject, setUpdatedSubjectAlert }) {

    //New Student Form
    const [name, setName] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        const teacher_id = teacher.id
        const id = subjectId

        APIServce.updateStudent(id, { name, teacher_id })
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(response => onSubject(response))

        // onUpdate({ fname, lname }, id)

        handleClose()

    }


    return (
        <Modal show={showUpdateSubject} onHide={handleClose} className="student-chart" size="lg">
            <Modal.Body>
                <Form action="" onSubmit={onSubmit} className="form">

                    <Form.Group className="mb-3">
                        <Form.Label>Subject Name</Form.Label>
                        <Form.Control type="text" placeholder="Subject name" onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={e => { onSubmit(e); handleClose(); setUpdatedSubjectAlert(true) }}>
                        Update Subject
                    </Button>



                </Form>
            </Modal.Body>
        </Modal>
    );
}



