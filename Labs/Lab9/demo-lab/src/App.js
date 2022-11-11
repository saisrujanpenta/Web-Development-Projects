
import './App.css';
import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Home from './pages/About';
import Home from './pages/Profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to = '/'>Home</Link> {"   "}
        <Link to = '/about'>About</Link> {"   "}
        <Link to = '/profile'>Profile</Link> {"   "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>

      <h1>Footer</h1>
    </Router>
    );
}

export default App;
