import React from "react";

const HomePage = () => {
  return (
    <div className="bg-blue-500 flex justify-center items-center h-full">
      <div className="text-center space-y-4">
        <h1 className="text-white font-bold text-5xl">Home Page</h1>
        <p className="text-white text-xl">
          Chào mừng đến với trang web Task Tracer
        </p>
        <button className="bg-blue-300 hover:bg-white hover:text-blue-300 text-white font-bold px-4 py-2  rounded-lg">
          Khám phá ngay
        </button>
      </div>
    </div>
  );
};

export default HomePage;
