import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Services = lazy(() => import("./pages/services"));
const Portfolio = lazy(() => import("./pages/portfolio"));
const Blog = lazy(() => import("./pages/blog"));
const Contact = lazy(() => import("./pages/contact"));
const Testimonials = lazy(() => import("./pages/testimonials"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="w-8 h-8 border-4 border-[#be202f] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bout-us" element={<About />} />
          <Route path="/ervices" element={<Services />} />
          <Route path="/ortfolio" element={<Portfolio />} />
          <Route path="/log" element={<Blog />} />
          <Route path="/ontact" element={<Contact />} />
          <Route path="/estimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
