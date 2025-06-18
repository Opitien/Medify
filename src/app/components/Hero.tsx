import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-white px-6 sm:px-12 overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-500"
    >
      {/* Floating icons */}
      <i className="bi bi-heart-pulse-fill text-yellow-200 text-6xl absolute top-12 left-6 animate-pulse opacity-40" />
      <i className="bi bi-activity text-yellow-300 text-5xl absolute top-20 right-8 animate-bounce opacity-30" />
      <i className="bi bi-bandaid-fill text-yellow-200 text-6xl absolute bottom-16 left-10 animate-spin-slow opacity-25" />
      <i className="bi bi-thermometer-half text-yellow-300 text-5xl absolute bottom-24 right-12 animate-pulse opacity-30" />

      <div className="max-w-xl text-center z-10 px-2">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to <span className="text-yellow-300">Medify</span> ❤️‍🩹
        </h1>
        <p className="text-lg sm:text-xl text-yellow-100 mb-10 drop-shadow-md">
          Your trusted medical platform for health tracking, advice, and support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#features"
            className="w-full sm:w-auto bg-yellow-400 text-red-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg"
          >
            Explore Features
          </a>
          <a
            href="#plans"
            className="w-full sm:w-auto border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-red-900 transition shadow-lg"
          >
            See Plans
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
