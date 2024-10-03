import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const roleIcons = {
  Batsman: 'https://images.vexels.com/media/users/3/316363/isolated/preview/02c4382e5d08daec77666410ddae3e6a-cricket-bat.png',
  Bowler: 'https://pngimg.com/uploads/cricket/cricket_PNG85.png',
  AllRounder: 'https://png.pngtree.com/png-clipart/20221213/ourmid/pngtree-cricket-stamps-png-image_6521913.png'
};

const TeamFormPage2 = () => {
  const [formData, setFormData] = useState({
    player1: "", player2: "", player3: "", player4: "", player5: "", player6: "", player7: "", player8: "", player9: "", player10: "", player11: ""
  });

  const [roles, setRoles] = useState({
    player1Role: "", player2Role: "", player3Role: "", player4Role: "", player5Role: "", player6Role: "", player7Role: "", player8Role: "", player9Role: "", player10Role: "", player11Role: ""
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamFormData"));
    if (storedData) {
      setFormData((prev) => ({ ...prev, ...storedData }));
    } else {
      navigate("/register");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (index, role) => {
    setRoles({
      ...roles,
      [`player${index + 1}Role`]: role,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeFormData = JSON.parse(localStorage.getItem("teamFormData"));
    localStorage.setItem("teamFormData", JSON.stringify({ ...completeFormData, ...formData, roles }));

    setLoading(true); 
    setTimeout(() => {
      localStorage.removeItem("teamFormData");
      navigate("/success"); 
    }, 2000); 
  };

  return (
    <motion.div
      className="container mx-auto p-4 sm:p-6 lg:p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="text-center">
            <video
              src="https://cdnl.iconscout.com/lottie/premium/thumb/cricket-wicket-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--stump-pack-sports-games-icons-8922617.mp4"
              autoPlay
              loop
              muted
              className="h-40 w-40 mx-auto"
            />
            <p className="text-lg font-semibold mt-4">Submitting your team details...</p>
          </div>
        </div>
      )}
      <div className="max-w-3xl mx-auto border border-gray-300 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Players</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[...Array(11)].map((_, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div className="flex-1 w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Player {index + 1}
                </label>
                <input
                  type="text"
                  name={`player${index + 1}`}
                  value={formData[`player${index + 1}`]}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center justify-between w-full sm:w-auto sm:ml-6">
                <label className="block text-lg font-medium text-gray-700 mr-2">Role:</label>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  {["Batsman", "Bowler", "AllRounder"].map((role) => (
                    <div key={role} className="flex items-center">
                      <input
                        type="radio"
                        name={`role${index + 1}`}
                        value={role}
                        checked={roles[`player${index + 1}Role`] === role}
                        onChange={() => handleRoleChange(index, role)}
                      />
                      <motion.img
                        src={roleIcons[role]}
                        alt={`${role} Icon`}
                        className="w-8 h-8 ml-1"
                        whileHover={{ scale: 1.1 }}
                      />
                      <span className="text-lg ml-1">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <motion.button
            type="submit"
            className="bg-[#1f5156] text-white px-12 py-3 rounded-md hover:bg-[#1f5156] hover:scale-105 transition duration-300 ease-in-out text-sm w-full sm:w-auto mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default TeamFormPage2;
