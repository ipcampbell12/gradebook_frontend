import React, { useState, useEffect, useContext } from 'react';
import { Typography } from "@mui/material"
import NetworkCalls from '../../networkCalls';
// import UpdateState from '../../updateState';
import TestMenu from './TestMenu'
import APIServce from '../../APIService';
import ScoredChart from './ScoredChart';
import Button from 'react-bootstrap/Button';
import ScoringModal from './ScoringModal';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import AddSubject from './AddSubject';
import UpdateTest from './UpdateTest';
import { TeacherContext } from '../../Context/TeacherContext'
import SubjectMenu from './GSubjectMenu';
import UpdateSubject from './UpdateSubject';




// import Button from 'react-bootstrap/Button';




//1. Click on module, then set module state to that module's name 


function Grade(props) {



    //Module state for scored module that was just selected
    const [moduleState, setModuleState] = useState('')
    const [currentSubject, setCurrentSubject] = useState('')
    //console.log(moduleState)
    const [show, setShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [addShow, setAddShow] = useState(false);
    const [updatedTestAlert, setUpdatedTestAlert] = useState(false);
    const [updatedSubjectAlert, setUpdatedSubjectAlert] = useState(false);
    const [deletedSubjectAlert, setDeletedSubjectAlert] = useState(false);
    const [createdSubjectAlert, setCreatedSubjectAlert] = useState(false);

    const [missingPiecesAlert, setMissingPiecesAlert] = useState(false);

    const handleClose = () => setShow(false);



    useEffect(() => {
        setTimeout(() => setDeleteShow(false), 4000)
    });

    useEffect(() => {
        setTimeout(() => setAddShow(false), 3000)
    });

    useEffect(() => {
        setTimeout(() => setUpdatedTestAlert(false), 3000)
    });

    useEffect(() => {
        setTimeout(() => setUpdatedSubjectAlert(false), 3000)
    });

    useEffect(() => {
        setTimeout(() => setDeletedSubjectAlert(false), 3000)
    });

    useEffect(() => {
        setTimeout(() => setCreatedSubjectAlert(false), 3000)
    });
    useEffect(() => {
        setTimeout(() => setMissingPiecesAlert(false), 3000)
    });


    //TOPLEVEL STATE -----------------------------------------------------

    const [studentListState, setStudentListState] = useState([])

    const [studentsAssessments, setStudentsAssessments] = useState([])

    const [subjectListState, setSubjectListState] = useState([])

    const [assessments, setAssessments] = useState([])

    const { teacher } = useContext(TeacherContext)

    // const handleShow = () => subjectListState.length !== 0 ? setShow(true) : setMissingPiecesAlert(true);


    const handleShow = () => {
        if (subjectListState.length === 0 || studentListState.length === 0) {
            setMissingPiecesAlert(true)
        } else {
            setShow(true)
        }

    }

    const reset = () => {
        setModuleState('')
        setCurrentSubject('')
    }

    // ------------------------------------------------------------------

    //console.log(assessments)
    //NETWORK CALLS -----------------------------------------------------------------

    //teacher
    // useEffect(() => {
    //     NetworkCalls.fetchTeacher(1).then(data => setTeacherState(data))
    // }, []);

    useEffect(() => {
        NetworkCalls.fetchTeachersStudents(teacher.id).then(data => setStudentListState(data))
    }, [teacher.id]);

    // assessments
    useEffect(() => {
        NetworkCalls.fetchAssessments(teacher.id).then(data => setAssessments(data))
    }, [teacher.id]);

    //studentsAssessments
    useEffect(() => {
        NetworkCalls.fetchStudentsAssessments(teacher.id).then(data => setStudentsAssessments(data))
    }, [teacher.id]);

    //subjects
    useEffect(() => {
        NetworkCalls.fetchSubjects(teacher.id).then(data => setSubjectListState(data))
    }, [teacher.id]);
    // ------------------------------------------------------------------------------

    //console.log(subjectListState)


    //DELETE ASSESSMENT MODAL -----------------------------------------------------------------
    const [aId, setAId] = useState('');

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const handleDeleteOpen = () => setDeleteModalShow(true)
    const handleDeleteClose = () => setDeleteModalShow(false)

    // ------------------------------------------------------------------------------

    //SUBJECT MODAL -----------------------------------------------------------------
    const [showAddSubject, setShowAddSubject] = useState(false)

    const handleSubjectOpen = () => setShowAddSubject(true)
    const handleSubjectClose = () => setShowAddSubject(false)


    // --------------------------------------------------------------------------------

    //UPDATE SUBJECT MODAL -----------------------------------------------------------------
    const [subjectId, setSubjectId] = useState('');

    const [showUpdateSubject, setShowUpdateSubject] = useState(false)

    const handleSubjectUpdateOpen = () => setShowUpdateSubject(true)
    const handleSubjectUpdateClose = () => setShowUpdateSubject(false)

    // --------------------------------------------------------------------------------

    //DELETE SUBJECT MODAL -----------------------------------------------------------------


    const [showDeleteSubject, setShowDeleteSubject] = useState(false)

    const handleSubjectDeleteOpen = () => setShowDeleteSubject(true)
    const handleSubjectDeleteClose = () => setShowDeleteSubject(false)

    // --------------------------------------------------------------------------------

    //UPDATE ASSESSMENT MODAL -----------------------------------------------------------------


    const [updateAssessmentModal, setUpdateAssessmentModal] = useState(false)

    const handleTestOpen = () => setUpdateAssessmentModal(true)
    const handleTestClose = () => setUpdateAssessmentModal(false)

    // --------------------------------------------------------------------------------


    //UPDATE STATE -----------------------------------------------------------------
    const addSubject = () => {

        // const id = subjectListState.length === 0 ? 1 : Math.max(...subjectListState.map(o => o.id)) + 1
        // const newSubject = { id, ...subject }
        NetworkCalls.fetchSubjects(teacher.id).then(data => setSubjectListState(data))
        // setSubjectListState([...subjectListState, newSubject])

    }


    const addAssessment = () => {
        //This works except when there are no assessments 

        NetworkCalls.fetchAssessments(teacher.id).then(data => setAssessments(data))
        // const id = assessments.length === 0 ? 1 : Math.max(...assessments.map(o => o.id)) + 1
        // console.log(`The assessment id in Grade is ${id}`)
        // const newAssessment = { id, ...assessment }
        // //  console.log(`The assessment ${newAssessment.id} was just created`)
        // setAssessments([...assessments, newAssessment])
    }



    const addStudentsAssessments = () => {

        NetworkCalls.fetchStudentsAssessments(teacher.id).then(data => setStudentsAssessments(data))

        // console.log(studentsAssessments)

        // setStudentsAssessments(...studentsAssessments, studentAssessmentArray)
    }

    const updateStudentAssessment = () => {


        NetworkCalls.fetchStudentsAssessments(teacher.id).then(data => setStudentsAssessments(data))

        //console.log(`Id sent from scoredcharts :${id}`)
        // const updatedItem = studentsAssessments.find(sa => sa.id === id)
        // //console.log(updatedItem)
        // deleteAssessment(id)

        // //console.log(`Id from updated item: ${updatedItem.id}`)

        // updatedItem.score = data["score"]
        //setStudentsAssessments([...studentsAssessments, updatedItem])

    }

    const onDeleteSubject = () => {

        NetworkCalls.fetchSubjects(teacher.id).then(data => setSubjectListState(data))

    }

    const onDelete = () => {

        NetworkCalls.fetchAssessments(teacher.id).then(data => setAssessments(data))
        // console.log(`The assessment delted was ${id}`)
        // setAssessments(assessments.filter((item) => item.id !== id))
    }

    const updateAssessment = () => {
        NetworkCalls.fetchAssessments(teacher.id).then(data => setAssessments(data))

    }

    // --------------------------------------------------------------------------------

    const deleteAssessment = (assessment_id) => {

        const teacher_id = teacher.id

        APIServce.deleteAssessment(teacher_id, assessment_id)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(response => onDelete(response))


        // onDelete(assessment_id)

        setDeleteShow(true)
        setModuleState('')

    }

    const deleteSubject = (subject_id) => {

        // const teacher_id = teacher.id

        APIServce.deleteSubject(subject_id)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(response => onDeleteSubject(response))


        // onDelete(assessment_id)

        // setDeleteShow(true)
        setCurrentSubject('')

    }

    //console.log(`Module state from Grade is ${moduleState.name}`)


    return (
        <div className="student-page2" >

            <Typography variant="h4" align="center"> {teacher.fname + ' ' + teacher.lname + '\'s Grades'}</Typography>

            <div className="menu" >

                <div className="menus">
                    <SubjectMenu subjects={subjectListState} currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} handleSubjectUpdateOpen={handleSubjectUpdateOpen} handleSubjectUpdateClose={handleSubjectUpdateClose} setSubjectId={setSubjectId} handleSubjectDeleteOpen={handleSubjectDeleteOpen} setModuleState={setModuleState} moduleState={moduleState} />

                    <TestMenu assessments={assessments} onModule={setModuleState} testDelete={deleteAssessment} setAId={setAId} handleDeleteOpen={handleDeleteOpen} handleTestOpen={handleTestOpen} currentSubject={currentSubject} moduleState={moduleState} />
                </div>

                <div className="buttons">
                    <Button variant="primary" type="submit" onClick={handleShow} className="btn btn-primary">
                        Add Assessment
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleSubjectOpen} className="btn btn-primary">
                        Add Subject
                    </Button>
                    <Button variant="primary" type="submit" onClick={reset} className="btn btn-primary">
                        Reset
                    </Button>
                </div>

                {showAddSubject && <AddSubject onClose={handleSubjectClose} onSubject={addSubject} showAddSubject={showAddSubject} teacher={teacher} showAlert={setCreatedSubjectAlert} />}

                {show && <ScoringModal
                    students={studentListState}
                    teacher={teacher}
                    onAdd={addStudentsAssessments}
                    studentsAssessments={studentsAssessments}
                    handleClose={handleClose}
                    show={show}
                    assessments={assessments}
                    onAssessment={addAssessment}
                    subjects={subjectListState}
                    setAddShow={setAddShow} />}
            </div>

            <div className="assessment-chart">

                <ScoredChart studentsAssessments={studentsAssessments} moduleState={moduleState} show={show} updateStudentAssessment={updateStudentAssessment} teacher={teacher} />
            </div>

            {deleteShow === true && <Alert key={'danger'} variant={'danger'}>
                You just removed {moduleState.name} from the database.
            </Alert>}

            {addShow === true && <Alert key={'success'} variant={'success'}>
                Scores have been added to the database.
            </Alert>}

            {updatedTestAlert && <Alert key={'info'} variant={'info'}>
                This assessment has been updated
            </Alert>
            }

            {updatedSubjectAlert && <Alert key={'info'} variant={'info'}>
                This subject has been updated
            </Alert>
            }

            {deletedSubjectAlert && <Alert key={'success'} variant={'success'}>
                This subject has been deleted
            </Alert>
            }

            {createdSubjectAlert && <Alert key={'success'} variant={'success'}>
                A new subject has been created
            </Alert>
            }
            {missingPiecesAlert && <Alert key={'danger'} variant={'danger'}> You need to add students and subjects before you can add any assessments </Alert>
            }



            {updateAssessmentModal && <UpdateTest aId={aId} handleTestClose={handleTestClose} handleTestOpen={handleTestOpen} onAssessment={updateAssessment} setUpdatedTestAlert={setUpdatedTestAlert} subjects={subjectListState} updateAssessmentModal={updateAssessmentModal} teacher={teacher} />}

            {showUpdateSubject && <UpdateSubject handleClose={handleSubjectUpdateClose} onSubject={addSubject} subjectId={subjectId} showUpdateSubject={showUpdateSubject} setUpdatedSubjectAlert={setUpdatedSubjectAlert} teacher={teacher} />}

            <Modal show={deleteModalShow} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete this assessment?</Modal.Title>
                </Modal.Header>
                <Modal.Body> This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { deleteAssessment(aId); handleDeleteClose(); setDeleteShow(true); }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDeleteSubject} onHide={handleSubjectDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete this assessment?</Modal.Title>
                </Modal.Header>
                <Modal.Body> This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { deleteSubject(subjectId); handleSubjectDeleteClose(); setDeletedSubjectAlert(true); }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

    );

}

export default Grade;



// <div className="form">
//     <AddAssessment onAdd={onAssessment} onModule={setModuleState} module={moduleState} subjects={subjects} />

// </div>

// <AddScores students={students} module={moduleState} teacher={teacher} onAdd={onAdd} studentsAssessments={studentsAssessments} onModule={setModuleState} />