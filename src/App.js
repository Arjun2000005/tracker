import React from 'react';
import Login from './Components/Login/loginform.js'; // Corrected import path
import SignForm from './Components/Register/signform.js'; // Corrected import path
import Dashboard from './Components/Dashboard/dashboard.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
