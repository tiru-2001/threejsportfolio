import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Project, Contact, About } from "./pages";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <main className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
