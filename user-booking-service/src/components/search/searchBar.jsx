import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineAudio } from 'react-icons/ai';
import { RiRobot3Line } from "react-icons/ri";
import '../index.css';

// Check if the browser supports SpeechRecognition
const isSpeechRecognitionAvailable = window.SpeechRecognition || window.webkitSpeechRecognition;

const LandingSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  
  const handleMicClick = (e) => {
    e.preventDefault();  
  
    if (isSpeechRecognitionAvailable) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US'; // Set language to English
      recognition.continuous = false; // Stop when recognition ends
      recognition.interimResults = false; 
  
      recognition.start(); // Start listening for speech
  
      recognition.onstart = () => {
        setIsListening(true); // Indicate that the mic is listening
      };
  
      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript; // Get the spoken text
        setSearchQuery(spokenText); // Set the search query to the spoken text
        setIsListening(false); // Stop listening after speech is recognized
      };
  
      recognition.onerror = (event) => {
        console.error('Error occurred during speech recognition:', event.error);
        setIsListening(false); // Stop listening in case of an error
      };
  
      recognition.onend = () => {
        setIsListening(false); // Stop listening when recognition ends
      };
    } else {
      alert('Speech Recognition is not supported in this browser.');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-white flex-col px-4">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pb-10 text-center">
        Luxury Experience Management System
      </h1>

      <form className='w-full sm:w-[500px] relative rounded-xl p-4'>
        <div className="relative">
          {/* Search Input */}
          <input
            type="search"
            placeholder="Find your destination"
            value={searchQuery} // Bind the searchQuery state to the input
            onChange={(e) => setSearchQuery(e.target.value)} // Update the searchQuery state on input change
            className="w-full p-4 pl-12 rounded-full bg-slate-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 border border-black"
          />

          {/* Search Icon */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-xl focus:outline-none cursor-pointer">
            <AiOutlineSearch />
          </button>

          {/* Audio Icon (Mic) as Button */}
          <button
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${isListening ? 'text-green-500' : 'text-black'} text-xl focus:outline-none cursor-pointer`}
            onClick={handleMicClick}
          >
            <AiOutlineAudio />
          </button>

          {/* Robot Icon */}
          <button className="absolute right-16 top-1/2 transform -translate-y-1/2 text-black text-xl focus:outline-none cursor-pointer">
            <RiRobot3Line />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LandingSearchBar;
