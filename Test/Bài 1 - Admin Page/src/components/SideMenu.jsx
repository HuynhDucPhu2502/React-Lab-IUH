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
import { NavLink } from "react-router-dom";

export const SideMenu = () => {
  return (
    <div className="border-gray-300 border-e-2 flex flex-col items-center py-4">
      <img src={logo} alt="" className="w-[150px]" />
      <nav className="my-12 w-full">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "py-2 flex flex-row justify-left space-x-2 bg-pink-500 w-full px-2 hover:cursor-pointer text-white"
                  : "py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer text-gray-500"
              }
            >
              <LayoutDashboard />
              <p className="text-lg font-bold">Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "py-2 flex flex-row justify-left space-x-2 bg-pink-500 w-full px-2 hover:cursor-pointer text-white"
                  : "py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer text-gray-500"
              }
            >
              <FolderOpenDot />
              <p className="text-lg font-bold">Projects</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                isActive
                  ? "py-2 flex flex-row justify-left space-x-2 bg-pink-500 w-full px-2 hover:cursor-pointer text-white"
                  : "py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer text-gray-500"
              }
            >
              <UsersRound />
              <p className="text-lg font-bold">Teams</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive
                  ? "py-2 flex flex-row justify-left space-x-2 bg-pink-500 w-full px-2 hover:cursor-pointer text-white"
                  : "py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer text-gray-500"
              }
            >
              <ChartSpline />
              <p className="text-lg font-bold">Analytics</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive
                  ? "py-2 flex flex-row justify-left space-x-2 bg-pink-500 w-full px-2 hover:cursor-pointer text-white"
                  : "py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer text-gray-500"
              }
            >
              <MessageSquareText />
              <p className="text-lg font-bold">Messages</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/intergrations"
              className={({ isActive }) =>
                isActive
                  ? "py-2 flex flex-row justify-left space-x-2 bg-pink-500 w-full px-2 hover:cursor-pointer text-white"
                  : "py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer text-gray-500"
              }
            >
              <Blocks />
              <p className="text-lg font-bold">Intergrations</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
