import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from './About';
import Jobs from './Jobs';
import Contact from './Contact';



function Home(){
    return(
        <Router>
            <nav>
                <Link to='/home'>Home</Link> {"   "}
                <Link to='/about'>About</Link> {"   "}
                <Link to='/jobs'>Jobs</Link> {"   "}
                <Link to='/contact'>Contact</Link> {"   "}
            </nav>


            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/jobs' element={<Jobs />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </Router>
    )
}

export default Home