import React from 'react';

const batsmanDataCyanCheetahs = [
  { name: 'Alex', runs: 30, balls: 22, minutes: 30, fours: 4, sixes: 1, strikeRate: 136.36 },
  { name: 'Ben (c)', runs: 25, balls: 18, minutes: 28, fours: 3, sixes: 1, strikeRate: 138.89 },
  { name: 'Carl', runs: 10, balls: 7, minutes: 12, fours: 2, sixes: 0, strikeRate: 142.86 },
  { name: 'Dan', runs: 8, balls: 6, minutes: 9, fours: 1, sixes: 0, strikeRate: 133.33 },
  { name: 'Ethan', runs: 15, balls: 10, minutes: 14, fours: 1, sixes: 1, strikeRate: 150.00 },
  { name: 'Finn', runs: 12, balls: 8, minutes: 10, fours: 2, sixes: 0, strikeRate: 150.00 },
  { name: 'George', runs: 5, balls: 6, minutes: 7, fours: 0, sixes: 0, strikeRate: 83.33 },
];

const bowlerDataMagentaMonkeys = [
  { name: 'Jack', overs: 2, maidens: 0, runsGiven: 14, wickets: 0, econ: 7.00, wides: 0, noBalls: 0 },
  { name: 'Tom', overs: 2, maidens: 0, runsGiven: 20, wickets: 1, econ: 10.00, wides: 0, noBalls: 1 },
  { name: 'Harry', overs: 2, maidens: 0, runsGiven: 18, wickets: 0, econ: 9.00, wides: 1, noBalls: 0 },
  { name: 'Mike', overs: 2, maidens: 0, runsGiven: 25, wickets: 2, econ: 12.50, wides: 1, noBalls: 0 },
  { name: 'Will', overs: 2, maidens: 0, runsGiven: 15, wickets: 1, econ: 7.50, wides: 0, noBalls: 0 }
];

export default function ClientPanel5() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 text-xs sm:text-sm">
      <h1 className="text-xl sm:text-2xl font-bold mb-8">T20 Live Score</h1>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-base sm:text-lg mb-4">Cyan Cheetahs - Batting (100/5 after 10 overs)</h2>
        <div className="overflow-x-auto mb-8">
          <table className="table-auto w-full text-xs">
            <thead>
              <tr className="bg-orange-400">
                <th className="px-2 sm:px-4 py-2">Batter</th>
                <th className="px-2 sm:px-4 py-2">R</th>
                <th className="px-2 sm:px-4 py-2">B</th>
                <th className="px-2 sm:px-4 py-2">M</th>
                <th className="px-2 sm:px-4 py-2">4s</th>
                <th className="px-2 sm:px-4 py-2">6s</th>
                <th className="px-2 sm:px-4 py-2">SR</th>
              </tr>
            </thead>
            <tbody>
              {batsmanDataCyanCheetahs.map((batsman, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 sm:px-4 py-2">{batsman.name}</td>
                  <td className="px-2 sm:px-4 py-2">{batsman.runs}</td>
                  <td className="px-2 sm:px-4 py-2">{batsman.balls}</td>
                  <td className="px-2 sm:px-4 py-2">{batsman.minutes}</td>
                  <td className="px-2 sm:px-4 py-2">{batsman.fours}</td>
                  <td className="px-2 sm:px-4 py-2">{batsman.sixes}</td>
                  <td className="px-2 sm:px-4 py-2">{batsman.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-bold text-base sm:text-lg mb-4">Magenta Monkeys - Bowling</h2>
        <div className="overflow-x-auto mb-8">
          <table className="table-auto w-full text-xs">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-2 sm:px-4 py-2">Bowler</th>
                <th className="px-2 sm:px-4 py-2">O</th>
                <th className="px-2 sm:px-4 py-2">M</th>
                <th className="px-2 sm:px-4 py-2">R</th>
                <th className="px-2 sm:px-4 py-2">W</th>
                <th className="px-2 sm:px-4 py-2">Econ</th>
                <th className="px-2 sm:px-4 py-2">Wd</th>
                <th className="px-2 sm:px-4 py-2">Nb</th>
              </tr>
            </thead>
            <tbody>
              {bowlerDataMagentaMonkeys.map((bowler, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 sm:px-4 py-2">{bowler.name}</td>
                  <td className="px-2 sm:px-4 py-2">{bowler.overs}</td>
                  <td className="px-2 sm:px-4 py-2">{bowler.maidens}</td>
                  <td className="px-2 sm:px-4 py-2">{bowler.runsGiven}</td>
                  <td className="px-2 sm:px-4 py-2">{bowler.wickets}</td>
                  <td className="px-2 sm:px-4 py-2">{bowler.econ}</td>
                  <td className="px-2 sm:px-4 py-2">{bowler.wides}</td>
                  <td className="px-2 sm:px-4 py-2">{bowler.noBalls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
