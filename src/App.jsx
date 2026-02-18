import { useState } from 'react'
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import { ContentComponent } from "./components/ContentComponent";
import { MapDemo } from './components/MapDemo';
import { MapDemo2 } from './components/MapDemo2';
import { MapDemo3 } from './components/MapDemo3';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Shows } from './components/Shows';
import { HomeComponent } from './components/HomeComponent';
import { UseStatdemo1 } from './components/UseStatdemo1';
import {FormDemo} from './components/input/FormDemo';
import {FormDemo2} from './components/input/FormDemo2';
import {FormDemo3} from './components/input/FormDemo3';
import {FormDemo4} from './components/input/FormDemo4';
import { Apidemo1 } from './components/api/Apidemo1';
import { ApiTask } from './components/api/ApiTask';
import { ApiTask2 } from './components/api/ApiTask2';
import { ApiTask3 } from './components/api/ApiTask3';
import { OmdbSearch } from './components/api/OmdbSearch';
import { MovieDetail } from './components/api/MovieDetail';




function App() {



  return (
    <>
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/shows" element={<Shows/>}></Route>
        <Route path="/usestate" element={<UseStatdemo1/>}></Route>
        <Route path='/formdemo' element={<FormDemo/>}></Route>
        <Route path='/formdemo2' element={<FormDemo2/>}></Route>
        <Route path='/formdemo3' element={<FormDemo3/>}></Route>
        <Route path='/formdemo4' element={<FormDemo4/>}></Route>
        <Route path='/apidemo1' element={<Apidemo1/>}></Route>
        <Route path='/apitask' element={<ApiTask/>}></Route>
        <Route path='/apitask2' element={<ApiTask2/>}></Route>
        <Route path='/apitask3' element={<ApiTask3/>}></Route>
        <Route path='/omdbsearch' element={<OmdbSearch/>}></Route>
        <Route path='/movie/:id' element={<MovieDetail/>}></Route>
      </Routes>

    </div>

      
    </>
  )
}

export default App;
