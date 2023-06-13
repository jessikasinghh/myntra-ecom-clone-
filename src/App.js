import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Womensection } from './components/Womensection';

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={< Home/>}/>
      <Route path="/Womensection" element={< Womensection/>}/>
    </Routes>
   </Router>
  );
}

export default App;
