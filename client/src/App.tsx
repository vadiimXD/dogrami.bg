import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <header>heeader</header>
      <Routes>
        <Route path="/" element={<h1>home</h1>}></Route>
      </Routes>
      <footer>footer</footer>

    </>
  )
}

export default App
