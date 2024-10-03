import React from 'react';

const batsmanDataSilverSharks = [
  { name: 'Alex', runs: 68, balls: 45, minutes: 60, fours: 8, sixes: 2, strikeRate: 151.11 },
  { name: 'Ryan (c)', runs: 50, balls: 30, minutes: 42, fours: 5, sixes: 3, strikeRate: 166.67 },
  { name: 'Blake', runs: 25, balls: 20, minutes: 28, fours: 2, sixes: 1, strikeRate: 125.00 },
  { name: 'Tyler †', runs: 14, balls: 10, minutes: 15, fours: 1, sixes: 0, strikeRate: 140.00 },
  { name: 'Ethan', runs: 7, balls: 9, minutes: 11, fours: 0, sixes: 0, strikeRate: 77.78 },
  { name: 'Jake', runs: 10, balls: 12, minutes: 18, fours: 1, sixes: 0, strikeRate: 83.33 },
  { name: 'Zack', runs: 15, balls: 18, minutes: 20, fours: 1, sixes: 1, strikeRate: 83.33 },
  { name: 'Logan', runs: 8, balls: 7, minutes: 10, fours: 1, sixes: 0, strikeRate: 114.29 },
  { name: 'Sam', runs: 5, balls: 6, minutes: 8, fours: 0, sixes: 0, strikeRate: 83.33 },
  { name: 'Noah', runs: 0, balls: 2, minutes: 2, fours: 0, sixes: 0, strikeRate: 0.00 }
];

const bowlerDataSilverSharks = [
  { name: 'Logan', overs: 4, maidens: 0, runsGiven: 28, wickets: 2, econ: 7.00, wides: 0, noBalls: 0 },
  { name: 'Ethan', overs: 4, maidens: 0, runsGiven: 33, wickets: 3, econ: 8.25, wides: 1, noBalls: 1 },
  { name: 'Blake', overs: 4, maidens: 0, runsGiven: 26, wickets: 1, econ: 6.50, wides: 0, noBalls: 0 },
  { name: 'Jake', overs: 3.2, maidens: 0, runsGiven: 30, wickets: 1, econ: 9.00, wides: 2, noBalls: 0 },
  { name: 'Ryan', overs: 4, maidens: 0, runsGiven: 45, wickets: 0, econ: 11.25, wides: 0, noBalls: 0 }
];

const batsmanDataGoldGazelles = [
  { name: 'Aaron', runs: 70, balls: 48, minutes: 62, fours: 7, sixes: 3, strikeRate: 145.83 },
  { name: 'Oscar', runs: 40, balls: 28, minutes: 38, fours: 3, sixes: 2, strikeRate: 142.86 },
  { name: 'Mason (c)', runs: 24, balls: 20, minutes: 30, fours: 2, sixes: 0, strikeRate: 120.00 },
  { name: 'Zach', runs: 16, balls: 12, minutes: 15, fours: 1, sixes: 1, strikeRate: 133.33 },
  { name: 'Josh', runs: 8, balls: 10, minutes: 12, fours: 1, sixes: 0, strikeRate: 80.00 },
  { name: 'David', runs: 6, balls: 9, minutes: 12, fours: 0, sixes: 0, strikeRate: 66.67 },
  { name: 'Ben', runs: 12, balls: 14, minutes: 18, fours: 1, sixes: 0, strikeRate: 85.71 },
  { name: 'Mark', runs: 4, balls: 6, minutes: 8, fours: 0, sixes: 0, strikeRate: 66.67 },
  { name: 'Luke', runs: 0, balls: 3, minutes: 4, fours: 0, sixes: 0, strikeRate: 0.00 }
];

const bowlerDataGoldGazelles = [
  { name: 'Oscar', overs: 4, maidens: 0, runsGiven: 35, wickets: 3, econ: 8.75, wides: 2, noBalls: 0 },
  { name: 'Mason', overs: 4, maidens: 0, runsGiven: 32, wickets: 2, econ: 8.00, wides: 0, noBalls: 1 },
  { name: 'Aaron', overs: 3.2, maidens: 0, runsGiven: 28, wickets: 1, econ: 8.40, wides: 1, noBalls: 0 },
  { name: 'Josh', overs: 4, maidens: 0, runsGiven: 40, wickets: 0, econ: 10.00, wides: 1, noBalls: 1 },
  { name: 'Zach', overs: 4, maidens: 1, runsGiven: 20, wickets: 2, econ: 5.00, wides: 0, noBalls: 0 }
];

