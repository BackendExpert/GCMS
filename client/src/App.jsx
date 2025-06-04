import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Footer from './component/Footer/Footer'
import Navbar from './component/Nav/Navbar'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home /> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
