import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import Admission from './components/Admission';
import Users from './components/Users';
// import Student from './components/Student';
// import StudentProfile from './components/Profile';
// import StudentData from './components/StudentData';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Admission" element={<Admission />} />
          <Route path="Users" element={<Users />} />
        </Route>
        {/* <Route path='/' element={<Student />}>
          <Route path='/StudentProfile' element={<StudentProfile StudentData={StudentData} />} />
        </Route> */}
        {/* <Route path='/' element={<StudentProfile />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
