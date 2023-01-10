// import Signup from "./Signup"
// import Login from "./Login"
// import Dashboard from "./Dashboard"

import Dashboard from "./Dashboard"
import React, { useState } from 'react'


function App() {

  const [studentListState, setStudentListState] = useState([])
  const [subjectListState, setSubjectListState] = useState([])
  const [assessmentListState, setAssessmentListState] = useState([])
  
  
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
      <Dashboard onSubject={addSubject} onStudent={addStudent} onAssessment ={addAssessment} />
      
    </div>
  );
}

export default App;
