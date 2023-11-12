import Navbar from "./components/Nav";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";


function App() {
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
}

export default App
