import { Outlet } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar.jsx'
import './index.css'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
    <Navbar />
    <main className="min-h-screen max-w-screen-2xl mx-auto px-8 md:px-16 py-6 font-primary">
        <Outlet />
    </main>
     <Footer/>
     
    </>
  )
}

export default App
