import "./App.css";
// IMPORT default export
import NavbarC from "./Components/Navbar/Navbar.jsx";
// import named export :{}
import Cards from "./Components/Cards/Cards.jsx";
// import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <NavbarC />
      <Cards />
    </div>
  );
}

export default App;
