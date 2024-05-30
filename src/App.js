import './App.css';
import Login from './Login';
import Register from './Register';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Register/>}/>
        <Route path='/login' element={ <Login/>}/>
      </Routes>
     
    </div>
  )
}

export default App;
