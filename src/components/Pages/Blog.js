import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const matches = [
  { id: 1, team1: "Red Dragons", team2: "Blue Tigers", date: "2023-06-15", time: "15:00" },
  { id: 2, team1: "Green Eagles", team2: "Yellow Lions", date: "2023-06-16", time: "18:30" },
  { id: 3, team1: "Purple Panthers", team2: "Orange Owls", date: "2023-06-17", time: "20:00" },
  { id: 4, team1: "Silver Sharks", team2: "Gold Gazelles", date: "2023-06-18", time: "16:45" },
  { id: 5, team1: "Black Bears", team2: "White Wolves", date: "2023-06-19", time: "19:15" },
  { id: 6, team1: "Cyan Cheetahs", team2: "Magenta Monkeys", date: "2023-06-20", time: "17:30" },
];

const teamLogos = {
  "Red Dragons": "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/14194010/abstract-cricket-player-by-eightylogos-brandcrowd.png",
  "Blue Tigers": "https://i.pinimg.com/236x/96/1b/67/961b672143c8f75e7793e6dc2ced7af2.jpg",
  "Green Eagles": "https://png.pngtree.com/png-clipart/20230524/original/pngtree-cricket-logo-free-vector-png-image_9169643.png",
  "Yellow Lions": "https://i.pinimg.com/550x/78/1d/67/781d6783a1465bcfd437146c334f783c.jpg",
  "Purple Panthers": "https://t4.ftcdn.net/jpg/04/99/62/59/360_F_499625904_jhho0Ev0pAOuFntvY9HXGNQpFQqhBqyo.jpg",
  "Orange Owls": "https://www.shutterstock.com/image-vector/cricket-player-logo-playing-short-600nw-2417730941.jpg",
  "Silver Sharks": "https://static.vecteezy.com/system/resources/thumbnails/038/258/524/small/cricket-player-logo-design-illustration-vector.jpg",
  "Gold Gazelles": "https://www.shutterstock.com/image-vector/cricket-player-logo-playing-short-600nw-2417730941.jpg",
  "Black Bears": "https://www.shutterstock.com/image-vector/sport-cricket-indian-premier-league-600nw-2051585033.jpg",
  "White Wolves": "https://as2.ftcdn.net/v2/jpg/04/99/62/59/1000_F_499625910_ghBBxV9RsHAWLQVPJdTpF49ioBP9ak1Z.jpg",
  "Cyan Cheetahs": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVCKy4oAtCgXMkFxGWSvhamdTN6kKssjNliLIc-Apeueutz_s50vpgyuYWoJWuYAt8cA&usqp=CAU",
  "Magenta Monkeys": "https://static.vecteezy.com/system/resources/previews/038/258/500/non_2x/cricket-player-logo-sun-play-concept-vector.jpg",
};

const scorecardLinks = {
  "Red Dragons": "/client",
  "Blue Tigers": "/client",
  "Green Eagles": "/client1",
  "Yellow Lions": "/client1",
  "Purple Panthers": "/client2",
  "Orange Owls": "/client2",
  "Silver Sharks": "/clients",
  "Gold Gazelles": "/clients",
  "Black Bears": "/client4",
  "White Wolves": "/client4",
  "Cyan Cheetahs": "/client5",
  "Magenta Monkeys": "/client5",
};

function Blog() {
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 
  const isSingleCard = matches.length === 1;

  const handleScorecardNavigation = (team) => {
    setLoading(true);
    setTimeout(() => {
      navigate(scorecardLinks[team]); 
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <video
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/cricket-ticket-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--spectator-pass-event-match-pack-sports-games-icons-8805874.mp4"
            autoPlay
            loop
            muted
            className="h-40 w-40"
          />
        </div>
      )}
      <h2 className="font-semibold mb-4 text-[#316685] text-2xl md:text-3xl lg:text-4xl">
            Live Matches
          </h2>
      <div className={`grid ${isSingleCard ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4`}>
        {matches.map((match) => (
          <div key={match.id} className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ${isSingleCard ? 'w-full max-w-xs mx-auto' : ''}`}>
            <div className="p-3" style={{ backgroundColor: '#1f5156', color: 'white' }}>
              <div className="flex justify-between items-center">
                <div className="text-xs">{match.date}</div>
                <div className="text-xs font-semibold">{match.time}</div>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <img
                    src={teamLogos[match.team1]}
                    alt={`${match.team1} logo`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="ml-2 text-sm font-medium">{match.team1}</span>
                </div>
                <div className="text-lg font-bold">VS</div>
                <div className="flex items-center">
                  <span className="mr-2 text-sm font-medium">{match.team2}</span>
                  <img
                    src={teamLogos[match.team2]}
                    alt={`${match.team2} logo`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
              <button
                className="w-full bg-[#b5fac7] hover:bg-green-300 text-black text-sm py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => handleScorecardNavigation(match.team1)}
              >
                Scorecard
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
