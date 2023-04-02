import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <>
      <main className='App'>
        <div className='nav-container'>
          <Navbar />
        </div>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
