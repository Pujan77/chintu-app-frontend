import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddRecord from './pages/AddRecord';
import EditRecord from './pages/EditRecord';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddRecord />} />
                <Route path="/edit/:id" element={<EditRecord />} />
            </Routes>
        </Router>
    );
};

export default App;
