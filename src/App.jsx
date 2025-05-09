import Homepage from "./components/Homepage"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { Link, Routes, Route } from "react-router-dom";
import Projects from "./components/projects/Index";
import Education from "./components/Education";

function App() {

  return (
    <>
      <Navbar></Navbar>


      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/experiences' element={<Experience></Experience>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/education' element={<Education></Education>}></Route>
      </Routes>

    </>
  )
}

export default App
