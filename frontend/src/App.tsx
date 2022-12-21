import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MoviePage from './pages/MoviePage';
import Favorite from "./pages/Favorite";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={ <HomePage/>}/>
          <Route path={"movie/:id"} element={<MoviePage/>}/>
          <Route path={"movie/:id"} element={<Favorite/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
