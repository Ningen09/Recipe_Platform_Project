import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './views/Main';
import { Outlet, Route, Routes } from "react-router-dom";
import Container from './layouts/Container';
import { USER_RECIPE, RECIPE_DETAIL_PATH, USER_WRITING_RECIPE } from 'constant';
import User from 'views/User';

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path='/' element={<Main />} />
        <Route path={RECIPE_DETAIL_PATH(':boardNumber')} element={<Main />} />

        <Route path={USER_RECIPE(':searchEmail')} element={<User />} />
        <Route path={USER_WRITING_RECIPE(':searchEmail')} element={<User />} />

        <Route path='*' element={<h1>404 Not Found</h1>} />
      </ Route> 
    </Routes>
  );
}

export default App;
