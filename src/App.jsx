import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Socials from "./components/Socials.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Main />
       
      </div>
    </>
  );
}

export default App;
