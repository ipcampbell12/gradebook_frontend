import Dashboard from "./Components/Dashboard/Dashboard"
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Components/Dashboard/Navigation"
import EditStudent from "./Components/AddingStudents/EditStudent";
import Grade from "./Components/AddingScores/Grade";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  //API GET FUNCTIONALITY
  //Run API call inside useEffect hook = mimics componentDidMount (class components)

  const [moduleState, setModuleState] = useState('')

  useEffect(() => {
    fetchTeacher('teacherstudents', setStudentListState, 1)
  }, []);

  useEffect(() => {
    fetchData('assessment', setAssessments)
  }, []);

  useEffect(() => {
    fetchTeacher('teacher', setTeacherState, 1)
  }, []);

  useEffect(() => {
    fetchData('student_assessment', setStudentsAssessments)
  }, []);

  useEffect(() => {
    fetchData('subject', setSubjectListState)
  }, []);

  useEffect(() => {
    fetchGrades('grade', setGrades, 1)
  }, []);

  useEffect(() => {
    fetchGrades('averagegrade', setAverageGrade, 1)
  }, []);

  useEffect(() => {
    fetchTeacher('scoresbytest', setAverageModuleScore, moduleState.id)
  }, [moduleState.id]);




  //API Calls
  const fetchData = async (endpoint, setState) => {
    const results = await fetch(`http://127.0.0.1:5001/${endpoint}`)
    const items = await results.json()
    setState(items)
    //console.log(items)
  }

  const fetchTeacher = async (endpoint, setState, id) => {
    const results = await fetch(`http://127.0.0.1:5001/${endpoint}/${id}`)
    const items = await results.json()
    setState(items)
    //console.log(items)
  }

  const fetchGrades = async (endpoint, setState, id) => {
    const results = await fetch(`http://127.0.0.1:5001/teacherstudents/${id}/${endpoint}`)
    const items = await results.json()
    setState(items)
  }






  //-----------------------------------------------------------------------------------------------------------------------

  //TOP LEVEL STATES
  const [studentListState, setStudentListState] = useState([])

  const [studentsAssessments, setStudentsAssessments] = useState([])

  const [subjectListState, setSubjectListState] = useState([])

  const [assessments, setAssessments] = useState([])

  const [grades, setGrades] = useState([])

  const [averageGrade, setAverageGrade] = useState('')

  const [averageModuleScore, setAverageModuleScore] = useState('')

  const [teacherState, setTeacherState] = useState({ fname: "Melinda", lname: "Devonshire" })



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
              averageGrade={averageGrade}
              onModule={setModuleState}
              moduleState={moduleState}
              averageModuleScore={averageModuleScore}


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
