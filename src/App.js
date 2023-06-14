import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Womensection } from './components/Womensection';
import { LoginPage } from './components/LoginPage';

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={< Home/>}/>
      <Route path="/Womensection" element={< Womensection/>}/>
      <Route path="/Loginpage" element={<LoginPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
