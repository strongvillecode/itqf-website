import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import UmmahStar from "./pages/UmmahStar";
import Donate from "./pages/Donate";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Graphic Elements */}
        <div className="absolute top-0 right-0 w-full md:w-1/3 h-full pointer-events-none opacity-5 overflow-hidden z-0">
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] border border-secondary rounded-full"></div>
          <div className="absolute top-1/3 -right-1/3 w-[600px] h-[600px] border border-secondary rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary filter blur-[120px]"></div>
        </div>

        <Navbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/the-ummah-star" element={<UmmahStar />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
