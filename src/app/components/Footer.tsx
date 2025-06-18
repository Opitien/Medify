import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-8 text-center">
      <p className="mb-2">&copy; {new Date().getFullYear()} Medify. All rights reserved.</p>
      <p>
        Built with <span className="text-yellow-300">❤️</span> by{" "}
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-yellow-300"
        >
          Opitien Ejiro
        </a>
      </p>
    </footer>
  );
};

export default Footer;
