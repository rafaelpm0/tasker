import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/header'
import './App.css'
import TypeService from './pages/TypeService'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tipo-servico" element={<TypeService />} />
    </Routes>
    </>
    
  )
}

export default App

