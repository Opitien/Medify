import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 sticky top-0 z-50 shadow-md px-6 py-4 flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold tracking-wider">Medify</h1>
      <ul className="flex gap-8 text-sm font-semibold">
        <li>
          <a href="#features" className="hover:text-yellow-300 transition">Features</a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-yellow-300 transition">Testimonials</a>
        </li>
        <li>
          <a href="#faq" className="hover:text-yellow-300 transition">FAQ</a>
        </li>
        <li>
          <a href="#plans" className="hover:text-yellow-300 transition">Plans</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
