import Navbar from "./components/Nav";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
  <>
      <Navbar/>
      <div className="container"> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div> 
  </>
  )
}
/* function App() {
  let component:JSX.Element
  switch(window.location.pathname) {
    case "/":
    break;
      case "/Home":
      component = <Home />
    break;
      case "/About":
      component = <About />
    break;
      case "/Contact":
      component = <Contact />
    break;
  }

  return (
  <>
      <Navbar/>
      <div className="container"> 
      {component}
      </div> 
  </>
  )
} */

export default App
