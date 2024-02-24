// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Navbar/>
    <Home/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter> */}
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
