import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <BrowserRouter basename="/React_template">
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* Default route to Home component */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* Catch all unmatched routes and redirect to Home */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>

        <Footer />
        <ScrollToTop
          smooth
          width="20"
          height="20"
          color="white"
          style={{
            background: "rgb(67 56 202)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
