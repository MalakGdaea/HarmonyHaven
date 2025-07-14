import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>
    </Router>
  )
}

export default App
