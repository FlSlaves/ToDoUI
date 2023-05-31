import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {TaskPages} from "./pages/TaskPages";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TaskPages />} />
            </Routes>
        </Router>
    )
}

export default App;
