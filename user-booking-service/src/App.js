import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import SearchPage from "./Components/RefineYourSearch/refine";
import Carousel from "./Components/video-gallery-section/Carousel";
import "flowbite";
import LandingSearchBar from "./Components/SearchBar/searchBar";
import ExplorePage from "./Components/Explore/explorePage";

function App() {
  return (
    <div className="App flex flex-col min-h-screen background-image">
      <Header />
      <LandingSearchBar />

      {/* <main className="flex-grow container mx-auto py-8  "></main> */}
      <SearchPage />
      <ExplorePage />
      <Carousel />

      <Footer />
    </div>
  );
}
export default App;
