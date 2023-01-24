import React from 'react';
import AddScores from './AddScores'
import AddAssessment from './AddAssessment';
import Modal from 'react-bootstrap/Modal';

function ScoringModal({ students, module, onAdd, studentsAssessments, onAssessment, onModule, subjects, handleClose, show, teacher }) {

    console.log(module)
    return (
        <Modal show={show} onHide={handleClose} className="student-chart" size="lg">
            <Modal.Body>
                <AddAssessment
                    module={module}
                    subjects={subjects}
                    onModule={onModule} />
                <AddScores
                    module={module}
                    students={students}
                    studentsAssessments={studentsAssessments}
                    onAdd={onAdd}
                    onAssessment={onAssessment}
                    teacher={teacher}

                />
            </Modal.Body>
        </Modal>
    );
}

export default ScoringModal;