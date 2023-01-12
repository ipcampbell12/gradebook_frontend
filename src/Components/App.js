import Dashboard from "./Dashboard"
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation"
import Assessment from "./Pages/Assessment";
import Student from "./Pages/Student";
import Score from "./Pages/Score";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  useEffect(() => {
    fetchData('student', setStudentListState)
  }, []);

  useEffect(() => {
    fetchData('assessment', setAssessmentListState)
  }, []);

  const fetchData = async (endpoint, setState) => {
    const results = await fetch(`http://127.0.0.1:5001/${endpoint}`)
    const items = await results.json()
    setState(items)
    //console.log(items)
  }

  const [studentListState, setStudentListState] = useState([

  ])

  const [scoresState, setScoresState] = useState([

  ])

  const [subjectListState, setSubjectListState] = useState([])
  const [assessmentListState, setAssessmentListState] = useState([

  ])

  const [teacherState, setTeacherState] = useState({ fname: "Melinda", lname: "Devonshire" })


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
    const id = assessmentListState.length + 1
    const newAssessment = { id, ...assessment }

    setAssessmentListState([...assessmentListState, newAssessment])

  }

  //console.log(studentListState)
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <Dashboard
              onSubject={addSubject}
              onStudent={addStudent}
              onAssessment={addAssessment}
              assessments={assessmentListState}
              students={studentListState}
              teacher={teacherState}
              scores={scoresState}
            />
          } />
          <Route path="/student" element={<Student students={studentListState}
            teacher={teacherState} onAdd={addStudent} />} />
          <Route path="/grade" exact element={<Score students={studentListState}
            teacher={teacherState} />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
