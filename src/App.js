import Dashboard from "./Components/Dashboard/Dashboard"
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Components/Dashboard/Navigation"
import EditStudent from "./Components/AddingStudents/EditStudent";
import Grade from "./Components/AddingScores/Grade";
import LandingPage from "./Components/AddTeachers/LandingPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherContextProvider from "./Context/TeacherContext";
import { Helmet } from "react-helmet";




function App() {

  return (
    <div className="App">
      <Helmet>
        <title>Gradebook AE</title>
        <meta name="description" content="Gradebook Application" />
      </Helmet>
      <TeacherContextProvider>
        <Router>

          <Navigation />

          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/student" element={<EditStudent />} />
            <Route path="/grade" exact element={<Grade />} />
          </Routes>


        </Router>
      </TeacherContextProvider>
    </div >
  );
}

export default App;
