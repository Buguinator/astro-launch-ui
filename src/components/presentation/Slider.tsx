import React, { useState, useEffect } from "react";

const images = [
  "/banners/1.jpg",
  "/banners/2.jpg",
  "/banners/3.jpg",
  "/banners/4.jpg",
  "/banners/7.jpg",
  "/banners/8.jpg",
  "/banners/9.jpg",
];

const imagesMobile = [
  "/banners/mobile/1.jpg",
  "/banners/mobile/2.jpg",
  "/banners/mobile/3.jpg",
  "/banners/mobile/4.jpg",
  "/banners/mobile/5.jpg",
  "/banners/mobile/6.jpg",
  "/banners/mobile/7.jpg",
  "/banners/mobile/8.jpg",
  "/banners/mobile/9.jpg",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentImages = isMobile ? imagesMobile : images;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  return (
    <section className="h-full w-full bg-white px-2 py-16 lg:px-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="relative w-full overflow-hidden rounded-2xl group">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {currentImages.map((src, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={src}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-auto object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
