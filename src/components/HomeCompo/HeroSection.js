import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
  hidden: { opacity: 0, y: 20 },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 1.0 } },
};

// Updated image URLs
const images = [
  "https://wallpaperaccess.com/full/3468786.jpg",
  "https://wallpaperaccess.com/full/3468625.jpg",
  "https://wallpaperaccess.com/full/3468626.jpg",
  "https://wallpaperaccess.com/full/1088620.jpg",
  "https://wallpaperaccess.com/full/1660522.jpg"
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;
    if (hovering) {
      intervalId = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 1500);
    }
    return () => clearInterval(intervalId);
  }, [hovering]);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
    }, 1500);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative text-gray-600 body-font flex items-center justify-center h-[85vh]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {loading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
          <video
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/cricket-ticket-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--spectator-pass-event-match-pack-sports-games-icons-8805874.mp4"
            autoPlay
            loop
            muted
            className="h-40 w-40"
          />
          <p className="mt-4 text-xl font-semibold text-gray-600">Loading...</p>
        </div>
      )}

      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 py-4 md:py-8 flex flex-col items-center text-center">
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-16"
        >
          <h1 className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-medium text-white" style={{ fontStyle: "Poppins" }}>
            <span className="typewriter-first-line text-white">
              Experience the Thrill of Cricket
            </span>
            <br />
            <span className="typewriter-second-line text-white">
              with CRICKO
            </span>
          </h1>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover="hover"
              variants={buttonVariants}
              onClick={() => handleNavigation("/about")}
              aria-label="Explore Tournaments"
              className="inline-flex text-white bg-custom-blue border-0 py-2 px-6 text-base md:text-lg focus:outline-none hover:bg-custom-blue/80 rounded"
            >
              Explore Tournaments
            </motion.button>
            <motion.button
              whileHover="hover"
              variants={buttonVariants}
              onClick={() => handleNavigation("/contact")}
              aria-label="About Us"
              className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 text-base md:text-lg focus:outline-none hover:bg-gray-200 rounded"
            >
              About Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
