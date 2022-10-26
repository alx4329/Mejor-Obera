import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Participate from './containers/Participate';
import Home from './containers/Home';
import PrivateRoute from './components/PrivateRoute';
import Login from './containers/Login/Login';
import LoggedCommerce from './containers/LoggedCommerce/LoggedCommerce';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route path='/private' element={<PrivateRoute/>} >
          <Route exact path='/private/comercio/:commerceId' element={[<LoggedCommerce/>]} />
        </Route>
        <Route path='/participate' element={<Participate/>} />
      </Routes>
    </Router>
  );
}

export default App;
