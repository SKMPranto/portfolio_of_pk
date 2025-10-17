import React from "react";

const Navbar = () => {
  const NavItems = (
    <>
      <li>
        <a
          className="text-xl font-bold"
          onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
        >
          About Me
        </a>
      </li>
      <li>
        <a
          className="text-xl font-bold"
          onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className="text-xl font-bold"
          onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
        >
          Education
        </a>
      </li>
      <li>
        <a
          className="text-xl font-bold"
          onClick={() => window.scrollTo({ top: 1600, behavior: "smooth" })}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className="text-xl font-bold"
          onClick={() => window.scrollTo({ top: 2300, behavior: "smooth" })}
        >
          Contact Me
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NavItems}
          </ul>
        </div>
        <a className="text-xl">
          <h1 className="text-2xl lg:text-5xl font-bold">
            PRAN<span className="text-orange-500">T</span>O
          </h1>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
