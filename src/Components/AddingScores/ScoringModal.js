import React, { useState, useEffect } from 'react';
import AddScores from './AddScores'
import AddAssessment from './AddAssessment';
import Modal from 'react-bootstrap/Modal';
//import NetworkCalls from '../../networkCalls';

function ScoringModal({ students, onAdd, studentsAssessments, onAssessment, assessments, subjects, handleClose, show, teacher, setAddShow }) {

    //module state for assessment that was just created
    const [moduleState, setModuleState] = useState('')

    useEffect(() => {
        setModuleState(assessments.find(assessment => assessment.id === Math.max(...assessments.map(o => o.id))))
    }, [assessments])

    //console.log(moduleState)


    return (
        <Modal show={show} onHide={handleClose} className="student-chart" size="lg">
            <Modal.Body>
                <AddAssessment
                    subjects={subjects}
                    onAssessment={onAssessment}
                    moduleState={moduleState}
                    teacher={teacher}
                />
                <AddScores
                    moduleState={moduleState}
                    students={students}
                    studentsAssessments={studentsAssessments}
                    onAdd={onAdd}
                    teacher={teacher}
                    onHide={handleClose}
                    setAddShow={setAddShow}

                />
            </Modal.Body>
        </Modal>
    );
}

export default ScoringModal;