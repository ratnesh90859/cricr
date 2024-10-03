import React from 'react';

const batsmanDataThunderbolts = [
  { name: 'Chris', runs: 65, balls: 42, minutes: 58, fours: 7, sixes: 3, strikeRate: 154.76 },
  { name: 'Max', runs: 34, balls: 25, minutes: 38, fours: 4, sixes: 2, strikeRate: 136.00 },
  { name: 'Sam (c)', runs: 22, balls: 18, minutes: 25, fours: 2, sixes: 1, strikeRate: 122.22 },
  { name: 'Blake', runs: 48, balls: 31, minutes: 44, fours: 5, sixes: 2, strikeRate: 154.83 },
  { name: 'Tyler †', runs: 15, balls: 12, minutes: 14, fours: 1, sixes: 0, strikeRate: 125.00 },
  { name: 'Jordan', runs: 8, balls: 9, minutes: 10, fours: 1, sixes: 0, strikeRate: 88.89 },
  { name: 'Ethan', runs: 5, balls: 6, minutes: 8, fours: 0, sixes: 0, strikeRate: 83.33 },
  { name: 'Jake', runs: 12, balls: 15, minutes: 20, fours: 1, sixes: 0, strikeRate: 80.00 },
  { name: 'Liam', runs: 9, balls: 8, minutes: 10, fours: 1, sixes: 0, strikeRate: 112.50 },
  { name: 'Ben', runs: 2, balls: 4, minutes: 6, fours: 0, sixes: 0, strikeRate: 50.00 }
];

const bowlerDataThunderbolts = [
  { name: 'Liam', overs: 4, maidens: 1, runsGiven: 24, wickets: 3, econ: 6.00, wides: 0, noBalls: 0 },
  { name: 'Ethan', overs: 4, maidens: 0, runsGiven: 30, wickets: 2, econ: 7.50, wides: 1, noBalls: 1 },
  { name: 'Blake', overs: 4, maidens: 0, runsGiven: 28, wickets: 1, econ: 7.00, wides: 0, noBalls: 0 },
  { name: 'Chris', overs: 3.2, maidens: 0, runsGiven: 25, wickets: 2, econ: 7.50, wides: 2, noBalls: 0 },
  { name: 'Max', overs: 4, maidens: 0, runsGiven: 40, wickets: 0, econ: 10.00, wides: 0, noBalls: 0 }
];

const batsmanDataFireBlades = [
  { name: 'Aaron', runs: 78, balls: 56, minutes: 75, fours: 9, sixes: 2, strikeRate: 139.29 },
  { name: 'Ryan', runs: 50, balls: 35, minutes: 52, fours: 4, sixes: 3, strikeRate: 142.86 },
  { name: 'Lucas (c)', runs: 30, balls: 22, minutes: 28, fours: 3, sixes: 1, strikeRate: 136.36 },
  { name: 'David', runs: 12, balls: 18, minutes: 22, fours: 1, sixes: 0, strikeRate: 66.67 },
  { name: 'Mark', runs: 5, balls: 7, minutes: 10, fours: 0, sixes: 0, strikeRate: 71.43 },
  { name: 'Josh', runs: 7, balls: 8, minutes: 9, fours: 1, sixes: 0, strikeRate: 87.50 },
  { name: 'Zach', runs: 16, balls: 10, minutes: 12, fours: 2, sixes: 1, strikeRate: 160.00 },
  { name: 'Oscar', runs: 4, balls: 6, minutes: 8, fours: 0, sixes: 0, strikeRate: 66.67 },
  { name: 'Mason', runs: 10, balls: 12, minutes: 14, fours: 1, sixes: 0, strikeRate: 83.33 },
  { name: 'Logan', runs: 0, balls: 3, minutes: 4, fours: 0, sixes: 0, strikeRate: 0.00 }
];

