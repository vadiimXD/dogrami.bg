import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Catalog from './components/catalog/Catalog'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacts" element={<Contact />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
