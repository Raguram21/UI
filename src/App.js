import logo from './logo.svg';
import png from './nature.jpg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Userprofile from './Userprofile';
import Tablelist from './Tablelist';
import Maps from './Maps';

function App() {
  return (
    <>
    <div className='flex'>
     <div className='hidden md:block fixed w-3/6'>
       <Navbar/>
     </div>
    <div className='w-full md:ml-56 md:min-w-48'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/userprofile' element={<Userprofile/>}/>
      <Route path='/tablelist' element={<Tablelist/>}/>
      <Route path='/typograpy' element={<Userprofile/>}/>
      <Route path='/icons' element={<Userprofile/>}/>
      <Route path='/maps' element={<Maps/>}></Route>
    </Routes>
     </div>
    </div>
    </>

  );
}
export default App;
