import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <main className='App'>
      <div className='nav-container'>
        <Navbar />
      </div>
      <Home />
    </main>
  );
}

export default App;
