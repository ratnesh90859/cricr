import React from 'react';

const batsmanDataIndia = [
  { name: 'Yashasvi', runs: 56, balls: 118, minutes: 205, fours: 9, sixes: 0, strikeRate: 47.45 },
  { name: 'Rohit  (c)', runs: 6, balls: 19, minutes: 26, fours: 1, sixes: 0, strikeRate: 31.57 },
  { name: 'Shubman ', runs: 0, balls: 8, minutes: 11, fours: 0, sixes: 0, strikeRate: 0.00 },
  { name: 'Virat ', runs: 6, balls: 6, minutes: 9, fours: 0, sixes: 0, strikeRate: 100.00 },
  { name: 'Pant †', runs: 39, balls: 52, minutes: 82, fours: 6, sixes: 0, strikeRate: 75.00 },
  { name: 'Rahul', runs: 16, balls: 52, minutes: 76, fours: 1, sixes: 0, strikeRate: 30.76 },
  { name: 'Ravindra ', runs: 86, balls: 124, minutes: 181, fours: 10, sixes: 2, strikeRate: 69.35 },
  { name: 'Ashwin', runs: 113, balls: 133, minutes: 223, fours: 11, sixes: 2, strikeRate: 84.96 },
  { name: 'Akash ', runs: 17, balls: 30, minutes: 34, fours: 4, sixes: 0, strikeRate: 56.66 },
  { name: 'Bumrah', runs: 7, balls: 9, minutes: 14, fours: 1, sixes: 0, strikeRate: 77.77 },
  { name: 'Siraj', runs: 0, balls: 1, minutes: 4, fours: 0, sixes: 0, strikeRate: 0.00 }
];

const bowlerDataIndia = [
  { name: 'Bumrah', overs: 10, maidens: 2, runsGiven: 24, wickets: 1, econ: 2.40, wides: 0, noBalls: 0 },
  { name: 'Siraj', overs: 10, maidens: 5, runsGiven: 32, wickets: 0, econ: 3.20, wides: 0, noBalls: 0 },
  { name: 'Akash', overs: 6, maidens: 0, runsGiven: 20, wickets: 0, econ: 3.33, wides: 0, noBalls: 0 },
  { name: 'Ashwin', overs: 21, maidens: 0, runsGiven: 88, wickets: 6, econ: 4.19, wides: 0, noBalls: 0 },
  { name: 'Ravindra', overs: 15.1, maidens: 2, runsGiven: 58, wickets: 3, econ: 3.82, wides: 0, noBalls: 0 }
];

const bowlerDataBangladesh = [
  { name: 'Taskin', overs: 21, maidens: 4, runsGiven: 55, wickets: 3, econ: 2.61, wides: 0, noBalls: 0 },
  { name: 'Hasan', overs: 22.2, maidens: 4, runsGiven: 83, wickets: 5, econ: 3.71, wides: 0, noBalls: 0 },
  { name: 'Nahid', overs: 18, maidens: 2, runsGiven: 82, wickets: 1, econ: 4.55, wides: 1, noBalls: 3 },
  { name: 'Mehidy', overs: 21, maidens: 2, runsGiven: 77, wickets: 1, econ: 3.66, wides: 0, noBalls: 0 },
  { name: 'Shakib', overs: 8, maidens: 0, runsGiven: 50, wickets: 0, econ: 6.25, wides: 0, noBalls: 1 },
  { name: 'Mominul', overs: 1, maidens: 0, runsGiven: 4, wickets: 0, econ: 4.00, wides: 0, noBalls: 0 }
];

const batsmanDataBangladesh = [
  { name: 'Zakir', runs: 33, balls: 47, minutes: 72, fours: 5, sixes: 1, strikeRate: 70.21 },
  { name: 'Shadman', runs: 35, balls: 68, minutes: 92, fours: 3, sixes: 0, strikeRate: 51.47 },
  { name: 'Najmul  (c)', runs: 82, balls: 127, minutes: 175, fours: 8, sixes: 3, strikeRate: 64.56 },
  { name: 'Mominul', runs: 13, balls: 24, minutes: 30, fours: 0, sixes: 0, strikeRate: 54.16 },
  { name: 'Mushfiqur', runs: 13, balls: 11, minutes: 14, fours: 1, sixes: 1, strikeRate: 118.18 },
  { name: 'Shakib', runs: 25, balls: 56, minutes: 76, fours: 3, sixes: 0, strikeRate: 44.64 },
  { name: 'Litton  †', runs: 1, balls: 10, minutes: 11, fours: 0, sixes: 0, strikeRate: 10.00 },
  { name: 'Mehidy', runs: 8, balls: 10, minutes: 11, fours: 1, sixes: 0, strikeRate: 80.00 },
  { name: 'Taskin', runs: 5, balls: 4, minutes: 8, fours: 1, sixes: 0, strikeRate: 125.00 },
  { name: 'Hasan', runs: 7, balls: 14, minutes: 10, fours: 1, sixes: 0, strikeRate: 50.00 },
  { name: 'Nahid', runs: 0, balls: 2, minutes: 6, fours: 0, sixes: 0, strikeRate: 0.00 }
];

export default function ClientPanel() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 text-sm">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">Test Cricket Live Score</h1>

      <div className="max-w-full md:max-w-4xl mx-auto">
        <h2 className="font-bold text-base md:text-lg mb-2 md:mb-4">Red Dragons 1st Inning (376/10)</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mb-4 md:mb-8 text-xs md:text-sm">
            <thead>
              <tr className="bg-red-400">
                <th className="px-2 md:px-4 py-2">Batting</th>
                <th className="px-2 md:px-4 py-2">R</th>
                <th className="px-2 md:px-4 py-2">B</th>
                <th className="px-2 md:px-4 py-2">4s</th>
                <th className="px-2 md:px-4 py-2">6s</th>
                <th className="px-2 md:px-4 py-2">SR</th>
              </tr>
            </thead>
            <tbody>
              {batsmanDataIndia.map((batsman, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 md:px-4 py-2">{batsman.name}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.runs}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.balls}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.fours}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.sixes}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-bold text-base md:text-lg mb-2 md:mb-4">Bangladesh 1st Inning (176/10)</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mb-4 md:mb-8 text-xs md:text-sm">
            <thead>
              <tr className="bg-red-400">
                <th className="px-2 md:px-4 py-2">Batting</th>
                <th className="px-2 md:px-4 py-2">R</th>
                <th className="px-2 md:px-4 py-2">B</th>
                <th className="px-2 md:px-4 py-2">4s</th>
                <th className="px-2 md:px-4 py-2">6s</th>
                <th className="px-2 md:px-4 py-2">SR</th>
              </tr>
            </thead>
            <tbody>
              {batsmanDataBangladesh.map((batsman, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 md:px-4 py-2">{batsman.name}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.runs}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.balls}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.fours}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.sixes}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
