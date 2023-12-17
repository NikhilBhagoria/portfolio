import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import("./components/Home"));
const NavMenu = React.lazy(() => import("./layout/NavMenu"));
function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path='/' element={<Navigate to="/home" replace />} />
        <Route path='/home' name="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
