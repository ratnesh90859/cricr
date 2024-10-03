"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const newsItems = [
  {
    title: "Cricket World Cup 2024 Begins",
    description: "The Cricket World Cup 2024 kicks off with exciting matches and high anticipation among fans worldwide.",
    image: "https://img.jagranjosh.com/images/2023/September/2092023/ICC-T20-World-Cup-2024.webp",
    link: "https://www.business-standard.com/cricket/icc-t20-world-cup/t20-world-cup-2024-full-schedule-format-match-time-ist-live-streaming-124053100763_1.html"
  },
  {
    title: "New Record Set in T20 League",
    description: "A new record was set in the T20 League as a player scores the fastest century of the season.",
    image: "https://static.toiimg.com/thumb/msid-104256760,width-1280,height-720,resizemode-4/104256760.jpg",
    link: "https://timesofindia.indiatimes.com/sports/cricket/news/aussie-batter-breaks-ab-de-villiers-record-slams-fastest-ever-hundred-in-list-a-cricket/articleshow/104256694.cms"
  },
  {
    title: "Upcoming Test Series Announcement",
    description: "The schedule for the upcoming Test series has been announced with thrilling matches lined up.",
    image: "https://assets.bcci.tv/bcci/articles/1725810150_ALPHA7RV21270.jpg",
    link: "https://www.bcci.tv/articles/2024/news/55556143/india-s-squad-for-the-1st-test-of-the-idfc-first-bank-test-series-against-bangladesh-announced"
  },
  {
    title: "Shreyas to play for Mumbai in Irani Cup",
    description: "Shreyas Iyer and Shardul Thakur are set to play in the upcoming Irani Cup match between Mumbai and the Rest of India.",
    image: "https://www.cricbuzz.com/a/img/v1/595x396/i1/c549910/shreyas-iyer-is-striving-to-ma.jpg",
    link: "https://www.cricbuzz.com/cricket-news/131726/shreyas-shardul-to-play-for-mumbai-in-irani-cup-rahane-to-lead"
  },
  {
    title: "Southee finds positives in Ravindra",
    description: "Even though New Zealand may have lost the Galle Test, captain Tim Southee took a lot of heart and positives",
    image: "https://www.cricbuzz.com/a/img/v1/595x396/i1/c549919/rachin-ravindra-looked-every-b.jpg",
    link: "https://www.cricbuzz.com/cricket-news/131728/southee-finds-positives-in-ravindra-orourke-despite-galle-defeat"
  },
];

const CricketNewsDemo = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
  <h2 className="font-semibold mb-4 text-[#316685] text-2xl md:text-3xl lg:text-4xl">
            Cricket News
          </h2>
   <p className="text-base text-[#4B5563]  sm:text-lg md:text-xl mb-8 leading-relaxed">
            The latest cricket news from the globe
          </p>
      <InfiniteMovingCards items={newsItems} direction="right" speed="fast" />
    </div>
  );
};

export default CricketNewsDemo;
