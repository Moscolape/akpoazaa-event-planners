import { Suspense, lazy, useEffect } from "react";
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
  useEffect(() => {
    const checkResetTime = () => {
      const now = new Date();
      const currentDay = now.getDay();
      const currentHour = now.getHours();

      if (currentDay === 6 && currentHour === 18) {
        localStorage.removeItem("hasSubmitted");
      }
    };

    checkResetTime();

    const interval = setInterval(checkResetTime, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="w-8 h-8 border-4 border-[#071125] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
