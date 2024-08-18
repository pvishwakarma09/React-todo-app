import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex mx-3  py-2">
        <div className="logo flex ">
          {/* <img
            className="h-8 w-8 mx-1  mt-1 object-cover"
            // src="src/assets/todo.png"
            alt="logo-image"
          /> */}
          <h1 className="font-bold  text-4xl hover:cursor-pointer text-blue-900">
            My<span className="text-white">Tasks</span>
          </h1>
        </div>
      </nav> 
    </>
  );
};

export default Navbar;
