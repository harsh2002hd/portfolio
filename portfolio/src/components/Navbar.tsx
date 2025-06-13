import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-bold text-lg tracking-tight">Harsh Sharma</div>
        <div className="flex items-center gap-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer px-2 py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              activeClass="text-blue-600 dark:text-blue-400 font-semibold"
              spy={true}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleDark}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
} 