import React from "react";

const AppNavbar = () => {
  return (
    <div className="navbar px-4 shadow-md fixed w-full top-0 left-0 z-10" style={{ backgroundColor: "#f9f9f9" }}>
      {/* Navbar Start */}
      <div className="navbar-start flex-grow">
        <div className="navbar-start-left mx-2">
          <a href="/" className="flex items-center">
            <img src="assets/woe_logo.png" alt="Logo World of Equations" className="w-16 h-16 mr-3" />
            <span className="text-xl font-semibold" style={{ color: "#f97316" }}>World of Equations</span>
          </a>
        </div>

        <div className="navbar-start-right dropdown dropdown-hover bg-transparent">
          <ul tabIndex={0} role="button" className="menu menu-horizontal p-0 m-0">
            <li className="p-0" style={{ color: "#1f2937", position: "relative" }}>
              <a className="hidden md:flex">Categories 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
          </ul>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar Center (Search) */}
      <div className="navbar-center hidden lg:flex">
        <div className="relative">
          <input
            type="text"
            className="input input-bordered pl-4 pr-12 py-2 rounded-full w-96 shadow-sm focus:outline-none focus:ring-2"
            style={{ borderColor: "#f97316", color: "#1f2937" }}
            placeholder="Search"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <kbd className="kbd kbd-sm bg-gray-200 px-2 py-1 rounded-lg mx-2">{navigator.platform.indexOf('Mac') > -1 ? '⌘' : 'Ctrl'}</kbd>
            <kbd className="kbd kbd-sm bg-gray-200 px-2 py-1 rounded-lg">K</kbd>
          </div>
        </div>
      </div>

      {/* Navbar End */}
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
              <a>Pricing</a>
            </li>
            <li>
              <a href="/signup">Sign up</a>
            </li>
            <li>
              <a href="/login">Log in</a>
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
            <li>
              <a className="px-4" style={{ color: "#1f2937" }}>Pricing</a>
            </li>
          </ul>
          <a href="/login"
            className="btn ml-3 px-4 py-2 text-sm rounded-full text-white transition-all"
            style={{ backgroundColor: "#f97316" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ea580c")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#f97316")}
          >
            Log in
          </a>
          <a href = '/signup'
            className="btn btn-outline ml-3 px-4 py-2 text-sm rounded-full transition-all"
            style={{ borderColor: "#f97316", color: "#f97316" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#fb923c", e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#f97316")}
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
