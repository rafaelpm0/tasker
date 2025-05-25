import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/header'
import './App.css'
import Client from './pages/Client'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastrar-cliente" element={<Client />} />
    </Routes>
    </>
    
  )
}

export default App

