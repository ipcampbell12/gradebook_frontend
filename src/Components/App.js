import Dashboard from "./Dashboard"
import React, { useState } from 'react'


function App() {

  const [studentListState, setStudentListState] = useState([
    {id: 0, fname: "Jose", lname:"La Rue", assessments:[2,1,3,2]},
    {id: 1, fname: "Vern", lname:"Kassandra", assessments:[1,1,0,0]},
    {id: 2, fname: "Sally", lname:"Belinda", assessments:[2,3,3,2]},
    {id: 3, fname: "Yellin", lname:"Sampuhca", assessments:[3,3,3,2]},
  ])

  const [subjectListState, setSubjectListState] = useState([])
  const [assessmentListState, setAssessmentListState] = useState([
      {id: 0, subject: "Math", name:"Module 1"},
      {id: 1, subject: "Math", name:"Module 2"},
      {id: 2, subject: "Math", name:"Module 3"},
      {id: 3, subject: "Math", name:"Module 4"}
  ])

  const [teacherState,setTeacherState]=useState({fname:"Melinda",lname:"Devonshire"})
  
  
  const addStudent = (student) =>{ 
    const id = studentListState.length + 1
    const newStudent = { id, ...student}

    setStudentListState([...studentListState, newStudent])

  }

  const addSubject = (subject) =>{ 
    const id = subjectListState.length + 1
    const newSubject = { id, ...subject}

    setSubjectListState([...subjectListState, newSubject])

  }

  const addAssessment = (assessment) =>{ 
    const id = assessmentListState.length + 1
    const newAssessment = { id, ...assessment}

    setAssessmentListState([...assessmentListState, newAssessment])

  }

  return (
    <div className="App">
      <Dashboard 
        onSubject={addSubject} 
        onStudent={addStudent} 
        onAssessment ={addAssessment} 
        assessments = {assessmentListState} 
        students = {studentListState}
        teacher = {teacherState}
      />
      
    </div>
  );
}

export default App;
