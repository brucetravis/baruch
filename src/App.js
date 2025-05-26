import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import ScrollToTop from './components/common/scrolltotop/ScrollToTop';
import Products from './pages/products/Products';
import Orders from './pages/orders/Orders';
import Faqs from './pages/faqs/Faqs'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/faqs' element={<Faqs/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </div>
  );
}

export default App;
