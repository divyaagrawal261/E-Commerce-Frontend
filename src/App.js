import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import DetailPage from './pages/DetailPage';
import ShoppingBag from './pages/ShoppingBag';
import { Products, TShirts, Ties } from './constants';
import { Trousers } from './constants';

function App() {
  return (
    <div className="App">
<NavBar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element={<ProductsPage productsArray={Products}/>}/>
      <Route path="/products/trousers" element={<ProductsPage productCategory={"Trousers"} productsArray={Trousers}/>}/>
      <Route path="/products/shirts" element={<ProductsPage productCategory={"Shirts"} productsArray={TShirts}/>}/>
      <Route path="/products/t-shirts" element={<ProductsPage productCategory={"T-Shirts"} productsArray={TShirts}/>}/>
      <Route path="/products/ties" element={<ProductsPage productCategory={"Ties"} productsArray={Ties}/>}/>
      <Route path="/products/denims" element={<ProductsPage productCategory={"Denims"} productsArray={Trousers}/>}/>
      <Route path="/details/:name" element={<DetailPage/>}/>
      <Route path="/checkout" element={<ShoppingBag/>}/>
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
