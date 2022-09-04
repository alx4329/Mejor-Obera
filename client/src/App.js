
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Participate from './containers/Participate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/participar' element={<Participate/>} />
      </Routes>
    </Router>
  );
}

export default App;
