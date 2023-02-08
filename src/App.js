import './App.css';
import {Route , Routes , Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Navigate to='signup'/>} />
      </Routes>
    </div>
  );
}

export default App;
