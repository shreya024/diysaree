import Home from "./components/Home/Home";
import DIYDesignEditor from "./components/DIYDesignEditor/DIYDesignEditor";
import Gallery from "./components/Gallery/Gallery";
import Collection from "./components/Collection/Collection ";
import Chooseus from "./components/ChooseUs/ChooseUs";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <DIYDesignEditor />
      <Gallery />
      <Collection />
      <Chooseus />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
