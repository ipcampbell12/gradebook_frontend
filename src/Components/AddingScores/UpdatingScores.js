import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import APIServce from '../../APIService';


function UpdatingScores({ studentsAssessment, updateStudentAssessment }) {

    const [score, setScore] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        const saId = studentsAssessment.id
        // console.log(`Id from child :${saId}`)

        APIServce.updateStudentScore(saId, score)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(response => updateStudentAssessment(response))

        //updateStudentAssessment(score, saId)

        setScore('')
    }
    return (
        <>
            <Form action="" onSubmit={onSubmit} className="form">
                <Form.Group className="mb-1" >
                    <Form.Control type="number" placeholder="" name="score" id={studentsAssessment.id} onChange={(e) => {
                        setScore({ "score": +e.target.value });
                    }} />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit">
                        Edit
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default UpdatingScores;