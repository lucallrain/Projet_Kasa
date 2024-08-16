import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Accueil</h2>;
}

function About() {
  return <h2>À propos</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
