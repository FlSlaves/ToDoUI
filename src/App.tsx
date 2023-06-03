import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {TaskPages} from "./pages/TaskPages";
import {SignupPage} from './pages/Signup';
import {LoginPage} from './pages/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/ToDo" element={<TaskPages />} />
            </Routes>
        </Router>
    )
}

export default App;
