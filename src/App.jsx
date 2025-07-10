
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Products from './Components/Products';



function App() {
  return (
   
   <>
     <Router>
           <Routes>
            <nav>
              <ul>
                <li><Link>HOME</Link></li>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/login"}>LOGIN</Link></li>
                <li><Link to={"/products"}>PRODUCTS</Link></li>
              </ul>
            </nav>
             <Route path='/' element={<Home/>} />
             <Route path="/login" element={<Login/>}/>
             <Route path="/products" element={<Products />}/>
           </Routes>
         </Router>
   </>
  );
}

export default App;
