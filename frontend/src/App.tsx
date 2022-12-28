import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MoviePage from './pages/MoviePage';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={ <HomePage/>}/>
          <Route path={"movie/:id"} element={<MoviePage/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
