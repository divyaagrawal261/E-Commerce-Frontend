import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
<NavBar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
