import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Contact from "./pages/Contact";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path='/signup'
            element={
              <>
                <ScrollToTop />
                <Navbar />
                <SignUp />
                <Footer />
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <ScrollToTop />
                <Navbar />
                <LogIn />
                <Footer />
              </>
            }
          />
          <Route
            path='/contact'
            element={
              <>
                <ScrollToTop />
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
