import React from 'react';

const batsmanDataBlackBears = [
  { name: 'John', runs: 75, balls: 50, minutes: 70, fours: 9, sixes: 3, strikeRate: 150.00 },
  { name: 'Matt (c)', runs: 40, balls: 30, minutes: 45, fours: 5, sixes: 1, strikeRate: 133.33 },
  { name: 'Chris', runs: 30, balls: 20, minutes: 25, fours: 2, sixes: 2, strikeRate: 150.00 },
  { name: 'Rob', runs: 15, balls: 10, minutes: 15, fours: 1, sixes: 1, strikeRate: 150.00 },
  { name: 'Nick', runs: 5, balls: 8, minutes: 10, fours: 0, sixes: 0, strikeRate: 62.50 },
  { name: 'Tom', runs: 10, balls: 12, minutes: 18, fours: 1, sixes: 0, strikeRate: 83.33 },
  { name: 'Jack', runs: 12, balls: 15, minutes: 20, fours: 1, sixes: 0, strikeRate: 80.00 },
  { name: 'Luke', runs: 8, balls: 10, minutes: 12, fours: 1, sixes: 0, strikeRate: 80.00 },
  { name: 'James', runs: 4, balls: 6, minutes: 8, fours: 0, sixes: 0, strikeRate: 66.67 },
  { name: 'Sam', runs: 0, balls: 3, minutes: 4, fours: 0, sixes: 0, strikeRate: 0.00 }
];

const bowlerDataWhiteWolves = [
  { name: 'Adam', overs: 4, maidens: 0, runsGiven: 35, wickets: 2, econ: 8.75, wides: 1, noBalls: 0 },
  { name: 'David', overs: 4, maidens: 0, runsGiven: 30, wickets: 3, econ: 7.50, wides: 0, noBalls: 0 },
  { name: 'Oliver', overs: 4, maidens: 1, runsGiven: 25, wickets: 1, econ: 6.25, wides: 2, noBalls: 1 },
  { name: 'Peter', overs: 4, maidens: 0, runsGiven: 45, wickets: 0, econ: 11.25, wides: 1, noBalls: 0 },
  { name: 'George', overs: 4, maidens: 0, runsGiven: 28, wickets: 1, econ: 8.40, wides: 0, noBalls: 0 }
];

export default function ClientPanel4() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 text-sm">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">T20 Live Score</h1>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-lg mb-2">Black Bears - Batting (225/9)</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mb-4 md:mb-8 text-xs md:text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-2 md:px-4 py-2">Batter</th>
                <th className="px-2 md:px-4 py-2">R</th>
                <th className="px-2 md:px-4 py-2">B</th>
                <th className="px-2 md:px-4 py-2">M</th>
                <th className="px-2 md:px-4 py-2">4s</th>
                <th className="px-2 md:px-4 py-2">6s</th>
                <th className="px-2 md:px-4 py-2">SR</th>
              </tr>
            </thead>
            <tbody>
              {batsmanDataBlackBears.map((batsman, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 md:px-4 py-2">{batsman.name}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.runs}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.balls}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.minutes}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.fours}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.sixes}</td>
                  <td className="px-2 md:px-4 py-2">{batsman.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-bold text-lg mb-2">White Wolves - Bowling</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mb-4 md:mb-8 text-xs md:text-sm">
            <thead>
              <tr className="bg-white">
                <th className="px-2 md:px-4 py-2">Bowler</th>
                <th className="px-2 md:px-4 py-2">O</th>
                <th className="px-2 md:px-4 py-2">M</th>
                <th className="px-2 md:px-4 py-2">R</th>
                <th className="px-2 md:px-4 py-2">W</th>
                <th className="px-2 md:px-4 py-2">Econ</th>
                <th className="px-2 md:px-4 py-2">Wd</th>
                <th className="px-2 md:px-4 py-2">Nb</th>
              </tr>
            </thead>
            <tbody>
              {bowlerDataWhiteWolves.map((bowler, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 md:px-4 py-2">{bowler.name}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.overs}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.maidens}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.runsGiven}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.wickets}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.econ}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.wides}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.noBalls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <h2 className='font-bold text-lg'>White Wolves Need 226 Runs to Win in 20 overs</h2>
      </div>
    </div>
  );
}
