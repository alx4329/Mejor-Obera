import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Landing from './containers/Landing';
import PrivateRoute from './components/PrivateRoute';
import Login from './containers/Login/Login';
import LoggedCommerce from './containers/LoggedCommerce/LoggedCommerce';
import Home from './containers/Home/Home';
import CategoryList from './containers/CategoryList/CategoryList';
import CommerceDetail from './containers/CommerceDetail/CommerceDetail';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route path='/private' element={<PrivateRoute/>} >
          <Route exact path='/private/comercio/:commerceId' element={[<LoggedCommerce/>]} />
        </Route>
        
        <Route path='/home' element={<Home/>} />
        <Route path='/:id' element={<CategoryList/>} />
        <Route path='/comercio/:id' element={<CommerceDetail/>} />

      </Routes>
    </Router>
  );
}

export default App;
