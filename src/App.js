//import Dashboard from "./Components/Dashboard/Dashboard"
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Components/Dashboard/Navigation"
//import EditStudent from "./Components/AddingStudents/EditStudent";
//import Grade from "./Components/AddingScores/Grade";
import LandingPage from "./Components/AddTeachers/LandingPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherContextProvider from "./Context/TeacherContext";
import { Helmet } from "react-helmet";

const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard'))
const EditStudent = lazy(() => import('./Components/AddingStudents/EditStudent'))
const Grade = lazy(() => import('./Components/AddingScores/Grade'))

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

            <Route path="/dashboard" exact element={<Suspense fallback={<p>Loading . . .</p>}><Dashboard /></Suspense>} />
            <Route path="/student" element={<Suspense fallback={<p>Loading . . .</p>}><EditStudent /></Suspense>} />
            <Route path="/grade" exact element={<Suspense fallback={<p>Loading . . .</p>}><Grade /></Suspense>} />
          </Routes>


        </Router>
      </TeacherContextProvider>
    </div >
  );
}

export default App;
