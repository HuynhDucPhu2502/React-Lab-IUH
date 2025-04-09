import {
  Blocks,
  ChartSpline,
  FolderOpenDot,
  LayoutDashboard,
  MessageSquareText,
  UsersRound,
} from "lucide-react";
import logo from "../assets/Logo_IUH.png";

import React from "react";

export const SideMenu = () => {
  return (
    <div className="border-gray-300 border-e-2 flex flex-col items-center py-4">
      <img src={logo} alt="" className="w-[150px]" />
      <nav className="my-12 w-full">
        <ul>
          <li className="py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer">
            <LayoutDashboard />
            <p className="text-gray-500 text-lg font-bold">Dashboard</p>
          </li>
          <li className="py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer">
            <FolderOpenDot />
            <p className="text-gray-500 text-lg font-bold">Projects</p>
          </li>
          <li className="py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer">
            <UsersRound />
            <p className="text-gray-500 text-lg font-bold">Teams</p>
          </li>
          <li className="py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer">
            <ChartSpline />
            <p className="text-gray-500 text-lg font-bold">Analytics</p>
          </li>
          <li className="py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer">
            <MessageSquareText />
            <p className="text-gray-500 text-lg font-bold">Message</p>
          </li>
          <li className="py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer">
            <Blocks />
            <p className="text-gray-500 text-lg font-bold">Intergrations</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};
