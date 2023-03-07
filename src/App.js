
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvide } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvide>
        {/* <h1>Hello World</h1> */}
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />} />

          </Routes>
        </Router>
      </ShopContextProvide>
      
    </div>
  );
}

export default App;
