import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Footer from './component/Footer/Footer'
import Navbar from './component/Nav/Navbar'

function AppContent() {
    const location = useLocation()
    const hideNavFooter = location.pathname.startsWith('/Dashboard')
    return (
        <>
            {!hideNavFooter && <Navbar />}
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            {!hideNavFooter && <Footer />}
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}

export default App
