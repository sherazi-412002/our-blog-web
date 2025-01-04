import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-96 mt-24 w-full bg-cover bg-center bg-[url('/wildlife.jpeg')]">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Discover the Wild
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Dive into captivating stories, stunning photographs, and facts about
          wildlife around the world.
        </p>
        <div className="mt-6">
          <a
            href="#explore"
            className="px-6 py-3 text-lg font-medium text-white bg-[#6c965c] rounded-full shadow-lg hover:opacity-75 transition"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;