import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="App">
<NavBar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/details" element={<DetailPage/>}/>
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
