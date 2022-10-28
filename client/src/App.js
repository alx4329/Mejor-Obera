import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Landing from './containers/Landing';
import PrivateRoute from './components/PrivateRoute';
import Login from './containers/Login/Login';
import LoggedCommerce from './containers/LoggedCommerce/LoggedCommerce';
import Home from './containers/Home/Home';
import CategoryList from './containers/CategoryList/CategoryList';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route path='/private' element={<PrivateRoute/>} >
          <Route exact path='/private/comercio/:commerceId' element={[<LoggedCommerce/>]} />
        </Route>
        
        <Route path='/home' element={[<Navbar/>,<Home/>]} />
        <Route path='/:id' element={[<Navbar/>,<CategoryList/>]} />

      </Routes>
    </Router>
  );
}

export default App;
