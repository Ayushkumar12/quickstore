import Login from './auth/Login';
import { Routes ,Route} from 'react-router-dom';
import Signup from './auth/Signup';
import Home from './pages/Home';
import './app.css'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
// import { AuthProvider, useAuth } from 'react-auth-kit';


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Products" element={<Shop/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
