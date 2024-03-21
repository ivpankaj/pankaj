import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Project from "./Projects/Project";
import Header from "./Header/Header";
import './App/App.css'
const Main = () => {
  return (
    <div className="main">
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

const AboutRoute = () => {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

const ProjectRoute=()=>{
  return (
    <div>
      <Header/>
      <Project/>
    </div>
  )
  
}

const ContactRoute=()=>{
  return (
    <div>
      <Header/>
      <Contact/>

    </div>
  )
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/about" Component={AboutRoute} />
          <Route path="/project" Component={ProjectRoute} />
          <Route path="/contact" Component={ContactRoute} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
