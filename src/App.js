import Login from './auth/Login';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Signup from './auth/Signup';
import Home from './pages/Home';
import { AuthProvider, useAuth } from 'react-auth-kit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
