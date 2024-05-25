import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-700 text-white py-3">
      <div className="logo">
        <span className="font-bold text-xl mx-8">MyTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="Cursor-pointer hover:font-bold transition-all duration-500">Home</li>
        <li className="Cursor-pointer hover:font-bold transition-all duration-500">About</li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
