import React from 'react';
import { motion } from 'framer-motion';
import { PinContainer } from '../ui/3d-pin';

const formatImages = {
  T20: 'https://www.shutterstock.com/image-photo/cricket-bat-ball-hitting-wicket-260nw-2254737171.jpg',
  ODI: 'https://www.shutterstock.com/image-illustration/white-leather-stitched-odi-cricket-260nw-2455944321.jpg',
  Test: 'https://i.pinimg.com/736x/1b/8e/6d/1b8e6d43c919f57c1da9830257194df8.jpg',
};

const TournamentCard = ({ name, date, teams, format }) => {
  return (
    <PinContainer title={name} href="/about">
      <motion.div
        className="flex flex-col items-center justify-center p-4 tracking-tight w-[15rem] h-[15rem] bg-[#1f5156] rounded-lg shadow-lg border border-[#1f5156]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-2">
          <motion.img
            src={formatImages[format]}
            alt={`${format} Icon`}
            className="w-16 h-16 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          />
        </div>
        <h3 className="text-center max-w-xs !pb-2 !m-0 font-bold text-2xl text-white">
          {name}
        </h3>
        <div className="text-center text-base !m-0 !p-0 font-normal" style={{ color: "#ffdd40" }}>
          <span>{date}</span>
        </div>
        <div className="text-center text-base !m-0 !p-0 font-normal" style={{ color: "#ffdd40" }}>
          <span>{teams} Teams</span>
        </div>
      </motion.div>
    </PinContainer>
  );
};

const Tourna = () => {
  const tournaments = [
    {
      name: 'T20 Blast',
      date: 'June 15-30, 2023',
      teams: 8,
      format: 'T20',
    },
    {
      name: 'ODI Championship',
      date: 'July 10-25, 2023',
      teams: 10,
      format: 'ODI',
    },
    {
      name: 'Test Series',
      date: 'August 5-30, 2023',
      teams: 4,
      format: 'Test',
    },
  ];

  return (
    <section className="text-gray-600 body-font" style={{ backgroundColor: '#b5fac7' }}>
      <div className="container px-5 py-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center w-full"
        >
          <h2 className="font-semibold mb-4 text-[#316685] text-2xl md:text-3xl lg:text-4xl">
            Featured Tournaments
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
            Check out our upcoming cricket tournaments and join the excitement on the field!
          </p>
        </motion.div>
        <motion.div className="flex flex-wrap justify-center">
          {tournaments.map((tournament) => (
            <div key={tournament.name} className="p-4 flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <TournamentCard 
                name={tournament.name} 
                date={tournament.date} 
                teams={tournament.teams} 
                format={tournament.format} 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tourna;
