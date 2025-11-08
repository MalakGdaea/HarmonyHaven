import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import { CartProvider } from './context/CartContext'
import Checkout from './pages/Checkout/Checkout'

function App() {

  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/pianos" element={<h1>Piano category</h1>} />
          <Route path="/guitars" element={<h1>Guitar category</h1>} />
          <Route path="/drums" element={<h1>Drum category</h1>} />
          <Route path="/keyboards" element={<h1>Keyboards category</h1>} />
          <Route path="/saxophones" element={<h1>Saxophones category</h1>} />
          <Route path="/trumpets" element={<h1>Trumpets category</h1>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </Router>
  )
}

export default App
