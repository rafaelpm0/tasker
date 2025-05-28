import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/header'
import './App.css'
import TypeService from './pages/TypeService'
import Clients from './pages/Client'

function App() {
  return (
    <>
    <Header/>
    <main className="w-[calc(100%-48px)] bg-base-300 pb-4 overflow-w-hidden">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastrar-tipo-servico" element={<TypeService />} />
      <Route path="/cadastrar-cliente" element={<Clients />} />
    </Routes>
    </main>
   
    </>
    
  )
}

export default App

