import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import { CartProvider } from './context/CartContext'
import { ProductProvider } from './context/ProductsContext.jsx'
import { CategoriesProvider } from './context/CategoriesContext'
import Checkout from './pages/Checkout/Checkout'
import Collection from './pages/Collection/Collection'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import { AudioProvider } from './context/AudioContext.jsx'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <CategoriesProvider>
          <ProductProvider>
            <AudioProvider>
              <NavBar />
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/:categoryId" element={<Collection />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
              <Footer />
            </AudioProvider>
          </ProductProvider>
        </CategoriesProvider>
      </CartProvider>
    </Router >
  )
}

export default App
