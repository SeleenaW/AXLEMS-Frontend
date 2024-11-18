import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import RefineSearchPage from "./Components/refine";
import "flowbite";
function App() {
  return (
    <div className="App flex flex-col min-h-screen background-image">
      <Header />

      {/* <main className="flex-grow container mx-auto py-8  "></main> */}
      {/* <RefineSearchPage /> */}
      <Content />

      <Footer />
    </div>
  );
}
export default App;
