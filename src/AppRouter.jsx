import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

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
                <Navbar />
                <SignUp />
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
