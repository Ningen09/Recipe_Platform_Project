import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './views/Main';
import { Outlet, Route, Routes } from "react-router-dom";
import Container from './layouts/Container';
import Search from 'views/Search';
function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path='/search' element={<Search/>} />
        <Route path='/search/:word' element={<Search/>} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </ Route>
    </Routes>
  );
}

export default App;
