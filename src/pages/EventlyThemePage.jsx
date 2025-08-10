// LandingPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const IMAGES = ["/r1.jpeg", "/r2.jpeg", "/r3.jpeg", "/r4.jpeg", "/r5.jpeg"];
const TAGLINES = [
  "Plan, promote, and manage your events with ease.",
  "Create events, manage venues, and customize experiences.",
  "Sell tickets, track attendees, and accept secure payments.",
  "Streamline operations with real-time analytics and tools.",
];

export default function LandingPage() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setBgIndex((s) => (s + 1) % IMAGES.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans animate-fadeZoom">
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        @keyframes fadeZoom {
          0% {
            opacity: 0;
            transform: translateY(-40px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeZoom {
          animation: fadeZoom 1.2s ease-out forwards;
        }
      `}</style>

      <div className="absolute inset-0">
        {IMAGES.map((src, i) => {
          const isActive = i === bgIndex;
          return (
            <img
              key={src}
              src={src}
              alt={`bg-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionProperty: "opacity",
              }}
            />
          );
        })}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,81,140,0.45) 0%, rgba(12,75,89,0.35) 40%, rgba(242,242,242,0.05) 100%)",
          }}
        />
      </div>

      <header className="relative z-30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div
              className="text-xl font-extrabold"
              style={{ color: "#F2BC8D", fontFamily: "'Poppins', sans-serif" }}
            >
              EVENTLY
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <button
                className="px-4 py-2 rounded-md font-medium capitalize transition-colors duration-200 border border-white bg-black text-white hover:bg-white hover:text-black"
                aria-label="login"
              >
                Login
              </button>
            </Link>

            <Link to="/register">
              <button
                className="px-4 py-2 rounded-md font-medium capitalize transition-colors duration-200 border border-white bg-white text-black hover:bg-black hover:text-white"
                aria-label="register"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center min-h-[78vh] gap-8">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1
              className="text-6xl md:text-8xl font-black leading-tight"
              style={{
                color: "#F2BC8D",
                textShadow: "4px 6px 18px rgba(0,0,0,0.6)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              EVENTLY
            </h1>

            <div className="mt-6">
              <TypingText
                phrases={TAGLINES}
                typingSpeed={55}
                deletingSpeed={35}
                pause={1400}
                className="text-lg md:text-2xl text-white"
              />
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <div className="relative w-full max-w-2xl">
                <input
                  aria-label="search-events"
                  className="w-full rounded-full px-6 py-4 text-black text-lg font-medium shadow-2xl outline-none"
                  placeholder="Search events, venues, speakers..."
                  style={{ backgroundColor: "#FFFFFF" }}
                />
                <button
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: "#0D518C", color: "#F2F2F2" }}
                  aria-label="search-btn"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>

          <aside
            className="w-full md:w-1/3 rounded-xl p-6 shadow-2xl"
            style={{ backgroundColor: "#F2BC8D", color: "#0C4B59" }}
          >
            <h3 className="text-2xl font-bold mb-3">What Evently Does</h3>
            <p className="mb-4 text-md">
              Evently is a complete event management platform that simplifies
              how you host and attend events. Whether you're planning a concert,
              workshop, conference, or private gathering — Evently gives you the
              tools to create, customize, and manage everything in one place.
              Organizers can easily list events, manage categories, set up
              ticket types, track attendees, and collect secure payments.
              Attendees can browse upcoming events, book tickets, and pay online
              — quickly and securely. From setup to follow-up, Evently helps you
              run smooth, memorable events that people want to attend.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                className="flex-1 py-2 rounded-md font-semibold"
                style={{ backgroundColor: "#0D518C", color: "#F2F2F2" }}
              >
                Learn More
              </button>
              <button
                className="flex-1 py-2 rounded-md font-semibold border border-white bg-white text-black"
                style={{ backgroundColor: "transparent" }}
              >
                Get Started
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function TypingText({
  phrases = [],
  typingSpeed = 60,
  deletingSpeed = 40,
  pause = 1200,
  className = "",
}) {
  const [txt, setTxt] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mountedRef = useRef(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const current = phrases[phraseIndex] || "";
    if (!isDeleting) {
      if (txt.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          if (!mountedRef.current) return;
          setTxt(current.slice(0, txt.length + 1));
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          if (!mountedRef.current) return;
          setIsDeleting(true);
        }, pause);
      }
    } else {
      if (txt.length > 0) {
        timeoutRef.current = setTimeout(() => {
          if (!mountedRef.current) return;
          setTxt(current.slice(0, txt.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((p) => (p + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [
    txt,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return (
    <div className={className}>
      <span>{txt}</span>
      <span
        style={{
          display: "inline-block",
          width: 10,
          marginLeft: 6,
          animation: "blink 1s step-end infinite",
        }}
      >
        █
      </span>
    </div>
  );
}
