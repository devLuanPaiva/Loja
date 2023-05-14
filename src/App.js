import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/login/Login';
import Cadastro from './components/login/Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
