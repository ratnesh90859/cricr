import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(3); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1); 
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      localStorage.clear();
      navigate("/"); 
    }

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const handleReturnHome = () => {
    localStorage.clear(); 
    navigate("/");
  };

  return (
    <div className="text-center p-4">
          <h2 className="font-semibold mb-4 text-[#316685] text-2xl md:text-3xl lg:text-4xl">
          Team Registered Successfully!</h2>
      <img
        className="object-cover object-center rounded-lg border border-gray-300 mx-auto mb-6"
        alt="Success Animation"
        src="https://media4.giphy.com/media/FeBamTuuPUTnFrqfx0/giphy.gif?cid=6c09b952djjkt4561ci63tffwnza5oomjujkkxuegg10cmyc&ep=v1_stickers_related&rid=giphy.gif&ct=s"
        style={{ width: "200px", height: "200px" }} 
      />
      <button
        onClick={handleReturnHome}
        className="bg-[#1f5156] text-white px-20 py-4 rounded-md hover:bg-[#1f5156] hover:scale-105 transition duration-300 ease-in-out text-sm"
      >
        Return to Home
      </button>
      <p className="mt-4 text-gray-600"style={{fontSize:"30px"}}>
        You will be redirected in {timeLeft} second{timeLeft !== 1 && 's'}...
      </p>
    </div>
  );
};

export default Success;
