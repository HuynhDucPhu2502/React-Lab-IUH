import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-8 py-3 flex flex-row justify-between items-center border-2 border-gray-500">
      {/* title */}
      <div>
        <p className="text-3xl text-blue-500 font-bold">Task List</p>
      </div>

      {/* Navigate */}
      <nav className="space-x-12">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `text-lg text-blue-400 hover:text-blue-700 cursor-pointer ${
              isActive ? "font-bold text-blue-900" : ""
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/tasks"}
          className={({ isActive }) =>
            `text-lg text-blue-400 hover:text-blue-700 cursor-pointer ${
              isActive ? "font-bold text-blue-900" : ""
            }`
          }
        >
          Tasks
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
