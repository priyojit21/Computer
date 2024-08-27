import './App.css'
import Courses from './components/Courses'
import Home from './components/Home'
import Stats from './components/Stats'
import Whyus from './components/Whyus'
import Testimonials from './components/Testimonials'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import AboutSection from './components/AboutSection'
import CourseSection from './components/CourseSection'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whyus" element={<Whyus />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/courseSection" element={<CourseSection />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
