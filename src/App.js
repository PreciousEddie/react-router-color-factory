import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import ColorForm from './ColorForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors/:colorId" element={ <ColorDetail /> } />
          <Route path="/colors/new" element={ <ColorForm /> } />
          <Route path="/colors/*" element={ <ColorList /> } />
          <Route path="/" element={ <Navigate to="/colors" /> } />
          <Route path="*" element={ <Navigate to="/colors" /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
