import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./components/Contact";
import AllSportsNets from "./pages/AllSportsNets";
import Footer from "./components/Footer";
import OurServices from "./pages/OurServices";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sports-nets" element={<AllSportsNets />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/our-services" element={<OurServices />} />
       

      </Routes>


      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
