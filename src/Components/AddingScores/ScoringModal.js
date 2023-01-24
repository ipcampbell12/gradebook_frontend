import React from 'react';
import AddScores from './AddScores'
import AddAssessment from './AddAssessment';
import Modal from 'react-bootstrap/Modal';

function ScoringModal({ students, module, onAdd, studentsAssessments, onAssessment, onModule, handleClose, show }) {
    return (
        <Modal show={show} onHide={handleClose} className="student-chart" size="lg">
            <Modal.Body>
                <AddAssessment
                    module={module} />
                <AddScores
                    module={module}
                    students={students}
                    studentsAssessments={studentsAssessments}
                    onAdd={onAdd}
                    onAssessment={onAssessment}

                />
            </Modal.Body>
        </Modal>
    );
}

export default ScoringModal;