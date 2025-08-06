import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const phrases = [
  "Discover unforgettable experiences!",
  "Book your next event hassle-free!",
  "Explore exciting categories!",
  "Your journey begins with Evently!",
];

function HeroSection() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setText("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, phraseIndex]);

  return (
    <section className="bg-[#F9F9FF] py-12 px-4 sm:px-6 md:px-10 lg:px-20 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6A4FB6] mb-4">
        Welcome to <span className="text-[#6A4FB6]">Evently</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl font-medium text-[#2D2D2D] min-h-[2.5rem]">
        <span className="animate-pulse border-r-2 border-[#6A4FB6] pr-1">
          {text}
        </span>
      </p>

      <div className="w-full max-w-2xl mx-auto mt-8 px-2">
        <div className="flex items-center bg-white rounded-full shadow-md border border-[#E0D6F8] p-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for events..."
            className="flex-grow px-4 py-2 rounded-full text-[#2D2D2D] placeholder-gray-500 text-sm focus:outline-none"
          />
          <button
            className="ml-2 bg-[#CCBBF2] hover:bg-[#BBAAF0] text-white px-4 py-2 rounded-full transition flex items-center justify-center gap-2"
            title="Search"
          >
              <Search className="w-5 h-5" />
            <Link to="/customer/events">
              <span className="hidden md:inline">Search</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
