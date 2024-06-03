import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex bg-slate-800 text-white py-3">
        <div className="logo flex ">
          {/* <img
            className="h-8 w-8 mx-4 object-cover"
            src="src/assets/todo.png"
            alt="logo-image"
          /> */}
          <h1 className="font-bold mx-8 text-2xl hover:cursor-pointer hover:text-black ">
            My<span className="text-red-600">Task</span>
          </h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
