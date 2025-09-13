import React, { useState } from "react";
import { Home, Info, Container, Menu, X, Mail } from "lucide-react";

function header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white shadow-md font-poppins">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">My Portofolio</h1>

        {/* Tombol menu untuk HP */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-700 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation versi desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
              >
                <Home size={18} />
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutMe"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
              >
                <Info size={18} />
                About
              </a>
            </li>
            <li>
              <a
                href="#mySkill"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
              >
                <Container size={18} />
                Skill
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
              >
                <Mail size={18} />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Navigation versi mobile */}
      <nav
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-4 space-y-2">
          <li>
            <a
              href="#home"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
            >
              <Home size={18} />
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutMe"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
            >
              <Info size={18} />
              About
            </a>
          </li>
          <li>
            <a
              href="#mySkill"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
            >
              <Container size={18} />
              Skill
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
            >
              <Mail size={18} />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
