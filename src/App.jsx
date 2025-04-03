
import Content from './components/Content/Content'
import About from './components/Aboutme/AboutMe'
import Contact from './components/Contacts/Contact';
import Header from './components/Header/Header';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Reviews from './components/Reviews/Reviews';


function App() {

  return (
    <>
      <Header />
      <Routes>
    
      <Route path='/' element={<Content/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/reviews' element={<Reviews/>} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
    </>
    
  )
}

export default App
