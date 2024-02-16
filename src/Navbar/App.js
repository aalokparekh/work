import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NV from './Navbar';
import Home from './home';
import About from './About';
import Team from './Team';
import NotFound from './Page404';

export  default function App(){
   return(
   <div className='App'>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<NV />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Team' element={<Team />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
         </Routes>
      </BrowserRouter>
   </div>
   )
}