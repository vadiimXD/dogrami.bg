import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
          
        </>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
