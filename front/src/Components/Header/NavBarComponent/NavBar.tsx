import React from "react";

const NavBar = () => {
  return (
    <nav className="h-[60px] flex px-2 items-center bg-gradient-to-l from-lime-950 to-lime-800 text-white gap-2 w-full">
      <menu className="flex justify-center w-full ">
        <ul className="flex items-center justify-around w-1/2">
          <li className="p-1 font-bold text-white rounded bg-slate-500">
            <a href="#">Home</a>
          </li>
          <li className="p-1 font-bold text-white rounded bg-slate-500">
            <a href="#">About</a>
          </li>
          <li className="p-1 font-bold text-white rounded bg-slate-500">
            <a href="#">Contact</a>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default NavBar;
