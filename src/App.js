import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Register/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/dashboard' element={ <Dashboard/>}/>
      </Routes>
     
    </div>
  )
}

export default App;
