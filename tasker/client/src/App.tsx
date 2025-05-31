import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/header'
import './App.css'
import TypeService from './pages/TypeService'
import Clients from './pages/Client'
import Services from './pages/Service'
import BreadCrumb from './components/ui/breadCrumb'

function App() {
  return (
    <>
    <Header/>
    <main className="flex flex-col w-[calc(100%-48px)] min-h-screen bg-base-300 overflow-w-hidden ">
    <BreadCrumb />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastrar-tipo-servico" element={<TypeService />} />
      <Route path="/cadastrar-cliente" element={<Clients />} />
       <Route path="/servicos-agendados" element={<Services />} />
    </Routes>
    </main>
   
    </>
    
  )
}

export default App