export default function ClientPanel3() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 text-sm">
      <h1 className="text-2xl font-bold mb-4">T20 Live Score</h1>

      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-lg mb-2">Silver Sharks - Batting (220/9)</h2>
        <div className="overflow-x-auto mb-4">
          <table className="table-auto w-full text-xs">
            <thead>
              <tr className="bg-gray-300">
                <th className="px-2 py-1">Batter</th>
                <th className="px-2 py-1">R</th>
                <th className="px-2 py-1">B</th>
                <th className="px-2 py-1">M</th>
                <th className="px-2 py-1">4s</th>
                <th className="px-2 py-1">6s</th>
                <th className="px-2 py-1">SR</th>
              </tr>
            </thead>
            <tbody>
              {batsmanDataSilverSharks.map((batsman, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 py-1">{batsman.name}</td>
                  <td className="px-2 py-1">{batsman.runs}</td>
                  <td className="px-2 py-1">{batsman.balls}</td>
                  <td className="px-2 py-1">{batsman.minutes}</td>
                  <td className="px-2 py-1">{batsman.fours}</td>
                  <td className="px-2 py-1">{batsman.sixes}</td>
                  <td className="px-2 py-1">{batsman.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-bold text-lg mb-2">Silver Sharks - Bowling</h2>
        <div className="overflow-x-auto mb-4">
          <table className="table-auto w-full text-xs">
            <thead>
              <tr className="bg-gray-300">
                <th className="px-2 py-1">Bowler</th>
                <th className="px-2 py-1">O</th>
                <th className="px-2 py-1">M</th>
                <th className="px-2 py-1">R</th>
                <th className="px-2 py-1">W</th>
                <th className="px-2 py-1">E</th>
                <th className="px-2 py-1">Wides</th>
                <th className="px-2 py-1">No Balls</th>
              </tr>
            </thead>
            <tbody>
              {bowlerDataSilverSharks.map((bowler, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 py-1">{bowler.name}</td>
                  <td className="px-2 py-1">{bowler.overs}</td>
                  <td className="px-2 py-1">{bowler.maidens}</td>
                  <td className="px-2 py-1">{bowler.runsGiven}</td>
                  <td className="px-2 py-1">{bowler.wickets}</td>
                  <td className="px-2 py-1">{bowler.econ}</td>
                  <td className="px-2 py-1">{bowler.wides}</td>
                  <td className="px-2 py-1">{bowler.noBalls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Repeat for Gold Gazelles if needed */}
        <h2 className="font-bold text-lg mb-2">Gold Gazelles - Batting</h2>
        <div className="overflow-x-auto mb-4">
          <table className="table-auto w-full text-xs">
            <thead>
              <tr className="bg-gray-300">
                <th className="px-2 py-1">Batter</th>
                <th className="px-2 py-1">R</th>
                <th className="px-2 py-1">B</th>
                <th className="px-2 py-1">M</th>
                <th className="px-2 py-1">4s</th>
                <th className="px-2 py-1">6s</th>
                <th className="px-2 py-1">SR</th>
              </tr>
            </thead>
            <tbody>
              {batsmanDataGoldGazelles.map((batsman, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 py-1">{batsman.name}</td>
                  <td className="px-2 py-1">{batsman.runs}</td>
                  <td className="px-2 py-1">{batsman.balls}</td>
                  <td className="px-2 py-1">{batsman.minutes}</td>
                  <td className="px-2 py-1">{batsman.fours}</td>
                  <td className="px-2 py-1">{batsman.sixes}</td>
                  <td className="px-2 py-1">{batsman.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-bold text-lg mb-2">Gold Gazelles - Bowling</h2>
        <div className="overflow-x-auto mb-4">
          <table className="table-auto w-full text-xs">
            <thead>
              <tr className="bg-gray-300">
                <th className="px-2 py-1">Bowler</th>
                <th className="px-2 py-1">O</th>
                <th className="px-2 py-1">M</th>
                <th className="px-2 py-1">R</th>
                <th className="px-2 py-1">W</th>
                <th className="px-2 py-1">E</th>
                <th className="px-2 py-1">Wides</th>
                <th className="px-2 py-1">No Balls</th>
              </tr>
            </thead>
            <tbody>
              {bowlerDataGoldGazelles.map((bowler, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 py-1">{bowler.name}</td>
                  <td className="px-2 py-1">{bowler.overs}</td>
                  <td className="px-2 py-1">{bowler.maidens}</td>
                  <td className="px-2 py-1">{bowler.runsGiven}</td>
                  <td className="px-2 py-1">{bowler.wickets}</td>
                  <td className="px-2 py-1">{bowler.econ}</td>
                  <td className="px-2 py-1">{bowler.wides}</td>
                  <td className="px-2 py-1">{bowler.noBalls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
