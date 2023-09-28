// App.js
import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import MyCarousel from "./Component/MyCarousel";
import ThreeCards from "./Component/ThreeCards";
import Footer from "./Component/Footer";
import Counter from "./Component/Counter"; // Import the Counter component

function App() {
  return (
    <div>
      <Navbar />
      <MyCarousel />
      <br />
      <ThreeCards />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
