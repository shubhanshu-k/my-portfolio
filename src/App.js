import Skills from "./components/skills";
import  About  from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <SocialLinks/>
    </div>
  );
}

export default App;
