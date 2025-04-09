import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        <Link
          to={"/dashboard"}
          className="text-3xl font-extrabold bg-blue-40 px-3 py-1 rounded-xl hover:bg-blue-600 transition duration-300"
        >
          ADMIN PAGE
        </Link>
      </div>
      <div className="text-xl font-semibold">{currentTime}</div>
    </header>
  );
};
