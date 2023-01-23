import Dashboard from "./Components/Dashboard/Dashboard"
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Components/Dashboard/Navigation"
import EditStudent from "./Components/AddingStudents/EditStudent";
import Grade from "./Components/AddingScores/Grade";
import 'bootstrap/dist/css/bootstrap.min.css';
import NetworkCalls from "./networkCalls";



function App() {

  //API GET FUNCTIONALITY
  //Run API call inside useEffect hook = mimics componentDidMount (class components)



  //TOP LEVEL STATES
  const [studentListState, setStudentListState] = useState([])

  const [studentsAssessments, setStudentsAssessments] = useState([])

  const [subjectListState, setSubjectListState] = useState([])

  const [assessments, setAssessments] = useState([])

  const [grades, setGrades] = useState([])

  const [teacherState, setTeacherState] = useState({ fname: "Melinda", lname: "Devonshire" })

  //-----------------------------------------------------------------------------------------------------------------------

  //teacher
  useEffect(() => {
    NetworkCalls.fetchTeacher(1).then(data => setTeacherState(data))
  }, []);

  //students
  useEffect(() => {
    NetworkCalls.fetchTeachersStudents(1).then(data => setStudentListState(data))
  }, []);

  //assessments
  useEffect(() => {
    NetworkCalls.fetchAssessments.then(data => setAssessments(data))
  }, []);

  //studentsAssessments
  useEffect(() => {
    NetworkCalls.fetchStudentsAssessments.then(data => setStudentsAssessments(data))
  }, []);

  //grades
  useEffect(() => {
    NetworkCalls.fetchGrades.then(data => setGrades(data))
  }, []);


  //move to dashboard
  const [moduleState, setModuleState] = useState('')

  //-----------------------------------------------------------------------------------------------------------------------

  //ADD DATA FUNCTIONALITY
  const addStudent = (student) => {
    const id = studentListState.length + 1
    const newStudent = { id, ...student }

    setStudentListState([...studentListState, newStudent])

  }

  const addSubject = (subject) => {
    const id = subjectListState.length + 1
    const newSubject = { id, ...subject }

    setSubjectListState([...subjectListState, newSubject])

  }

  const addAssessment = (assessment) => {
    const id = (assessments.length) + 1
    const newAssessment = { id, ...assessment }

    setAssessments([...assessments, newAssessment])
  }


  const addStudentsAssessments = (studentAssessment) => {

    setStudentsAssessments(...studentsAssessments, studentAssessment)
  }

  const deleteAssessment = (id) => {
    console.log(id)
    setAssessments(assessments.filter((item) => item.id !== id))
  }

  //-----------------------------------------------------------------------------------------------------------------------


  //console.log(averageGrade)
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <Dashboard
              onSubject={addSubject}
              onStudent={addStudent}
              assessments={assessments}
              students={studentListState}
              teacher={teacherState}
              studentsAssessments={studentsAssessments}
              grades={grades}
              onModule={setModuleState}
              moduleState={moduleState}



            />
          } />
          <Route path="/student" element={<EditStudent students={studentListState}
            teacher={teacherState} onAdd={addStudent}
          />} />
          <Route path="/grade" exact element={<Grade
            students={studentListState}
            teacher={teacherState}
            assessments={assessments}
            onAssessment={addAssessment}
            studentsAssessments={studentsAssessments}
            onAdd={addStudentsAssessments}
            subjects={subjectListState}
            onDelete={deleteAssessment}
          />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
