import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Footer from './component/Footer/Footer'
import Navbar from './component/Nav/Navbar'
import SignIn from './pages/AuthPages/SignIn'
import Test from './pages/HomePage/Test'
import SignUp from './pages/AuthPages/SignUp'

function AppContent() {
    const location = useLocation()
    const hideNavFooter = location.pathname.startsWith('/Dashboard')
    return (
        <>
            {!hideNavFooter && <Navbar />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Test' element={<Test /> } />
                <Route path='/login' element={<SignIn /> } />
                <Route path='/Signup' element={<SignUp /> } />
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
