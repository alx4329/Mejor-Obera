
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Participate from './containers/Participate';
import Home from './containers/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/participate' element={<Participate/>} />
      </Routes>
    </Router>
  );
}

export default App;