const bowlerDataFireBlades = [
  { name: 'James', overs: 4, maidens: 0, runsGiven: 36, wickets: 2, econ: 9.00, wides: 1, noBalls: 0 },
  { name: 'Lucas', overs: 4, maidens: 0, runsGiven: 30, wickets: 3, econ: 7.50, wides: 0, noBalls: 0 },
  { name: 'Aaron', overs: 3, maidens: 0, runsGiven: 27, wickets: 1, econ: 9.00, wides: 0, noBalls: 1 },
  { name: 'Ryan', overs: 4, maidens: 0, runsGiven: 40, wickets: 1, econ: 10.00, wides: 2, noBalls: 0 },
  { name: 'David', overs: 4, maidens: 1, runsGiven: 20, wickets: 2, econ: 5.00, wides: 0, noBalls: 0 }
];

export default function ClientPanel2() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 text-sm">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">T20 Live Score</h1>

      <div className="max-w-4xl mx-auto">
        {/* Thunderbolts Batting */}
        <h2 className="font-bold text-base md:text-lg mb-2 md:mb-4">Purple Panthers - Batting (220/10)</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mb-4 md:mb-8 text-xs md:text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="px-2 md:px-4 py-2">Batter</th>
                <th className="px-2 md:px-4 py-2">R</th>
                <th className="px-2 md:px-4 py-2">B</th>
                <th className="px-2 md:px-4 py-2">4s</th>
                <th className="px-2 md:px-4 py-2">6s</th>
                <th className="px-2 md:px-4 py-2">SR</th>
              </tr>
            </thead>
            <tbody>
              {batsmanDataThunderbolts.map((batsman, index) => (
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

        {/* Thunderbolts Bowling */}
        <h2 className="font-bold text-base md:text-lg mb-2 md:mb-4">Purple Panthers - Bowling</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mb-4 md:mb-8 text-xs md:text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="px-2 md:px-4 py-2">Bowler</th>
                <th className="px-2 md:px-4 py-2">O</th>
                <th className="px-2 md:px-4 py-2">M</th>
                <th className="px-2 md:px-4 py-2">R</th>
                <th className="px-2 md:px-4 py-2">W</th>
                <th className="px-2 md:px-4 py-2">Econ</th>
              </tr>
            </thead>
            <tbody>
              {bowlerDataThunderbolts.map((bowler, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 md:px-4 py-2">{bowler.name}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.overs}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.maidens}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.runsGiven}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.wickets}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.econ}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fire Blades Batting */}
        <h2 className="font-bold text-base md:text-lg mb-2 md:mb-4">Blue Knights - Batting (230/9)</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mb-4 md:mb-8 text-xs md:text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-2 md:px-4 py-2">Batter</th>
                <th className="px-2 md:px-4 py-2">R</th>
                <th className="px-2 md:px-4 py-2">B</th>
                <th className="px-2 md:px-4 py-2">4s</th>
                <th className="px-2 md:px-4 py-2">6s</th>
                <th className="px-2 md:px-4 py-2">SR</th>
              </tr>
            </thead>
            <tbody>
              {batsmanDataFireBlades.map((batsman, index) => (
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

        {/* Fire Blades Bowling */}
        <h2 className="font-bold text-base md:text-lg mb-2 md:mb-4">Blue Knights - Bowling</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-2 md:px-4 py-2">Bowler</th>
                <th className="px-2 md:px-4 py-2">O</th>
                <th className="px-2 md:px-4 py-2">M</th>
                <th className="px-2 md:px-4 py-2">R</th>
                <th className="px-2 md:px-4 py-2">W</th>
                <th className="px-2 md:px-4 py-2">Econ</th>
              </tr>
            </thead>
            <tbody>
              {bowlerDataFireBlades.map((bowler, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 md:px-4 py-2">{bowler.name}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.overs}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.maidens}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.runsGiven}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.wickets}</td>
                  <td className="px-2 md:px-4 py-2">{bowler.econ}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
