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
    fetchData()
  }, []);

  const fetchData = async () => {
    const results = await fetch('http://127.0.0.1:5001/student')
    const items = await results.json()
    setStudentListState(items)
    //console.log(items)
  }

  const [studentListState, setStudentListState] = useState([

  ])

  const [scoresState, setScoresState] = useState([
    { id: 0, fname: "Jose", lname: "La Rue", score: 2 },
    { id: 1, fname: "Vern", lname: "Kassandra", score: 1 },
    { id: 2, fname: "Sally", lname: "Belinda", score: 3 },
    { id: 3, fname: "Yellin", lname: "Sampuhca", score: 2 },
    { id: 2, fname: "Pradeep", lname: "Ibrahim", score: 3 },
    { id: 3, fname: "Himanshua", lname: "Jadhav", score: 1 },
  ])

  const [subjectListState, setSubjectListState] = useState([])
  const [assessmentListState, setAssessmentListState] = useState([
    { id: 0, subject: "Math", name: "Module 1" },
    { id: 1, subject: "Math", name: "Module 2" },
    { id: 2, subject: "Math", name: "Module 3" },
    { id: 3, subject: "Math", name: "Module 4" }
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
          <Route path="/score" exact element={<Score students={studentListState}
            teacher={teacherState} />} />
          <Route path="/assessment" exact element={<Assessment students={studentListState}
            teacher={teacherState} />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
