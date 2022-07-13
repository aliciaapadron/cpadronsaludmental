import '../styles/App.scss';
//rutas
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router-dom';

//useState y useEffect
import { useState, useEffect } from 'react';

//componentes
import { Home } from './pages/home';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
