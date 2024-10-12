import React from "react";

const AppNavbar = () => {
  return (
    <div className="navbar px-4 shadow-md" style={{ backgroundColor: "#f9f9f9" }}>
      {/* Navbar Start */}
      <div className="navbar-start">
        <a href="/" className="flex items-center">
          <img src="assets/woe.png" alt="Logo World of Equations" className="w-16 h-16 mr-3" />
          <span className="text-xl font-semibold" style={{ color: "#f97316" }}>World of Equations</span>
        </a>
      </div>

      {/* Navbar Center (Search) */}
      <div className="navbar-center hidden lg:flex">
        <div className="relative">
          <input
            type="text"
            className="input input-bordered pl-4 pr-12 py-2 rounded-full w-96 shadow-sm focus:outline-none focus:ring-2"
            style={{ borderColor: "#f97316", color: "#1f2937" }}
            placeholder="Search"
            placeholderStyle={{ color: "#9ca3af" }}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <kbd className="kbd kbd-sm bg-gray-200 px-2 py-1 rounded-lg mx-2">⌘</kbd>
            <kbd className="kbd kbd-sm bg-gray-200 px-2 py-1 rounded-lg">K</kbd>
          </div>
        </div>
      </div>

      {/* Navbar End with Dropdown for Mobile */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu-compact dropdown-content menu mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Courses</a>
            </li>
            <li>
              <a>Register</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>

        {/* Navbar for Larger Screens */}
        <div className="hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="px-4" style={{ color: "#1f2937" }}>Home</a>
            </li>
            <li>
              <a className="px-4" style={{ color: "#1f2937" }}>Courses</a>
            </li>
          </ul>
          <a
            className="btn btn-outline ml-3 px-4 py-2 text-sm rounded-full transition-all"
            style={{ borderColor: "#f97316", color: "#f97316" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#fb923c", e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#f97316")}
          >
            Register
          </a>
          <a
            className="btn ml-3 px-4 py-2 text-sm rounded-full text-white transition-all"
            style={{ backgroundColor: "#f97316" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ea580c")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#f97316")}
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
