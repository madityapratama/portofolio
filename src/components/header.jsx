import React, { useState } from "react";
import { Home, Info, Container, Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white shadow-md font-poppins">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">My Portofolio</h1>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-700 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
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
          </ul>
        </nav>
      </div>

      {/* Mobile navigation dropdown */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
              >
                <Home size={18} />
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
              >
                <Info size={18} />
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 transition"
              >
                <Mail size={18} />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
