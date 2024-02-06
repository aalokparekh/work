
import logo from './logo.svg';
import './App.css';
import Tab from './Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tc from './Tc';
import React,{Fragment, useState} from 'react';
import Ab from './Table1';
import Fg from './Fragment';
import Cos from './Cols';
/* Parent To Child (Start) */
import Child from './Child1';
import Pc from './Purecomponent';
import Memo from './Use_Memo';
import Cr from './Create_ref';
import Ur from './Use_Ref';
import Ls from './LocalStorage';
import Ss from './Session_Storage';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './Router/Home';
import About from './Router/About';
/* Parent To Child (End)*/

function App() {
 /* const [data,setData] = useState("Aalok");

  const UpdateData=()=>
  {
    setData("Messi")
  }
  const data ="aalok";
  function ParentAlert(data)
   {
      alert(data);
   }
 */
  return (
      <div>
      { /*  <BrowserRouter>
         <h1>Router</h1>
         <Link to="Home">Home</Link><br />
         <Link to="About">About</Link>
            <Routes> 
               <Route path='/Home' element={<Home />}>Home</Route>
               <Route path='/About' element={<About />}>About</Route>
            </Routes>
      </BrowserRouter> */}
      </div>
  )
}

export default App;
/* <Child name={ParentAlert}/> (Child ---To---> Parent mate)
<Child name={data} getData={UpdateData}/>
<Pc/>*/