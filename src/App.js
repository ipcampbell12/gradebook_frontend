import Dashboard from "./Components/Dashboard/Dashboard"
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Components/Dashboard/Navigation"
import EditStudent from "./Components/AddingStudents/EditStudent";
import Grade from "./Components/AddingScores/Grade";
import LandingPage from "./Components/AddTeachers/LandingPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherContextProvider from "./Context/TeacherContext";



function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <TeacherContextProvider>
          <Routes>
            <Route path="/changeteacher" element={<LandingPage />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/student" element={<EditStudent />} />
            <Route path="/grade" exact element={<Grade />} />
          </Routes>
        </TeacherContextProvider>
      </div>
    </Router>
  );
}

export default App;
