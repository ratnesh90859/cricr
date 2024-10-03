"use client";

import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.classList.add("bg-[#1f5156]", "text-white"); // Tailwind CSS classes for background and text color
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }

    return () => {
      // Cleanup if needed (e.g., removing event listeners)
    };
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const durationMap = {
        fast: "20s",
        normal: "40s",
        slow: "80s"
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        durationMap[speed] || "20s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 opacity-75" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 opacity-75" />

      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="card w-[200px] h-[300px] max-w-full relative rounded-lg flex-shrink-0 px-4 py-3 md:w-[250px] md:h-[350px] bg-[#1f5156] border-none text-white"
          >
            <img
              src={item.image}
              alt={item.title || 'Card Image'} // Use meaningful alt text
              className="w-full h-[80px] md:h-[100px] object-cover rounded-md mb-2"
            />
            <h2 className="text-sm md:text-base font-semibold">{item.title}</h2>
            <p className="text-xs md:text-sm mb-1">{item.description}</p>
            <a
              href={item.link}
              className="text-xs md:text-sm hover:underline"
              style={{ color: "#f5b921" }} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read more about ${item.title}`} // Add aria-label for accessibility
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
