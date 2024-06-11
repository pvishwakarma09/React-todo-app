import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex mx-3  py-3">
        <div className="logo flex ">
          <img
            className="h-8 w-8 mx-1  mt-1 object-cover"
            src="src/assets/todo.png"
            alt="logo-image"
          />
          <h1 className="font-bold  text-3xl hover:cursor-pointer ">
            My<span className="text-red-600">Tasks</span>
          </h1>
        </div>
      </nav> 
    </>
  );
};

export default Navbar;
