import Dashboard from "./Dashboard"
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation"
import Assessment from "./Pages/Assessment";
import Student from "./Pages/Student";
import Score from "./Pages/Score";


function App() {

  const [studentListState, setStudentListState] = useState([
    { id: 0, fname: "Jose", lname: "La Rue", grade: 3 },
    { id: 1, fname: "Vern", lname: "Kassandra", grade: 2 },
    { id: 2, fname: "Sally", lname: "Belinda", grade: 1 },
    { id: 3, fname: "Yellin", lname: "Sampuhca", grade: 3 },
    { id: 2, fname: "Pradeep", lname: "Ibrahim", grade: 2 },
    { id: 3, fname: "Himanshua", lname: "Jadhav", grade: 3 },
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

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/student" element={<Student />} />
          <Route path="/score" exact element={<Score />} />
          <Route path="/assessment" exact element={<Assessment />} />
        </Routes>
        <Dashboard
          onSubject={addSubject}
          onStudent={addStudent}
          onAssessment={addAssessment}
          assessments={assessmentListState}
          students={studentListState}
          teacher={teacherState}
          scores={scoresState}
        />

      </div>
    </Router>
  );
}

export default App;
